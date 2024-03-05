
//******* Hamburger Menu ********//
document.getElementById("hamburger-menu").addEventListener("click", ({ target }) => {target.classList.toggle("open");});
//_______________________________//


// //? Selectors

const storeListItem = document.querySelector('.list-store');
const contentDiv = document.querySelector('.content');

const body = document.querySelector('body');


function showContent() {
  contentDiv.style.display = 'flex';
  body.style.backdropFilter = 'blur(5px)'; 
}


function hideContent() {
  // contentDiv.style.display = 'none';
  body.style.backdropFilter = 'none'; // Bulanıklığı kaldırmak için
}

// Add mouseover event listener
storeListItem.addEventListener('mouseover', showContent);

// Add mouseout event listener
storeListItem.addEventListener('mouseout', hideContent);

