const captureVideoButton = document.querySelector(".capture-button");
const screenshotButton = document.querySelector("#screenshot-button");
const img = document.querySelector("img");
const video = document.querySelector("video");

const canvas = document.createElement("canvas");
const constraints = {
	video: true,
};

// captureVideoButton.addEventListener("click", function () {
// 	navigator.mediaDevices
// 		.getUserMedia(constraints)
// 		.then(handleSuccess)
// 		.catch(handleError);
// });

captureVideoButton.onclick = function () {
	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(handleSuccess)
		.catch(handleError);
};

// screenshotButton.addEventListener("click", function () {
// 	canvas.width = video.videoWidth;
// 	canvas.height = video.videoHeight;
// 	canvas.getContext("2d").drawImage(video, 0, 0);
// 	// Other browsers will fall back to image/png
// 	img.src = canvas.toDataURL("image/webp");
// });

screenshotButton.onclick = video.onclick = function () {
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	canvas.getContext("2d").drawImage(video, 0, 0);
	// Other browsers will fall back to image/png
	img.src = canvas.toDataURL("image/webp");
};

// function recordVideo() {
// 	navigator.mediaDevices
// 		.getUserMedia(constraints)
// 		.then(handleSuccess)
// 		.catch(handleError);
// }

// function capturePhoto() {
// 	canvas.width = video.videoWidth;
// 	canvas.height = video.videoHeight;
// 	canvas.getContext("2d").drawImage(video, 50, 0);
// 	canvas.style.backgroundColor = "#eee";
// 	// Other browsers will fall back to image/png
// 	img.src = canvas.toDataURL("image/webp");
// }

function handleSuccess(stream) {
	screenshotButton.disabled = false;
	video.srcObject = stream;
}

function handleError(error) {
	console.log(error);
}
