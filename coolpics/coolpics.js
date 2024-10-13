// Menu toggle functionality
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('hide');
});

// Handle screen resize to fix menu display issues
function handleResize() {
    if (window.innerWidth > 1000) {
        nav.classList.remove('hide');  // Show the nav if screen width is greater than 1000px
    } else {
        nav.classList.add('hide');  // Hide the nav on small screens
    }
}

window.addEventListener('resize', handleResize);
handleResize();  // Call function on page load

// Function to create modal HTML template
function viewerTemplate(src, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${src}" alt="${alt}">
        </div>
    `;
}

// Event handler for clicking on an image
function viewHandler(event) {
    const clickedImage = event.target;
    if (clickedImage.tagName === 'IMG') {
        // Get the full-size image by replacing '-sm' with '-full'
        const imgSrc = clickedImage.src.replace('-sm', '-full');
        const imgAlt = clickedImage.alt;

        // Insert the modal into the body
        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imgSrc, imgAlt));

        // Add event listener to close the modal
        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

// Function to close the modal
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();  // Remove the viewer from the DOM
    }
}

// Add click listener to the gallery
document.querySelector('.gallery').addEventListener('click', viewHandler);
