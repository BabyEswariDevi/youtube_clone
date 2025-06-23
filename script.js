function playVideo(src) {
  const player = document.getElementById('player');
  const mainVideo = document.getElementById('mainVideo');
  mainVideo.src = src;
  player.classList.remove('hidden');
}

function closePlayer() {
  const player = document.getElementById('player');
  const mainVideo = document.getElementById('mainVideo');
  mainVideo.pause();
  mainVideo.src = '';
  player.classList.add('hidden');
}
