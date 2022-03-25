let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
	key.addEventListener("click", playSound);
});

function playSound(key) {
	const audio = document.querySelector(
		`audio[data-key="${key.target.dataset.key}"]`
	);

	audio.currentTime = 0;
	audio.play();
}

document.addEventListener("keydown", (e) => {
	let key = e.key;
	const audio = document.querySelector(`audio[data-key="${key}"]`);
	if (audio == null) {
		return;
	} else {
		var keyclass = document.querySelector(`.key[data-key="${key}"]`).classList;
		audio.currentTime = 0;
		audio.play();

		if (keyclass.contains("white")) {
			keyclass.add("white-active");
			document.addEventListener("keyup", () => {
				keyclass.remove("white-active");
			});
		} else {
			keyclass.add("black-active");
			document.addEventListener("keyup", () => {
				keyclass.remove("black-active");
			});
		}
	}
});
