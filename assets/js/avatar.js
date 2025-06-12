// Avatar functionality
function setAvatarBasedOnPage() {
  const avatars = [
    'assets/images/avatar/monas-blue.svg',
    'assets/images/avatar/monas-darkblue.svg',
    'assets/images/avatar/monas-green.svg',
    'assets/images/avatar/monas-magenta.svg',
    'assets/images/avatar/monas-red.svg',
    'assets/images/avatar/monas-yellow.svg',
    'assets/images/avatar/kotatua-blue.svg',
    'assets/images/avatar/kotatua-darkblue.svg',
    'assets/images/avatar/kotatua-green.svg',
    'assets/images/avatar/kotatua-magenta.svg',
    'assets/images/avatar/kotatua-red.svg',
    'assets/images/avatar/kotatua-yellow.svg'
  ];

  const currentPage = window.location.pathname.split('/').pop();
  const reloadCount = sessionStorage.getItem('reloadCount') || 0;

  if (currentPage === 'home.html') {
    if (reloadCount >= 1 || !localStorage.getItem('userAvatar')) {
      const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
      localStorage.setItem('userAvatar', randomAvatar);
    }
    sessionStorage.setItem('reloadCount', parseInt(reloadCount) + 1);
  }

  const avatarElement = document.getElementById('user-avatar');
  if (avatarElement) avatarElement.src = localStorage.getItem('userAvatar');
}

// Ensure the function is called on page load
window.addEventListener('DOMContentLoaded', setAvatarBasedOnPage);
