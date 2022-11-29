# Working with the Gocontentful API

Let's consider a very simple use case where you have a Contentful space where you store information
about people and their pets.
To generate a go package to manipulate those entries, run the following in your terminal:

```shell
$ gocontentful -spaceid YOUR_SPACE_ID -cmakey YOUR_CMA_API_TOKEN -contenttypes person,pet path/to/your/go/project/folder/people 
```

The **-contenttypes** parameter is optional. If not specified, gocontentful will generate an API that supports all the content types of the space.

Gocontentful will scan the space, download locales and content types and generate the Go API files in the target path:

```shell
path/to/your/go/project/folder/people
|-gocontentfulvobase.go
|-gocontentfulvolib_person.go // One file for each content type
|-gocontentfulvolib_pet.go    // One file for each content type
|-gocontentfulvolib.go
|-gocontentfulvo.go
```

We recommend not passing the _-cmakey_ parameter but rather log in first using the Contentful CLI. 
This will be remembered in all subsequent runs. See the [Getting started chapter](./getting-started#optional-tools)  

Note: Do NOT modify the generated files! If you change the content model in Contentful just run gocontentful
again. This will update the files for you.

### Get a client

The generated files will be in the "people" subdirectory of your project. Your go program can get a Contentful
client from them:

```go
cc, err := people.NewContentfulClient(YOUR_SPACE_ID, people.ClientModeCDA, YOUR_API_KEY, 1000, contentfulLogger, people.LogDebug,false)
```

The parameters to pass to NewContentfulClient are:

- *spaceID* (string)
- *clientMode* (string) supports the constants ClientModeCDA, ClientModeCPA and ClientModeCMA. If you need to operate
  on multiple APIs (e.g. one for reading and CMA for writing) you need to get two clients
- *clientKey* (string) is your API key (generate one for your API at Contentful)
- *optimisticPageSize* (uint16) is the page size the client will use to download entries from the space for caching.
  Contentful's default is 100 but you can specify up to 1000: this might get you into an error because Contentful
  limits the payload response size to 70 KB but the client will handle the error and reduce the page size automatically
  until it finds a proper value. Hint: using a big page size that always fails is a waste of time and resources because
  a lot of initial calls will fail, whereas a too small one will not leverage the full download bandwidth. It's a
  trial-and-error and you need to find the best value for your case. For simple content types you can start with 1000,
  for very complex ones that include fat fields you might want to get down to 100 or even less.
- *logFn* is a func(fields map[string]interface{}, level int, args ...interface{}) that the client will call whenever
  it needs to log something. It can be nil if you don't need logging and that will be handled gracefully but it's not
  recommended. A simple function you can pass that uses the https://github.com/Sirupsen/logrus package might look
  something like this:
```go
contentfulLogger := func(fields map[string]interface{}, level int, args ...interface{}) {
    switch level {
    case people.LogDebug:
        log.WithFields(fields).Debug(args)
    case people.LogInfo:
        log.WithFields(fields).Info(args)
    case people.LogWarn:
        log.WithFields(fields).Warn(args)
    case people.LogError:
        log.WithFields(fields).Error(args)
    default:
        return
    }
}
```
- *logLevel* (int) is the debug level (see function above). Please note that LogDebug is very verbose and even logs 
when you request a field value but that is not set for the entry.
- *debug* (bool) is the Contentful API client debug switch. If set to *true* it will log on stdout all the CURL calls
to Contentful. This is extremely verbose and extremely valuable when something fails in a call to the API because
it's the only way to see the REST API response.

_NOTE:_ Gocontentful provides an offline version of the client that can load data from a JSON space export file
(as exported by the _contentful_ CLI tool). This is the way you can write unit tests against your generated API that
don't require to be online and the management of a safe API key storage. See the [API Reference](./api-reference)

### Environments support

Gocontentful supports Contentful environments in two ways:

- Code can be generated loading the content model from an environment other than master. 
This is done passing the -environment flag on the command  line to specify the environment you want to load the model from.
- The gocontentful client in your application can be switched to any environment with the SetEnvironment method. 
For example, if your space has an extra environment named "devplayground" you can switch the API to use it with:
```go
cc.SetEnvironment("devplayground") 
```
To reset the environment to master pass an empty string.

### Working with entries

See [the previous chapter](./test-api) for an introduction on entry operations. 
With your newly created client you can do things like:

```go
// Load all persons
persons, err := cc.GetAllPerson() 
// Load a specific person
person, err := cc.GetPersonByID(THE_PERSON_ID)
// or pass a query
person, err := GetFilteredPerson(&contentful.Query{
	"contentType":"person",
    "exists": []string{"fields.resume"}
})
// The person's name
name := person.Name()
// The work title in a different localization. Available locales are generated as constants.
// If a space is configured to have a fallback from one locale to the default one, 
// the getter functions will return that if the value is not set for locale passed to the function.
name := person.Title(people.SpaceLocaleItalian) 
// Get references to the person's pets
petRefs := person.Pets()
// Deal with pets
for _, pet := range petRefs {
switch pet.ContentType {
case people.ContentTypeDog: // you have these constants in the generated code
dog := pet.VO.(*people.Dog)
// do something with dog
case people.ContentTypeCat:
// ...
}
```
Once you have loaded an entry, you can use any of the setter methods to alter the fields. For example:
```go
dog.SetAge(7)
```
This will only affect the Go object and doesn't automatically propagate to the space.
To save the entry to Contentful you need to explicitly call one of these methods:
```go
// Upsert (save) an entry
err := dog.UpsertEntry()
// Publish it (after it's been upserted)
err := dog.PublishEntry() // change your mind with err := dog.UnpublishEntry()
// Or do it in one step
err := dog.UpdateEntry() // upserts and publishes
// And delete it
err := dog.DeleteEntry()
```
If you want to know the publication status of an entry as represented in Contentful's UI you 
can use the `GetPublishingStatus()` method on the entry itself. Possible return values are the
predefined constants `StatusDraft`, `StatusChanged` and `StatusPublished`.

When saving, publishing or deleting entries:
- You need a client that uses mode *ClientModeCMA*. Entries retrieved with ClientModeCDA
  or ClientModeCPA can be saved in memory (for example if you need to enrich the built-in cache) but not persisted to
  Contentful.
- Make sure you Get a fresh copy of the entry right before you manipulate it and upsert it / publish it to Contentful. In case it's
 saved by someone else in the meantime, the upsert will fail with a version mismatch error. 

In case you need a completely new entry just create it, Contentful will fill in the technical details for you:

```go
NewCfPerson(contentfulClient ...*ContentfulClient) (cfPerson *CfPerson)
```

### Assets

Contentful allows upload and reference of binary assets and gocontentful fully supports them.
Assuming the dog entry references a picture in a field you can get it with:
```go
picture := dog.Picture() // you can pass a locale to this function as usual
```
This returns a *contenful.AssetNoLocale object handling localization for you in two ways. 
First, the field itself could be localized in the model, referencing two different assets altogether.
Secondly, the asset itself can have different files uploaded for different locales. 
No matter what, the gocontentful API will return the right file: 
```go
// Get the asset's URL at Contentful's CDN
if picture != nil && picture.Fields != nil && picture.Fields.File != nil {
    theURL := picture.Fields.File.URL
    // ...then do something with it
}
```
There are various functions and methods to work with assets, for example to create an asset
starting from an URL or to convert an asset to a reference to store it in a parent entry
field. See the [API Reference](./api-reference) chapter for details.

Note: there is no function to create a new asset in the generated code because the type `AssetNoLocale` 
is from the _github.com/foomo/contentful_ package, just instantiate one if you need a blank asset.

### Working with RichText

Contentful supports Rich Text fields. Behind the scenes, these are JSON objects that represent
the content through a Contentful-specific data model. Sooner or later you might want to convert such values to and from HTML.
Gocontentful supports the conversion both ways. For instance, you want a person's resume to be converted to HTML:

```go
htmlText := people.RichTextToHtml(person.Resume(), linkResolver, entryLinkResolver, imageResolver, embeddedEntryResolver locale)
```

The parameters linkResolver, entryLinkResolver, embeddedEntryResolver and imageResolver are all functions that you can pass
to convert various elements inserted by the user into the RichText field:

- linkResolver will allow you to create custom HTML tags for hyperlinks. If left blank, RichTextToHtml will just output an A tag.
- entryLinkResolver is used to create hyperlinks with custom URLs when the destination in Contentful is another entry. 
If you allow such links to be created in the editor then you must pass this function.
- imageResolver and embebbedEntryResolver are needed when the field accepts assets and entries embedded into the content, to turn
these into actual HTML snippets

The conversion works the other way around too, when you need to source data from outside and create Contentful entries:

```go
myRichText := HtmlToRichText(htmlSrc)
```

See the [API Reference](./api-reference) for more details about these functions.

### More on references

When working with references it's often useful to know if there are any broken ones in the space. 
This happens when a published entry references another that has been deleted after the parent
was published. This might create issues if your application code doesn't degrade content gracefully.
To get a report of all broken references you can use the following function:

```go
(cc *ContentfulClient) BrokenReferences() (brokenReferences []BrokenReference)
```
Note that this only works with cached clients. See [the next chapter on caching](./caching).

Also on references: when you want to reference entry B from entry A, you cannot assign
the value object of entry B to the reference field in A. First you need to convert the
object to a `ContentTypeSys` object because that's what Contentful expects in reference fields:

```go
(vo *CfPerson) ToReference() (refSys ContentTypeSys)
```

Finally, you can get the parents (AKA referring) entries of either an entry or 
an EntryReference with the _GetParents()_ method. This returns a slice of `[]EntryReference`:

```go
(vo *CfPerson) GetParents() (parents []EntryReference, err error)
(ref *EntryReference) GetParents(cc *ContentfulClient) (parents []EntryReference, err error)
```

### Other useful functions 

Another thing you might want to know is the content type of an entry with a given ID:

```go
(cc *ContentfulClient) GetContentTypeOfID(ID string) (contentType string)
```

### Caveats and limitations

- Avoid creating content types that have field IDs equal to reserved Go words (e.g. "type"). 
Gocontentful won't scan for them and the generated code will break.
