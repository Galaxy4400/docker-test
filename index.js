import express from "express";
import fetch from "node-fetch";

const app = express();

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || "http://localshos:3005";

app.get("/", (req, res) => {
	fetch(DATE_SERVER_HOST)
		.then((res) => res.json())
		.then((date) => {
			res.send(`Hello! Date: ${date}\n`);
		});
});

app.listen(3000, () => {
	console.log("Ready");
});
