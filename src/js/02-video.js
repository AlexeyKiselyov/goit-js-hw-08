import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// ----------Pre-existing player--------
const frame = document.querySelector('iframe');
const player = new Player(frame);
// -------------------------------------
const CURRENT_TIME = 'videoplayer-current-time';
const getsCurrentTime = localStorage.getItem(CURRENT_TIME);

player.on(
  'timeupdate',
  throttle(function (data) {
    const time = data.seconds;
    localStorage.setItem(CURRENT_TIME, time);
  }, 1000)
);

player
  .setCurrentTime(getsCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'Error: the time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        console.log('Error: some other error occurred');
        break;
    }
  });
