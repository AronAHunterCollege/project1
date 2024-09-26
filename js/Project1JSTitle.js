// JavaScript Document
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 3});
  gsap.fromTo(".start", { opacity: 0 }, { opacity: 1, duration: 3, delay: 2});
  gsap.fromTo(".info", { opacity: 0 }, { opacity: 1, duration: 3, delay: 3});
 });
