// IMport express
const express = require("express");

// Make an instance of express as a server
const app = express();

const PORT = process.env.PORT || 3000;

// This lets us read POST'd JSON body data on the reuqest
app.use(express.json());

// Configuratuion goes above ^^^^
// Routes go below
app.get("/", (request, response) => {
	response.json({
		message: "Hello World",
	});
});

app.post("/", (request, response) => {
	response.json({
		received: request.body.message,
	});
});

module.exports = { app, PORT };
