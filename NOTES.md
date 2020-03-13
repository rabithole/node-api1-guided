## Install Commands
	* npm i
	* npm i express
	* i = install
	* -g = global
	* npm --help
	* npm init
	* -y = accept all defaults

## Run Commands
	* npm run server

# Node.js, Express Postman.services, CRUD web API
# Building and API
	* API = Application Programming Interface

### JSON = JacaScript Object Notation
	* URI = URL

### Express is like React for the back end. 
	* Express is a Node.js module. 
	* Unopinionated = Doesn't force us into a design pattern. 

### Node links/NPM = Node Package Module and Express links, HTTP methods
* https://v8.dev/
* https://nodejs.org/en/
* NPM packages https://www.npmjs.com/
* http://expressjs.com/
* https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

### nodemon restarts server service when changes are made. 

### TCCP port
* TCP/IP protocol suite: 
* https://en.wikipedia.org/wiki/Internet_protocol_suite
* https://microchipdeveloper.com/tcpip:tcp-ip-ports
* package swith network
* port # aka socket


# My webpt11 cohort
	* Benjamin Doyle, Hysen sisco, Dustin Graham, Antoinette Jones, 
	* Steven Oakley, Delfin Mongendu, Kara Peoples, Branden Franks


# .gitignore, supplemental for master branch on node-api1-project
	* npx gitignore node -- node designates the project being worked on. 
	* npm install gitignore -g -- -g = global. 
	* github/gitignore

# Package.json file creation
	* npm init creates a new package.json file. 
	* npm init -y = accept all defaults. 
	* npm i nodemon - is a package to be installed with this command. 

### Any file that begins with a . indicates it should be hidden. Think of hidden files in Windows. 

* postgress is another language instead of sqlite
* 

### REST architecture/ AKA RESTful Web APIT
	* REpresentational State Transfer is a set of principles
#### REST API's have six constraints. 
	* **client-server** architecture.

	* **stateless** architecture: each request should stand on its own, and order should not matter. No shared state.

	* **cacheable**: improves network performance.
		- GET, PUT, and DELETE should be idempotent (the same command executed multiple times, the state of resources on the server is exactly the same, much like pure functions)
		- POST is not idempotent.
		- Caching is a way to store and retrieve data so that future requests can be fulfilled faster without repeating expensive calculations or operations.

	* **layered system**: component A (a client) might or might not communicate directly with component B (the server). There may be other layers between them like logging, caching, DNS servers, load balancers, and authentication.

	* **code on demand**
		- The API returns the resource and code to act on it.
		- The client only needs to know how to execute the code.
		- Makes the API more flexible, upgradable and extendible.
		- Most web application, send JavaScript code along with the data.

	* **uniform interfaces**
		- Each resource should be accesible through a single url. Not a hard requirement, but recommended.
		- We should be able to manage the resources through these representations (the URL).
		- every interaction with the resource should happen through the URL identifier we gave to it.
		- Self-descriptive messages.
		- **HATEOAS** (**H**yepermedia **A**s **T**he **E**ngine **O**f **A**pplication **S**tate). Much like a choose your own adventure book, the pages are not read in order. You start at page 1, and based on the information available, the reader (client) chooses the action to take, moving them to a different page. A good example of a hypermedia API is the [GitHub API](https://api.github.com/).

# Server-Side Routing with Express
