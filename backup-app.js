window.onload = function() {
    var button = document.getElementById("aButton");
    button.addEventListener("click", function() {
        aModal.style.display = "block";
        aModalMask.style.display = "block";
    });

    var button = document.getElementById("close");
    button.addEventListener("click", function() {
        aModal.style.display = "none";
        aModalMask.style.display = "none";
    });

    var button = document.getElementById("TOS");
    button.addEventListener("click", function() {
        tosModal.style.display = "block";
        aModalMask.style.display = "block";
    });

    var button = document.getElementById("closeTOS");
    button.addEventListener("click", function() {
        tosModal.style.display = "none";
        aModalMask.style.display = "none";
    });
    
  };
  

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // You can do something with the form data here, like sending it to a server or displaying it on the page.

  // Clear the form fields after submission
  form.reset();
});

const checkbox = document.getElementById('checkbox');
const myClassElement = document.querySelector('.rainbow');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    myClassElement.classList.remove('rainbow');
  } else {
    myClassElement.classList.add('rainbow');
  }
});

