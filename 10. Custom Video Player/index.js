document.addEventListener("contextmenu", (e) => e.preventDefault());

const player = document.querySelector("#player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress-filled");
const togglePlayButton = player.querySelector(".toggle-play-button");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll("[type=range");

const togglePlay = () => {
  const method = video.paused ? "play" : "pause";
  video[method]();
};

togglePlayButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

function updateButton() {
  const icon = this.paused ? "►" : "❚❚";
  togglePlayButton.textContent = icon;
}

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

function skip() {
  const skipTime = this.dataset.skip;
  video.currentTime += parseFloat(skipTime);
}

skipButtons.forEach((button) => button.addEventListener("click", skip));

function rangeUpdate() {
  video[this.name] = this.value;
}

ranges.forEach((range) => {
  range.addEventListener("change", rangeUpdate);
  range.addEventListener("input", rangeUpdate);
});

function changeProgress() {
  const percent = (this.currentTime / this.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

video.addEventListener("timeupdate", changeProgress);

function scrub(e) {
  const scrubTime = (e.offsetX / this.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

progress.addEventListener("click", scrub);
