import Player from "@vimeo/player";
const player = new Player("vimeo-player");
const throttle = require("lodash.throttle");

player.on("timeupdate", throttle(onSaveTimePlay, 1000));

function onSaveTimePlay(data) {
  const currentTimePlay = data.seconds;
  console.log(currentTimePlay);
  localStorage.setItem("videoplayer-current-time", currentTimePlay);
}
const saveCurrentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(saveCurrentTime);
