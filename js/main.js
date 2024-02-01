console.log('JavaScript is running!');

const vectorGraphic = document.querySelector('#badge');

function logThisId() {
    console.log(this);
    console.log('clicked on this element:', this.id);
}

vectorGraphic.addEventListener('click', logThisId);
