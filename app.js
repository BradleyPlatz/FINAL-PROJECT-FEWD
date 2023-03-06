window.onload = function() {
  const aModal = document.getElementById("aModal");
  const aModalMask = document.getElementById("aModalMask");
  const tosModal = document.getElementById("tosModal");

  document.getElementById("aButton").addEventListener("click", function() {
    aModal.style.display = "block";
    aModalMask.style.display = "block";
  });

  document.getElementById("close").addEventListener("click", function() {
    aModal.style.display = "none";
    aModalMask.style.display = "none";
  });

  document.getElementById("TOS").addEventListener("click", function() {
    tosModal.style.display = "block";
    aModalMask.style.display = "block";
  });

  document.getElementById("closeTOS").addEventListener("click", function() {
    tosModal.style.display = "none";
    aModalMask.style.display = "none";
  });
};

const form = document.querySelector("#contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  // need to figure out how to send form here //
  form.reset();
});



