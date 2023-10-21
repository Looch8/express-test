const { app } = require("../src/server");

// IMport supertest so we can manage the app/server in tests properly
const request = require("supertest");

describe("server root route exists and returns hello world", () => {
	test("Root route exists and returns status 200", async () => {
		const responseResult = await request(app).get("/");
		expect(responseResult.statusCode).toBe(200);
	});

	test("Root route exits and returns hello world message,", async () => {
		const reponse = await request(app).get("/");
		expect(reponse.body.message).toEqual("Hello World");
	});
});

describe("POST to root route copies message in request body", () => {
	test('POST request.body.message of "HELLO WORLD" returns received value of "hello world"', async () => {
		let messageToSend = "Hello world";
		const response = await request(app)
			.post("/")
			.send({ message: messageToSend });

		expect(response.body.received).toEqual(messageToSend);
	});
});
