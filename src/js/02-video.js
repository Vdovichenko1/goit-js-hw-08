import Player from '@vimeo/player';

const REFUGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
