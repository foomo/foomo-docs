"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"go-race-conditions-testing-and-coverage","metadata":{"permalink":"/blog/go-race-conditions-testing-and-coverage","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2023-03-17-go-race-conditions-testing-and-coverage/index.mdx","source":"@site/blog/2023-03-17-go-race-conditions-testing-and-coverage/index.mdx","title":"Go race conditions testing and coverage","description":"Go has extensive support for concurrency through goroutines and channels. This feature allows programs to progress on several tasks at the same time but it requires some extra care to prevent situations where multiple goroutines might collide and lead to a panic. These are known as race conditions and they happen when a shared variable is read and written at the same time by two different routines. A typical example is a concurrent read/write of a map in memory.","date":"2023-03-17T00:00:00.000Z","formattedDate":"March 17, 2023","tags":[{"label":"golang","permalink":"/blog/tags/golang"},{"label":"concurrency","permalink":"/blog/tags/concurrency"},{"label":"testing","permalink":"/blog/tags/testing"}],"hasTruncateMarker":false,"authors":[{"name":"Cristian Vidmar","title":"Content Chef","url":"https://github.com/cvidmar","imageURL":"https://github.com/cvidmar.png","key":"cristian"},{"name":"Philipp Mieden","title":"MSc","url":"https://github.com/dreadl0ck","imageURL":"https://github.com/dreadl0ck.png","key":"philipp"}],"frontMatter":{"slug":"go-race-conditions-testing-and-coverage","authors":["cristian","philipp"],"tags":["golang","concurrency","testing"]},"nextItem":{"title":"Accuracy of decimal computations","permalink":"/blog/accuracy-of-decimal-computations"}},"content":"Go has extensive support for concurrency through goroutines and channels. This feature allows programs to progress on several tasks at the same time but it requires some extra care to prevent situations where multiple goroutines might collide and lead to a panic. These are known as race conditions and they happen when a shared variable is read and written at the same time by two different routines. A typical example is a concurrent read/write of a map in memory.\\n\\nTo illustrate an example let\'s consider [gocontentful](https://github.com/foomo/gocontentful), the code generator that creates an API to access a Contentful CMS from go. The generated API uses an in-memory cache to store a copy of a Contentful space and some extra data structures to allow go programs to access Contentful data, inspect and resolve references and so on. In a typical scenario, the client is used in a service that responds to HTTP calls and makes heavy use of concurrency because it needs to be able, at the same time, to:\\n\\n- Read entries, assets and references from the cache\\n- Update/Delete single entities and their connections with others (for example the map of parent entries)\\n- Incrementally sync the content of the cache with data changes coming from Contentful\\n- Rebuild the cache entirely and swap the existing one with a new copy\\n\\nIn addition, for performance reasons, when the cache is created or rebuilt the gocontentful client spawns up to four goroutines to download chunks of data in parallel across the Internet, dynamically selecting the size the sorting of the chunks to leverage the maximum parallelism.\\n\\n## Detecting race conditions through unit tests\\n\\nWe experienced race conditions with the client in the past, and we fixed them to maintain it production-ready with every new version. To help with this, we included a testing framework in gocontentful that generates a sample API from a local export of a Contentful space and then runs several unit tests that, among others, test the client for concurrency safety:\\n\\n![make test](make-test.webp)\\n\\nOne of these unit tests spawns tens of thousands of goroutines to concurrently read, write and inspect the references of specific entries while at the same time keeps rebuilding the cache. From the screenshot above we see that no race condition is shown. Even at this concurrency level, though there\'s no guarantee that running\\n\\n```bash\\ngo test ./...\\n```\\n\\nwill be enough to generate a collision. What we really want to do is to add a new parameter to enable the go race detector with\\n\\n```bash\\ngo test -race ./...\\n```\\n\\n(In gocontentful you can run _make race_ to fire up both the API generation and the race test)\\n\\nFrom the documentation at https://go.dev/blog/race-detector:\\n\\n> _When the\xa0-race\xa0command-line flag is set, the compiler instruments all memory accesses with code that records\xa0when and how the memory was accessed, while the runtime library watches for unsynchronized accesses to shared variables. When such \u201cracy\u201d behavior is detected, a warning is printed._\\n\\nRunning this in gocontentful shows that we indeed have a potential collision condition:\\n\\n![Race condition](race-condition.webp)\\n\\n_Note: After you run this test you\'ll want to search for \\"race\\" inside the terminal output. Make sure you enable a very long (if not infinite) scrollback or you might miss some hits._\\n\\nThe race detector reports the filenames and lines of code that generated the race condition. Looking at those lines in our example shows that a field of the cache (the \\"offline\\" boolean) is written protecting it with a proper mutex lock but the lock handling is missing around the read operation:\\n\\n![Read access](read-access.webp)\\n\\n![Write access](write-access.webp)\\n\\nThe fix is very simple but in this particular case the offline flag is read and then a 2 seconds delay is started. Deferring the unlock would keep the variable locked for far too long, so we will read-lock it only for the time needed to copy its value to a local variable:\\n\\n![Fix race condition](fix-race-condition.webp)\\n\\nAfter fixing the issue in the generator templates and regenerating the code, the tests with the race detector run fine. In gocontentful this can be done all in one step with make race:\\n\\n![No race condition](no-race-condition.webp)\\n\\n## Test coverage\\n\\nThat was nice! But how do we know if we\'re covering all test cases? Go has been supporting test code coverage since 1.12 through the -cover option. We can also limit the coverage to a specific package. In our case, we\'re only interested in the _testapi_ sub-package because we want to test the generated API, not the generator itself.\\n\\n```bash\\ngo test -cover -coverpkg=./test/testapi ./...\\n```\\n\\nLet\'s try and run the tests with coverage:\\n\\n![Basic coverage](basic-coverage.webp)\\n\\nThe summary shows we are only covering 22% of the code. The goal is not to cover 100%, some parts only work online calling the actual API of a real Contentful space, but we definitely have room for improvement.\\n\\nThe question is: how do we know exactly which lines of code we\'re covering through the test suite? Again, go test comes to the rescue through another option: _-coverprofile_ lets us specify an output file that will contain references to each single line of code involved in the analysis. It is a text file, but not very readable:\\n\\n```\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:21.86,22.15 1 1\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:25.2,25.18 1 1\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:28.2,29.16 2 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:32.2,33.16 2 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:36.2,37.37 2 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:40.2,40.24 1 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:22.15,24.3 1 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:25.18,27.3 1 1\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:29.16,31.3 1 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:33.16,35.3 1 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:37.37,39.3 1 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:43.114,44.35 1 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:47.2,48.18 2 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:51.2,53.16 3 0\\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:56.2,57.16 2 0\\n...\\n```\\n\\nWe can use _go tool_ to convert it to a much better representation in HTML:\\n\\n```bash\\ngo tool cover -html=cover.out -o cover.html\\n```\\n\\nOpening this file in a browser reveals a lot of useful information:\\n\\n![Coverage HTML](coverage-html.webp)\\n\\nAt the top left of the page there\'s a menu where we can select from all the files analyzed, listed along with the percentage of coverage for each one. Inside every file the lines covered by the tests are green while the red ones are not covered. In the example above we can see that the getAllAssets function is covered but it includes an _else_ condition that is never met.\\n\\nIn gocontentful (starting from 1.0.18) we can generate the test API, run the tests with coverage, convert the output file and open it in the browser with a single command:\\n\\n```bash\\nmake cover\\n```\\n\\nAs stated above, not necessarily 100% of the code needs to be covered by the tests, but this view in combination with the race detector gives us incredibly useful information to make the code more solid."},{"id":"accuracy-of-decimal-computations","metadata":{"permalink":"/blog/accuracy-of-decimal-computations","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2023-03-06-accuracy-of-decimal-computations/index.mdx","source":"@site/blog/2023-03-06-accuracy-of-decimal-computations/index.mdx","title":"Accuracy of decimal computations","description":"Intro","date":"2023-03-06T00:00:00.000Z","formattedDate":"March 6, 2023","tags":[{"label":"golang","permalink":"/blog/tags/golang"},{"label":"currency","permalink":"/blog/tags/currency"},{"label":"decimal accuracy","permalink":"/blog/tags/decimal-accuracy"}],"hasTruncateMarker":false,"authors":[{"name":"Patrick Buchner","title":"MSc","url":"https://github.com/uebriges","imageURL":"https://github.com/uebriges.png","key":"patrickb"},{"name":"Bo\u0161tjan Maru\u0161i\u010d","title":"PhD","url":"https://github.com/marusicbostjan","imageURL":"https://github.com/marusicbostjan.png","key":"marusicbostjan"}],"frontMatter":{"slug":"accuracy-of-decimal-computations","authors":["patrickb","marusicbostjan"],"tags":["golang","currency","decimal accuracy"]},"prevItem":{"title":"Go race conditions testing and coverage","permalink":"/blog/go-race-conditions-testing-and-coverage"},"nextItem":{"title":"Why bundle size is important?","permalink":"/blog/why-bundle-size-is-important"}},"content":"## Intro\\n\\nCalculating with money can be tricky if not taken proper precautions. Some might be tempted to use float representation for calculating with currency values. That is problematic because of possible rounding errors.\\n\\n## Finite accuracy of representation\\n\\nFloating points are represented like this\\n\\n![Floating point representation](floating_point_representation.webp)\\n\\nNot every number can be represented with a finite number of decimal places\\n\\n0.01 \u2014> 0.0000011001100110011\u2026\\n\\nTaking 17 places of the above results in 0.010000000000000001\\n\\nConsider the following code snipet that shows the missing accuracy\\n\\n```go\\nfunc main() {\\n\\n  var n float64 = 0\\n\\n  for i := 0; i < 1000; i++ {\\n    n += .01\\n  }\\n\\n  fmt.Println(n)\\n\\n}\\n```\\n\\nResult: 9.999999999999831\\n\\n## Money computations\\n\\nThey can\'t be done with floating-point as it would inevitably lead to rounding errors.\\n\\nEven the following packages are problematic:\\n\\n[github.com/shopspring/decimal](https://github.com/shopspring/decimal)\\n\\n[github.com/Rhymond/go-money](https://github.com/Rhymond/go-money)\\n\\n```go\\na := decimal.NewFromInt(2)\\nb := decimal.NewFromFloat(300.99)\\nc := a.Mul(b)\\nd := c.Div(decimal.NewFromInt(3))\\n```\\n\\n## Solution\\n\\nUse Int by representing money in cents:\\n\\n- 10.99 -> 1099 (cents)\\n- 10.9900 -> 109900 (4 digit tax)\\n\\n## Conclusion\\n\\n**Division is a problem!**\\n\\n1/3 - > 0.33333333\u2026\\nCorrect way: 0.33, 0.33, 0.34\\n\\nWhen doing money calculations one should avoid division as it inevitably leads to loss of accuracy.\\nWhen dividing make sure to round to cent and deal with diffs.\\n\\nDivision by 10^k is ok as long as we are inside of the range of the data type."},{"id":"why-bundle-size-is-important","metadata":{"permalink":"/blog/why-bundle-size-is-important","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-03-17-why-bundle-size-is-important/index.mdx","source":"@site/blog/2022-03-17-why-bundle-size-is-important/index.mdx","title":"Why bundle size is important?","description":"Intro","date":"2022-03-17T00:00:00.000Z","formattedDate":"March 17, 2022","tags":[{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"bundle","permalink":"/blog/tags/bundle"},{"label":"bundle size","permalink":"/blog/tags/bundle-size"}],"hasTruncateMarker":false,"authors":[{"name":"Nicola Turcato","title":"Memelord brother","url":"https://github.com/nicolaturcato","imageURL":"https://github.com/nicolaturcato.png","key":"nicola"}],"frontMatter":{"slug":"why-bundle-size-is-important","authors":["nicola"],"tags":["javascript","bundle","bundle size"]},"prevItem":{"title":"Accuracy of decimal computations","permalink":"/blog/accuracy-of-decimal-computations"},"nextItem":{"title":"Prometheus Is Out Of Memory. Again.","permalink":"/blog/prometheus-cardinality-issues"}},"content":"## Intro\\n\\nJavaScript is parsed, compiled and executed in the main thread of the browser. Which means that users have to wait for all of this before they can interact with the website.\\n\\nFrontend performance optimization is critical because\xa0it accounts for around 80-90% of user response time (10-20% backend).\\nSo when a user is waiting for a page to load, around 80-90% of the time is due to frontend related code and assets.\\n\\n## Nobody likes waiting\u2026\\n\\nA\xa0study found\xa0that if a site takes longer than 4 seconds to load, up to 25% of users would abandon the site.\\n\\nSending large JavaScript payloads impacts the speed of your site significantly.\\n\\n![Mazzarri](mazzarri.webp)\\n\\n## What is a \\"bundle\\"?\\n\\nYour frontend application needs a bunch of JS files to run. These files can be in the format of internal dependency like the JS files you have written yourself. But they can also be external dependencies you use to build your application.\\n\\nJS bundling is\xa0an optimization technique to reduce the number of server requests for JavaScript files. Bundling accomplishes this by merging multiple JA files together into one file to reduce the number of page requests.\\n\\n![Bundle Everywhere](bundle_everywhere.webp)\\n\\n## Performance implications\\n\\n- **Time to transmit over the network**: considering slow connections with some mobile devices, it\'s possible that your page will not be interactive until it loads.-> More bytes = longer download times\\n- **JS parse and compile time**: more code you load, more the browser must parse.-> JS gets parsed and compiled on the main thread, when the main thread is busy, the page can\'t respond to user input\\n- **JS execution time**: optimally you will only pack the code that you expect to execute. The more code you want to execute the longer it will take. It\'s possible that your page won\'t be interactive until some of this completes.-> JS is also executed on the main thread, if your page runs a lot of code before it\'s really needed, that also delays your Time to Interactive\\n- **Memory consumption**: everything fills up the space -> code itself, runtime variables, DOM elements created, etc.-> Pages appear slow when it consumes a lot of memory. Memory leaks can cause your page to freeze up completely!!\\n\\n## What is the recommended bundle size?\\n\\nAS SMALL AS POSSIBLE! I experienced that is not really possible to give a precise answer because each application is different. Generally you want the resources on initial load to be as small as possible, so that you decrease the initial load time, and then load more resources as needed on the fly.\\n\\n![Mr Chao](mr_chao.webp)\\n\\n## What do we do then?\\n\\n![Meh](meh.webp)\\n\\n## How to start decreasing the bundle size?\\n\\n- **Measure**: first of all you want to measure. The first step is to use Lighthouse and try to understand the results. It will give you a couple of interesting metrics and some tips. Time to interactive (TTI)\xa0is a good reflection of your bundle size because your bundle needs to be evaluated entirely before a user can interact with your web app.\\n- **Analyze**: Consists on analyzing the bundle in order to detect critical chunks. A useful tool is Webpack Bundle Analyzer.\\n\\n![Stonks](stonks.webp)\\n\\n## Breaking up the bundle...\\n\\n- **Monitor network requests**: These happens between our FCP and TTI. As the initial request for data often occurs when our components initially mount.\\n- **Reduce the total dom nodes**: the less the page needs to render, the less time it takes.\\n- **Moving work off the main thread**: By moving heavy computations to a web worker, the computation will be run on a separate thread, and not block the actual rendering of the page\\n- **Caching**: Even if not useful for users on first page landing, caching data, bundles, and assets can make subsequent visits way fast\\n\\n![Breaking Bad](breaking_bad.webp)\\n\\n## Which strategies can we adopt?\\n\\n- **Minification and Dead Code Elimination**: These processes are often summed up as\xa0minifying\xa0or\xa0uglifying.\\n- **Tree shaking**: Tree shaking is dead code elimination on a project or library. Always try to use deps which support \u201ctree shaking\u201d, Bundlephobia could be your friend in this case.\\n- **Code Splitting and Lazy Loading**: Code splitting consists on taking a collection of modules and remove them from the main JS bundle. Lazy loading means we can load this newly created bundle later on.\\n- **Replace/rewrite large dependencies**: Consider replacing or rewriting libraries that are large in size where you might not need all of its functionalities (Moment.js for example).\\n- **Feature module import**: Check to see if you are using only a feature module of the library that can be imported alone without importing the whole library (Lodash for example).\\n\\n![Strategy](strategy.webp)\\n\\n## Useful tools to help you reducing bundle size\\n\\n- **Lighthouse**: automated tool for improving the performance, quality, and correctness of your web apps\\n- **Bundlephobia**: Bundlephobia\xa0helps you find the performance impact of npm packages\\n- **Webpack Bundle Analyzer**: analyzes your bundle\\n- **VS Code**: Import Cost plugin -> Display import/require package size in the editor\\n\\n![Tools](tools.webp)\\n\\n## Conclusion\\n\\nPerformance cannot be stripped down to a single metric such as bundle size. It would be great!\\nUnfortunately there is no single place to measure all of them.I think metrics like the\xa0Core Web Vitals and a general look at bundle size should be considered as a starting point.\\nYou will cry... A lot... But don\u2019t give up!\\n\\n![The End](the_end.webp)"},{"id":"prometheus-cardinality-issues","metadata":{"permalink":"/blog/prometheus-cardinality-issues","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-25-prometheus-cardinality-issues/index.mdx","source":"@site/blog/2022-01-25-prometheus-cardinality-issues/index.mdx","title":"Prometheus Is Out Of Memory. Again.","description":"The Annoyance","date":"2022-01-25T00:00:00.000Z","formattedDate":"January 25, 2022","tags":[{"label":"prometheus","permalink":"/blog/tags/prometheus"},{"label":"cardinality","permalink":"/blog/tags/cardinality"},{"label":"devops","permalink":"/blog/tags/devops"},{"label":"ops","permalink":"/blog/tags/ops"},{"label":"k8s","permalink":"/blog/tags/k-8-s"},{"label":"oom","permalink":"/blog/tags/oom"},{"label":"memory","permalink":"/blog/tags/memory"}],"hasTruncateMarker":false,"authors":[{"name":"Stefan Martinov","title":"Memelord","url":"https://github.com/smartinov","imageURL":"https://github.com/smartinov.png","key":"smartinov"}],"frontMatter":{"slug":"prometheus-cardinality-issues","authors":["smartinov"],"tags":["prometheus","cardinality","devops","ops","k8s","oom","memory"]},"prevItem":{"title":"Why bundle size is important?","permalink":"/blog/why-bundle-size-is-important"},"nextItem":{"title":"The never ending search a search engine 2022-01 edition","permalink":"/blog/searching-for-search-engines"}},"content":"## The Annoyance\\n\\nSo, we\'ve all been there. You go to your trusty grafana, search for some sweet metrics that you implemented and WHAM!\\nPrometheus returns us a 503, a trusty way of saying I\'m not ready, and I\'m probably going to die soon.\\nAnd since we\'re running in kubernetes I\'m going to die soon, again and again.\\nAnd you\'re getting reports from your colleagues that prometheus is not responding.\\nAnd you can\'t ignore them anymore.\\n\\n![Bummer.](bummer.webp)\\n\\n\\n## The Problem\\n\\nAll right, lets check what\'s happening to the little guy.\\n\\n```bash\\nkubectl get pods -n monitoring\\n\\nprometheus-prometheus-kube-prometheus-prometheus-0       1/2     Running   4          5m\\n```\\n\\nIt seems like it\'s stuck in the running state, where the container is not yet ready.\\nLet\'s describe the deployment, to check out what\'s happening.\\n\\n```yaml\\n     State:          Running                                                                                                                                                                                                                        \u2502\\n       Started:      Wed, 12 Jan 2022 15:12:49 +0100                                                                                                                                                                                                \u2502\\n     Last State:     Terminated                                                                                                                                                                                                                     \u2502\\n       Reason:       OOMKilled                                                                                                                                                                                                                      \u2502\\n       Exit Code:    137                                                                                                                                                                                                                            \u2502\\n       Started:      Tue, 11 Jan 2022 17:14:41 +0100                                                                                                                                                                                                \u2502\\n       Finished:     Wed, 12 Jan 2022 15:12:47 +0100                                                                                                                                                                                                \u2502\\n```\\n\\nSo we see that the prometheus is in a running state waiting for the readiness probe to trigger, probably working on recovering from Write Ahead Log (WAL).\\nThis could be an issue where prometheus is recovering from an error, or a restart and does not have enough memory to write everything in the WAL.\\nWe could be running into an issue where we set the request/limits memory lower than the prometheus requires, and the kube scheduler keeps killing prometheus for wanting more memory.\\n\\nFor this case, we could give it more memory to work to see if it recovers. We should also analyze why the prometheus WAL is getting clogged up.\\n\\nIn essence, we want to check what has changed so that we suddenly have a high memory spike in our sweet, sweet environment.\\n\\n## The Source\\n\\n![Cardinality](cardinality.webp)\\n\\nA lot of prometheus issues revolve around cardinality.\\nMemory spikes that break your deployment? Cardinality.\\nPrometheus dragging its feet like it\'s Monday after the log4j (the second one ofc) zero day security breach? Cardinality.\\nNot getting that raise since you worked hard the past 16 years without wavering? You bet your ass it\'s cardinality.\\nSo, as you can see much of life\'s problems can be accredited to cardinality.\\n\\nIn short cardinality of your metrics is the combination of all label values per metric.\\nFor example, if our metric ```http_request_total``` had a label response code, and let\'s say we support 8 status codes, our cardinality starts off at 8.\\nFor good measure we want to record the HTTP verb for the request. We support ``GET POST PUT HEAD`` which would put the cardinality to 4\\\\*8=**32**.\\nNow, if someone adds a URL to the metric label (**!!VERY BAD IDEA!!**, but bare with me now) and we have 2 active pages, we\'d have a cardinality of 2\\\\*4\\\\*8=**64**.\\nBut, imagine someone starts scraping your website for potential vulnerabilities. Imagine all the URLs that will appear, most likely only once.\\n\\n```text\\nmywebsite.com/admin.php\\nmywebsite.com/wp/admin.php\\nmywebsite.com/?utm_source=GUID\\n...\\n```\\n\\nThis would blow up our cardinality to kingdom come. Like you will be out of memory faster than \\"[a new super awesome Javascript gamechanger framework](https://www.reddit.com/r/ProgrammerHumor/comments/a483yz/those_javascript_devs/)\\" is born.\\nOr to quote user [naveen17797](https://www.reddit.com/user/naveen17797/) _Scientists predict the number of js frameworks may exceed human population by 2020,at that point of time random string generators will be used to name those frameworks._\\n\\nThe point to this story is, be very mindful of how you use labels and cardinality in prometheus, since that will indeed have great impact on your prometheus performance.\\n\\n## The Solution\\n\\nSince this has never happened to me (never-ever) I found the following solution to be handy.\\nSince we can\'t get prometheus up and running to utilize PromQL to detect the potential issues, we have to find another way to detect high cardinality.\\nTherefore, we might want to get our hands dirty with some ```kubectl exec -it -n monitoring pods/prometheus-prometheus-kube-prometheus-prometheus-0 -- sh```, and run the prometheus ``tsdb`` analysis too.\\n```bash\\n/prometheus $ promtool tsdb analyze .\\n```\\n\\nWhich produced the result.\\n\\n```text\\n> Block ID: 01FT8E8YY4THHZ2S7C3G04GJMG\\n> Duration: 1h59m59.997s\\n> Series: 564171\\n> Label names: 285\\n> Postings (unique label pairs): 21139\\n> Postings entries (total label pairs): 6423664\\n>\\n> ...\\n>\\n> Highest cardinality metric names:\\n> 11340 haproxy_server_http_responses_total\\n> ...\\n```\\n\\nWe see the potential issue here, where the ``haproxy_server_http_responses_total`` metric is having a super-high cardinality which is growing.\\nWe need to deal with it, so that our prometheus instance can breathe again. In this particular case, the solution was updating the haproxy.\\n\\n... or burn it, up to you.\\n\\n![Flame Thrower](flame-thrower.webp)\\n\\n## The Further Reading\\n\\n1. [WAL Definition](https://github.com/prometheus/prometheus/blob/main/tsdb/docs/format/wal.md)\\n2. [WAL & Checkpoints](https://ganeshvernekar.com/blog/prometheus-tsdb-wal-and-checkpoint/)\\n3. [Using TSDB](https://www.robustperception.io/using-tsdb-analyze-to-investigate-churn-and-cardinality)\\n4. [Biggest Metrics](https://www.robustperception.io/which-are-my-biggest-metrics)\\n5. [Cardinality](https://www.robustperception.io/cardinality-is-key)"},{"id":"searching-for-search-engines","metadata":{"permalink":"/blog/searching-for-search-engines","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-20-searching-for-search-engines.mdx","source":"@site/blog/2022-01-20-searching-for-search-engines.mdx","title":"The never ending search a search engine 2022-01 edition","description":"While building this website and integrating https://docsearch.algolia.com and evaluating another solution by a large company in parallel I could not help to search github and the web for the current state of search engines and search related services.","date":"2022-01-20T00:00:00.000Z","formattedDate":"January 20, 2022","tags":[{"label":"search","permalink":"/blog/tags/search"},{"label":"search-engine","permalink":"/blog/tags/search-engine"},{"label":"backend","permalink":"/blog/tags/backend"},{"label":"go","permalink":"/blog/tags/go"}],"hasTruncateMarker":false,"authors":[{"name":"Jan Halfar","title":"foomo maintainer","url":"https://github.com/janhalfar","imageURL":"https://github.com/janhalfar.png","key":"jan"}],"frontMatter":{"slug":"searching-for-search-engines","authors":["jan"],"tags":["search","search-engine","backend","go"]},"prevItem":{"title":"Prometheus Is Out Of Memory. Again.","permalink":"/blog/prometheus-cardinality-issues"},"nextItem":{"title":"Impact of 3rd party scripts on performance","permalink":"/blog/impact-of-3rd-party-scripts-on-performance"}},"content":"While building this website and integrating https://docsearch.algolia.com and evaluating another solution by a large company in parallel I could not help to search github and the web for the current state of search engines and search related services.\\n\\nSince I had done the same thing about a year ago, I was surprised to see how quickly things are moving atm.\\n\\n## Algolia\\n\\nI was blown away by the quality of https://www.algolia.com and I wish it was open source, but I guess, we all have to make a living ;)\\n\\nTo see how awesome a web (search) interface can be check out https://www.lacoste.com/us/#query=red%20jackets%20for%20men \\n\\nApart from that the UI/UX of their backend tools is fantastic.\\n\\n## Elastic\\n\\nWhen it comes to https://www.elastic.com I am a bit nervous about the future of the licensing, despite the fact, that I understand their motivation. At the same time the https://opensearch.org does not seem to be an ampty threat.\\n\\n\\n## typesense.org\\n\\nI do not know, who was hiding under a rock, but I had not seen https://typesense.org before and they certainly have a bold claim: ___\\"The Open Source Algolia Alternative\\" / \\"The Easier To Use ElasticSearch Alternative\\"___ \\n\\nWhen looking at https://github.com/typesense/typesense/graphs/contributors it seems, that Kishore Nallan has been working on this for a while. Unfourtunately I do not really see a lot of external contributions, C++ does not seem to attract a lot of contribution.\\n\\n## MeiliSearch\\n\\nThis Rust project https://www.meilisearch.com/ seems to be picking up speed and is definetly on the test short list. It is a fresh codebase with siginficant open source contributions and certainly will attract new developers with Rust and a modern architecture.\\n\\n## Go eco system\\n\\nObviously we are very interested in Go powered software and there are a few notable projects. ATM I do not see anything elastic or algolia like, that would be really mature. \\n\\n\\n### bleve / bluge\\n\\n[Marty Schoch](https://github.com/mschoch) seems to be the man when it comes down to text indexing libraries in written in Go and bluge seems to be THE library, that is solid and modern, when implementing text search in your Go application.\\n\\nhttps://github.com/blevesearch/bleve\\nhttps://github.com/blugelabs/bluge // next iteration of bleve\\n\\n#### projects using bluge\\n\\nAll bleeding edge afaik atm - but definitely good places to look at bluge usage\\n\\nhttps://github.com/prabhatsharma/zinc \\nhttps://github.com/mosuka/phalanx\\n\\n### Look ma I made a vector database\\n\\nGotta take a look at this one - will report later\\n\\nhttps://github.com/semi-technologies/weaviate"},{"id":"impact-of-3rd-party-scripts-on-performance","metadata":{"permalink":"/blog/impact-of-3rd-party-scripts-on-performance","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-20-exploring-partytown/index.mdx","source":"@site/blog/2022-01-20-exploring-partytown/index.mdx","title":"Impact of 3rd party scripts on performance","description":"Issue with performance","date":"2022-01-20T00:00:00.000Z","formattedDate":"January 20, 2022","tags":[{"label":"frontend","permalink":"/blog/tags/frontend"},{"label":"performance","permalink":"/blog/tags/performance"}],"hasTruncateMarker":false,"authors":[{"name":"Marko Trebi\u017ean","title":"Frontend Dev","url":"https://github.com/themre","imageURL":"https://github.com/themre.png","key":"marko"}],"frontMatter":{"slug":"impact-of-3rd-party-scripts-on-performance","authors":["marko"],"tags":["frontend","performance"]},"prevItem":{"title":"The never ending search a search engine 2022-01 edition","permalink":"/blog/searching-for-search-engines"},"nextItem":{"title":"debugging Go map races in k8s","permalink":"/blog/debugging-go-map-races-in-k8s"}},"content":"## Issue with performance\\n\\nWhen building an ecommerce site or an application where performance is a great deal for the users, you need to keep your application fast and responsive. Frontend developers have already many use-cases when the UI becomes laggy and this increases when 3rd party scripts are being included, such as Google Tag Manager or various Live chats (e.g. Intercom).\\n\\nThis does not only influences the users when using the site but also Lighthouse score gets lower which also influences page rankings. So the most naive and easy way for this is to defer loading of such scripts but when you need to get all the data from the start of the application, such tactic is not an option. So what else can we do?\\n\\n## Partytown to the rescue\\n\\nDevelopers at BuilderIO created an library [Partytown](https://github.com/BuilderIO/partytown) that would allow relocating resources from 3rd party scripts off the main thread.\\nWe won\'t dive into specifics how it works, because they explain it nicely on their GitHub page.\\n\\nIn our stack we use [Next.js](https://nextjs.org/) React framework and we will go through the basic steps that will allow us to include Partytown for Google Tag Manager.\\n\\n### Setup\\n\\nPartytown script needs to be located inside our application and live on the same domain. Since we\'re using monorepo structure, we need to copy this script across all our frontend application. For that we used CopyPlugin webpack plugin in our Next.js config file:\\n\\n```javascript\\nconfig.plugins.push(\\n      ...\\n      new CopyPlugin({\\n        patterns: [\\n          {\\n            // we copy script from node_modules partytown package to `~partytown` folder in our package that serves static files\\n            from: path.join(path.dirname(require.resolve(\'@builder.io/partytown\')), \'lib\'),\\n            // paths for SSR and client side rendering differ\\n            to: path.join(`${isServer ? \'..\' : \'.\'}/static/assets/`, \'~partytown\'),\\n          },\\n        ],\\n      })\\n    );\\n```\\n\\nPartytown\'s requirement is that it needs to know what script should it load into own web worker. For that we set script type to `text/partytown`. This will prevent script to load on initial load.\\n\\nInside `_document.tsx` we add this:\\n```javascript\\n<Head>\\n    ...\\n    // include Partytown and set custom path due to multiple frontends\\n    <Partytown lib={`${addTrailingSlash(this.props.basePath)}_next/static/assets/~partytown/`} debug={false} />\\n    // tag 3rd party script with partytown type\\n    <script type=\\"text/partytown\\" src={`https://www.googletagmanager.com/gtm.js?id=${id}`} />\\n    ...\\n</Head>\\n```\\n\\n## Results\\n\\nSo now, does it work? We used one of our large Ecommerce sites to test the landing Lighthouse score. \\n\\nThis was before adding Partytown:\\n\\n![Lighthouse before Partytown](lighthouse_before.jpg)\\n\\nHere you can see 2 critical things: almost 1s of total blocking time (TBT) and 9s of time to interactive (TTI). \\n\\nAfter we added Partytown, we got this:\\n\\n![Lighthouse after Partytown](lighthouse_after.jpg)\\n\\nTime to interactive went from 9s to 6.1s which is almost 33% improvement and total blocking time was reduce by more than 50%! We were more than impressed how easy it was to improve our performances.\\n\\nSide note: Both screenshots were compressed using [Squoosh App](https://squoosh.app/).\\n\\n# Next steps\\n\\nAfter successful testing of Partytown for Google Tag Manager script, we are more than interested in trying it out on our other scripts. One important topic will be to test Partytown with other service-worker related libraries and how to use them together."},{"id":"debugging-go-map-races-in-k8s","metadata":{"permalink":"/blog/debugging-go-map-races-in-k8s","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-19-map-race-debugging/index.mdx","source":"@site/blog/2022-01-19-map-race-debugging/index.mdx","title":"debugging Go map races in k8s","description":"","date":"2022-01-19T00:00:00.000Z","formattedDate":"January 19, 2022","tags":[{"label":"go","permalink":"/blog/tags/go"},{"label":"debugging","permalink":"/blog/tags/debugging"},{"label":"backend","permalink":"/blog/tags/backend"}],"hasTruncateMarker":false,"authors":[{"name":"Philipp Mieden","title":"MSc","url":"https://github.com/dreadl0ck","imageURL":"https://github.com/dreadl0ck.png","key":"philipp"}],"frontMatter":{"slug":"debugging-go-map-races-in-k8s","authors":["philipp"],"tags":["go","debugging","backend"]},"prevItem":{"title":"Impact of 3rd party scripts on performance","permalink":"/blog/impact-of-3rd-party-scripts-on-performance"},"nextItem":{"title":"Relaunching foomo.org","permalink":"/blog/welcome-back-2021"}},"content":""},{"id":"welcome-back-2021","metadata":{"permalink":"/blog/welcome-back-2021","editUrl":"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2021-11-12-welcome/index.md","source":"@site/blog/2021-11-12-welcome/index.md","title":"Relaunching foomo.org","description":"A few years ago we abandoned the previous version of https//www.github.com/foomo .","date":"2021-11-12T00:00:00.000Z","formattedDate":"November 12, 2021","tags":[{"label":"foomo","permalink":"/blog/tags/foomo"}],"hasTruncateMarker":false,"authors":[{"name":"Jan Halfar","title":"foomo maintainer","url":"https://github.com/janhalfar","imageURL":"https://github.com/janhalfar.png","key":"jan"}],"frontMatter":{"slug":"welcome-back-2021","authors":["jan"],"tags":["foomo"]},"prevItem":{"title":"debugging Go map races in k8s","permalink":"/blog/debugging-go-map-races-in-k8s"}},"content":"A few years ago we abandoned the previous version of https://www.foomo.org as we did not want to maintain the old wordpress installation and the project was only living in README.md in the repos living under https://www.github.com/foomo .\\n\\nAs things have grown over time we have decided to re-launch a website / cross project documentation.\\n\\nSo welcome back and enjoy the view to the past:\\n\\n![blast from the past](blast-from-the-past.png)"}]}')}}]);