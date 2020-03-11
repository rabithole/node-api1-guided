const express require('express'); // A path goes here when needed. 
// This access modules installed. 

const server = express(); // returns a server object. 

// TCP/IP goes in parameters of the function below. 
// 4000 is the designated port
server.listen(4000, () => {
	console.log('listening on port 4000...');
})
// Places in listen mode. 