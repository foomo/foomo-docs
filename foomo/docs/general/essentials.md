# (Random) essentials

## Markdown

Learn markdown(this is a markdown document 🤓)

- original markdown docs by John Gruber https://daringfireball.net/projects/markdown/
- a cheatsheet https://www.markdownguide.org/cheat-sheet/
- [githubs markdown docs](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Vim

[Vim](https://www.vim.org/) is everywhere so no matter if you ssh into a place or try to edit a file in a container, you are going to need it.

Here is a super minimal cheat sheet:

```shell
# edit/create a file
vim path/file
```

Now the shortcuts:

<table style={{
    width : "100%"
}}>
    <thead>
        <tr>
            <th>shortcut</th>
            <th>function</th>
            <th>note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>:h&lt;enter&gt;</code></td>
            <td>help</td>
            <td>a bit overwhelming</td>
        </tr>
        <tr>
            <td><code>:q&lt;enter&gt;</code></td>
            <td>quit</td>
            <td>immediate instinct after looking at help 🤣</td>
        </tr>
        <tr>
            <td><code>:q!&lt;enter&gt;</code></td>
            <td>quit ignoring changes</td>
            <td>! means, that you actually mean it and can be combined with a lot of commands</td>
        </tr>
        <tr>
            <td><code>:w&lt;enter&gt;</code></td>
            <td>write / save file</td>
            <td></td>
        </tr>
        <tr>
            <td><code>:x&lt;enter&gt;</code></td>
            <td> save and exit</td>
            <td></td>
        </tr>
        <tr>
            <td><code>:x!&lt;enter&gt;</code></td>
            <td> force save and exit</td>
            <td></td>
        </tr>
        <tr>
            <td><code>11G</code></td>
            <td>go to line 11</td>
            <td></td>
        </tr>
        <tr>
            <td><code>$</code></td>
            <td> go to last char in line</td>
            <td></td>
        </tr>
        <tr>
            <td><code>dd</code></td>
            <td>delete line</td>
            <td></td>
        </tr>
        <tr>
            <td><code>x</code></td>
            <td> delete char</td>
            <td></td>
        </tr>
        <tr>
            <td><code>i</code></td>
            <td> enter insert mode</td>
            <td>that is where you can actually edit stuff - press escape to exit insert mode</td>
        </tr>
        <tr>
            <td><code>&lt;esc&gt;</code></td>
            <td>exit insert mode</td>
            <td></td>
        </tr>
        <tr>
            <td><code>&lt;ctrl&gt;v</code></td>
            <td>visual block</td>
            <td>then use cursors to edit selection</td>
        </tr>
        <tr>
            <td><code>x</code></td>
            <td>cut</td>
            <td></td>
        </tr>
        <tr>
            <td><code>p</code></td>
            <td>paste</td>
            <td></td>
        </tr>
    </tbody>
</table>

## ssh

allows you to remotely and securely log into computers - `man ssh` should be available on any shell.

digital ocean has a decent intro into ssh https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys

There is a lot of other tutorials - your typical use cases will be:

- logging into other computers
- executing commands on those computers
- tunneling network connections

Once ssh is set up correctly `scp`, `git` and a lot of other programs, that rely on ssh under the covers are fun to use too.

## git

https://git-scm.com/doc

## github

Yes despite the fact, that m$ bought them, we use them and you have to enable [2fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)

## Some data formats

### yaml

https://yaml.org/ some love it for good a reason, some hate it for another good reason, but atm there is just no way around it.

### json

https://www.json.org/json-en.html similar love and hate situation like with yaml - also no way out.

### CSV

If you think parsing or serializing CSV is trivial, you have been warned. 

https://datatracker.ietf.org/doc/html/rfc4180 

### protocol buffers

Fast, compact not human readable - not necessary for most use cases

https://developers.google.com/protocol-buffers

### xml

https://www.w3.org/TR/REC-xml/ only little love here