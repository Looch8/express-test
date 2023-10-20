// where we run the server

const { app, PORT } = require("./server");

app.listen(PORT, () => {
	console.log(`Server running on:` + PORT);
});
