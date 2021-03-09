const captureVideoButton = document.querySelector(".capture-button");
const cssFiltersButton = document.querySelector("#cssfilters-apply");
const video = document.querySelector("video");

let filterIndex = 0;
const filters = [
	"grayscale",
	"sepia",
	"blur",
	"brightness",
	"contrast",
	"hue-rotate",
	"hue-rotate2",
	"hue-rotate3",
	"saturate",
	"invert",
	"",
];

const constraints = {
	video: true,
};

captureVideoButton.onclick = function () {
	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(handleSuccess)
		.catch(handleError);
};

cssFiltersButton.onclick = function () {
	video.style.filter = filters[filterIndex++ % filters.length] + "(1)";
	console.log(filterIndex);
};

function handleSuccess(stream) {
	video.srcObject = stream;
}

function handleError(error) {
	console.log(error);
}
