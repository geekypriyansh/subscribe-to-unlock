// Subscribe to unlock code
let subscribeClicked = false;
let likeClicked = false;
// When subscribe button is clicked
document.getElementById("subscribeBtn").onclick = function () {
  subscribeClicked = true;
  unlockLikebtn();
};
// When like button is clicked
document.getElementById("likeBtn").onclick = function () {
  likeClicked = true;
  unlockDbtn();
};

// Unlock the like buiton
function unlockLikebtn() {
  document.getElementById("likeBtn").disabled = false;
  // Add enabled classes
  let element = document.getElementById("likeBtn");
  element.classList.add("btn-hover");
  element.classList.add("color");
}

// Unlocking the download button
function unlockDbtn() {
  if (likeClicked && subscribeBtn) {
    document.getElementById("downloadBtn").disabled = false;
    // Edit CSS Classes
    let element = document.getElementById("downloadBtn");
    element.classList.remove("disableclick");
    element.classList.add("btn-hover");
    element.classList.add("color-final");
  }
}

// Download button
$("#downloadBtn").click(function () {
  // Configuring Timer
  let counter = 6;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      document.getElementById("downloadBtn").disabled = true;
      // Show countdown to user
      span = document.getElementById("downloadBtn");
      span.innerHTML = "Download will begin in " + counter;
    }
    if (counter === 0) {
      // Redirect user to download
      span.innerHTML = "Download started";
      window.location.replace("sample_download.txt");
      clearInterval(counter);
    }
  }, 1000);
});

// Print year
window.addEventListener("load", function () {
  document
    .getElementById("copyright-year")
    .appendChild(document.createTextNode(new Date().getFullYear()));
});