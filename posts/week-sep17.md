Framework Overview

High-level overview of your framework, it's components, and their interactions.

Begin with an architecture diagram and 1 or 2 paragraph explanation appropriate for a lay audience.

1 or 2 paragraph technical introductions.

Then 3 to 5 paragraph body + diagram on the framework.

1 paragraph conclusion.

eg: "REST is a way for two programs to communicate over the internet. A lot of applications use a client-server architecture where a client sends a request to a server, and the server sends back a response. REST is a standardized way to format those requests and responses. It's built on the same way that web browsers send requests and receive web pages from websites. REST applies that web way of interacting to general client-server programs that need to communicate with each other. Using REST allows programs running on different computers written by different people can talk to one another."

< DIAGRAM for above >

"REST is a presentation layer protocol that formats and sends requests and responses over HTTP. Request and response parameters are encoded in the HTTP message. Small requests (GET, PUT, HEAD, DELETE) put parameters into the query part of the HTTP URL. Larger requests use a HTTP POST message. All data is encoded as it would be for a standard HTTP message. HTTP headers and cookies can also be used to send information.

"Previous standards faced many architectural issues when run over the internet. Many did not work properly through firewalls, were very complex and heavy-weight, and failed to leverage the existing network infrastructure in place to support the web. REST was built with several architectural constraints so that it would work anywhere that HTTP worked. Since HTTP was ubiquitous, and had a plethora of supporting technologies and systems already in place, REST was able to run almost anywhere and could benefit from those technologies that supported HTTP.

< One sentence for each of the 6 architecture constraints. What they are and what they mean. >

< Discussion of RESP API at the application layer, and then the presentation layer protocol. >

< DIAGRAM for the below section of the messages in flight. >

< Track a request / response through a round-trip showing receipt at each layer and the conversion between them. >

"The REST protocol leverages decades of work and infrastructure to support HTTP requests. It is lightweight, and simple to understand and use. It's underlying protocol (HTTP) is a robust workhorse of the internet. REST is uniformly defined at the presentation layer, and there are many libraries available for virtually all network capable modern programming languages.  REST is flexible enough to service any application layer protocol that does not violate its design constraints. Those constraints mirror the restraints of HTTP, so it can be applied to a very broad range of client-server interactions. REST is a natural choice for the presentation layer in web applications."
