import { generateName } from './nameLibrary.js';

// Burger menu functionality
window.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger-menu');
  const navLinks = document.querySelector('.navbar ul');
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});
