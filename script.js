/** @format */
// ? tab buttons
const homeBtn = document.getElementById("homeBtn");
const exploreBtn = document.getElementById("exploreBtn");
const profileBtn = document.getElementById("profileBtn");

// ? pages or screen
const home = document.getElementById("home");
const explore = document.getElementById("explore");
const profile = document.getElementById("profile");

// ? tab functions
// when we click on the home icon we hide the explore and profile screen , by doing this , only the home screen will be visible to the user
homeBtn.onclick = () => {
  home.classList.remove("hide");
  explore.classList.remove("show");
  profile.classList.remove("show");

  // adding active styles
  homeBtn.classList.add("active");
  exploreBtn.classList.remove("active");
  profileBtn.classList.remove("active");
};

// when we click on the explore icon we hide the home and profile screen , by doing this , only the explore screen will be visible to the user
exploreBtn.onclick = () => {
  home.classList.add("hide");
  profile.classList.remove("show");
  explore.classList.add("show");

  // adding active classes
  homeBtn.classList.remove("active");
  exploreBtn.classList.add("active");
  profileBtn.classList.remove("active");
};

// when we click on the profile icon we hide the home and explore screen , by doing this , only the explore screen will be visible to the user
profileBtn.onclick = () => {
  home.classList.add("hide");
  explore.classList.remove("show");
  profile.classList.add("show");

  // adding active classes
  homeBtn.classList.remove("active");
  exploreBtn.classList.remove("active");
  profileBtn.classList.add("active");
};
