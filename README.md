## React Server Renderer

This project is a prototype for a frontend service, which will respond with static markup when a page is requested.

It can be interacted with through either HTTP GET or POST and serves as a way to initialise react components to then be made interactive on the client.

### GET
This is intended to just serve a static page that may not need any props pre-loaded by the server.

### POST
Anything you send via HTTP POST will be used as pre-loaded props for the react component returned.
