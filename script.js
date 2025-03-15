// When everything has loaded (images, etc.)
let hasLoaded = false;
setTimeout(() => {
	if (!hasLoaded) {
		document.getElementById(
			"load-cover"
		).innerHTML += `<br><button onclick="hideLoad()">Skip Loading?</button>`;
	}
}, 5000);

window.onload = hideLoad;

function hideLoad() {
	hasLoaded = true;
	const ring = document.getElementById("ring");
	ring.animate(
		[
			{ transform: "rotate(0deg)" }, // Keyframe to animate the rotation
		],
		{ duration: 250, easing: "ease" }
	);

	setTimeout(() => {
		const loadCover = document.getElementById("load-cover");
		loadCover.style.opacity = "0"; // Fade it out
		// Optionally, hide it completely after the fade-out
		document.querySelector("#hero .content .in").animate(
			{
				filter: "blur(0px)",
			},
			{ duration: 1000, easing: "ease", fill: "forwards" }
		);
		setTimeout(() => {
			loadCover.style.display = "none";
		}, 1000); // Match the fade-out time here
	}, 250);
}
