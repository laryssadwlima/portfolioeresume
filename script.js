const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


const modal = document.getElementById('modal');
const closeButton = document.getElementById('close');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalIconContainer = document.getElementById('modal-icon-container');
const overlay = document.getElementById('overlay');

function toggleModal(card) {
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    const image = card.querySelector('.project-image').src;

 
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalImage.src = image;

  
    modalIconContainer.innerHTML = '';

    const iconLinks = card.querySelectorAll('.icon-link-container a');

    if (iconLinks.length > 0) {
        iconLinks.forEach(link => {
            const newIconLink = document.createElement('a');
            newIconLink.href = link.href;
            newIconLink.target = '_blank';

            const newIconImage = document.createElement('img');
            newIconImage.src = link.querySelector('img').src;
            newIconImage.alt = link.querySelector('img').alt;
            newIconImage.classList.add('icon-image');

            newIconLink.appendChild(newIconImage);
            modalIconContainer.appendChild(newIconLink);
        });

        modalIconContainer.style.display = 'flex';
    } else {
        modalIconContainer.style.display = 'none';
    }



    modal.style.top = `${window.scrollY + window.innerHeight / 2}px`;
    

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal || event.target === overlay) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
});

window.onscroll = function() {
    const fixedMenu = document.getElementById('fixedMenu');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        fixedMenu.style.display = "flex"; // Exibe o menu fixo
    } else {
        fixedMenu.style.display = "none"; // Oculta o menu fixo
    }
};
