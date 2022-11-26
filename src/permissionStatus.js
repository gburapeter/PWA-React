if ("PushManager" in window) {
	console.log("Push messaging is  supported");
} else {
	console.log("not supported");
}

export function askPermission() {
	return new Promise(function (resolve, reject) {
		const permissionResult = Notification.requestPermission(function (
			result
		) {
			resolve(result);
		});

		if (permissionResult) {
			permissionResult.then(resolve, reject);
		}
	}).then(function (permissionResult) {
		if (permissionResult !== "granted") {
			throw new Error("We weren't granted permission.");
		}
		if (permissionResult == "granted") {
			console.log("permission granted");
		}
	});
}
