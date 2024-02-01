document.addEventListener("DOMContentLoaded", function () {
  const videopop = document.getElementById("videopop");
  const videoModal = document.getElementById("videoModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const videoFrame = document.getElementById("videoFrame");

  videopop.addEventListener("click", function () {
    videoModal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    videoModal.style.display = "none";
    // Pause the video when closing the modal
    videoFrame.src = videoFrame.src;
  });

  window.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoModal.style.display = "none";
      // Pause the video when closing the modal
      videoFrame.src = videoFrame.src;
    }
  });
});
