
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 2 / 20;

const rotationFactor = 80 / 4;   
function moveBackground(event) {
  const shapes =  document.querySelectorAll(".shape");
  let x = event.clientX * scaleFactor;
  let y = event.clientY * scaleFactor;
  let rotation = (x + y) * rotationFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${rotation * boolInt}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else { 
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"

  emailjs
  .sendForm(
    'service_hbfb1kt',
    'template_ss5car7',
    event.target,
    'ARQeN_qB_kpnlq4-_'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
  success.classList += " modal__overlay--visible";
  }) .catch(() => {
    loading.classList.remove("modal__overlay--visible")
    alert(
      "The email Service is temporarily down, please reach out to me at kemi12dandt@gmail.com"
    );
  })
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}



