[/1] Prototype / Spike Idea
Give me an idea of the spike / prototype that you're going to build to try your framework. It should involve a minimal working demonstration of the tech.

----------------------

For the REST example, I would probably build an "addition" server. Send a request with two numbers as parameters. The response includes the sum in a JSON object.

Because it's a network application, I would define the protocol:

REQUEST:
GET http://apps.example.com/addserv?x=2&y=3

RESPONSE:
{
  "x": 2,
  "y": 3,
  "sum": 5
}

I'd then add a POST request/response for sending an arbitrary length array of numbers.
-----------------------------------

That would be the proposal.

Once it's built and running, I'd investigate adding more features. HTTPS? With pinning? Authentication? Curried state? Multiple services? A CRUD example? Hosting it somewhere live?
