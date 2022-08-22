import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const REFUGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

pageRecovery();

function onPlay(data) {
  localStorage.setItem(REFUGE_KEY, data.seconds);
}

function pageRecovery() {
  const timePlayer = localStorage.getItem(REFUGE_KEY);

  if (timePlayer) {
    player.setCurrentTime(timePlayer);
  }
}
