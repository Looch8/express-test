// IMport express
const express = require("express");

// Make an instance of express as a server
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
	response.json({
		message: "Hello World",
	});
});

module.exports = { app, PORT };
