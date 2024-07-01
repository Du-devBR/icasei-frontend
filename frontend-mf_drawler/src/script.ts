import { baseUrl } from "./util/config";

function handleMicrofrontend(event: Event, microFrontend: string) {
  event.preventDefault();
  const getIdMicrofrontend = document.getElementById('microFrontend');
  if (getIdMicrofrontend) {
    getIdMicrofrontend.innerHTML = '';

    let iframeSrc = '';
    if (microFrontend === 'videos') {
      iframeSrc = `${baseUrl}/videos`;
    } else if (microFrontend === 'favorites') {
      iframeSrc = `${baseUrl}/favoritos`;
    }

    const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.width = '100%';

      getIdMicrofrontend.appendChild(iframe);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const getIdButtonVideo = document.getElementById('mf_videos');
  const getIdButtonFavorite = document.getElementById('mf_favorites');

  if (getIdButtonVideo) {
    getIdButtonVideo.addEventListener('click', (event) => handleMicrofrontend(event, 'videos'));
  }

  if (getIdButtonFavorite) {
    getIdButtonFavorite.addEventListener('click', (event) => handleMicrofrontend(event, 'favorites'));
  }
});
