import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send(new Date());
});

app.listen(3005, () => {
	console.log("Ready");
});
