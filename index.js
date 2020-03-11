const express = require('express'); // A path goes here when needed. 
// This access modules installed. 

const db = require('./data/hubs-model.js');// .js is not requeired. 
// calls local database file. 

const server = express(); // returns a server object. 

// TCP/IP goes in parameters of the function below. 
// 4000 is the designated port
server.listen(4000, () => {
	console.log('listening on port 4000...');
})
// Places in listen mode. 


// Don't include a path for use to call all paths. 
// All requests will go through the use method. 
server.use(express.json());


// HTTP method
// URI : scheme://host_name:port/path?parameter_list

// Methods below... 
server.get('/', (req, res) => {
	res.send('hellow world!'); // Printed in the browser
})
// req = request contains all information about the HTTP request. 
// res = response sends back information from the server.

server.get('/hey', (req, res) => {
	res.send('hi there');
}) 

// server.get('/favicon.ico', (req, res) => { res.status(204);});

// R - Read (CRUD)
server.get('/hubs', (req, res) => {
	db.find()
		.then(hubs => {
			res.status(200).json({hubs});
		})
		.catch(err => {
			res.status(500).json({sucess: false, err});
		});
})
// json() will stringify the object. 


// C - Create (CRUD)
server.post('/hubs', (req, res) => { // req.body, check in express url
	const hubInfo = req.body;

	db.add(hubInfo)
		.then(hub => {
			res.status(201).json({success: true, hub});
		})
		.catch(err => {
			res.status(500).json({success: false, err });
		});
})

// DELETE /hubs/5
server.delete('/hubs/:id', (req, res) => {
	// const id = req.params.id;
	const {id} = req.params; // deconstruct parms and get id. 

	db.remove(id)
		.then(deleted => {
			if (deleted) {
				res.status(204).end();
			} else {
				res.status(404).json(
					{success:false, message:'id not found'});
			}
		})
		.catch(err => {
			res.status(500).json({success: false, err});
		});
})

server.put('/hubs/:id', (req, res) => {
	const {id} = req.params;
	const changes = req.body;

	db.update(id, changes)
		.then(updated => {
			if (updated) {
				res.status(200).end({sucess: true, updated});
			} else {
				res.status(404).json(
					{success:false, message:'id not found'});
			}
		})
		.catch(err => {
			res.status(500).json({success: false, err});
		});
})

server.patch('/hubs/:id', (req, res) => {

})