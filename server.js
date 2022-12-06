const express = require("express");

const bodyParser = require("body-parser");

const webpush = require("web-push");

const app = express();

app.use(bodyParser.json());

// webpush.setVapidDetails(
// 	"mailto: `YOUR EMAIL OR WEBSITE ADDRESS`",
// 	"YOUR-PUBLIC-VAPID-KEY",
// 	"YOUR-PRIVATE-VAPID-KEY"
// );

// create a GET route
app.get("/test", (req, res) => {
	res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/notification", (req, res) => {
	const subscription = req.body.subscription;

	const vapidDetails = {
		publicKey: process.env.VAPID_PUBLIC_KEY,
		privateKey: process.env.VAPID_PRIVATE_KEY,
		subject: process.env.VAPID_SUBJECT,
	};
	const payload = JSON.stringify({
		title: "Hello, Notifications!",
		options: {
			body: `ID: ${Math.floor(Math.random() * 100)}`,
		},
	});
	// Customize how the push service should attempt to deliver the push message.
	// And provide authentication information.
	const options = {
		TTL: 10000,
		vapidDetails: vapidDetails,
	};
	webpush
		.sendNotification(subscription, payload, options)
		.then((result) => {
			console.log(`Result: ${result.statusCode}`);
		})
		.catch((error) => {
			console.log(`Error: ${error} `);
		});
});

const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
