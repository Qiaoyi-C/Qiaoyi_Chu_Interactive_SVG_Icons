console.log('JavaScript is running!');

function logThisId() {
    console.log(this);
    console.log('This is a', this.id);
}

const dribbleGraphic = document.querySelector('#dribble');
console.log(dribbleGraphic)
dribbleGraphic.addEventListener('click', logThisId);

const githubGraphic = document.querySelector('#github');
console.log(dribbleGraphic)
githubGraphic.addEventListener('click', logThisId);

const paypalGraphic = document.querySelector('#paypal');
console.log(dribbleGraphic)
paypalGraphic.addEventListener('click', logThisId);

const skypeGraphic = document.querySelector('#skype');
console.log(dribbleGraphic)
skypeGraphic.addEventListener('click', logThisId);

const twiterGraphic = document.querySelector('#twiter');
console.log(dribbleGraphic)
twiterGraphic.addEventListener('click', logThisId);

const youtubeGraphic = document.querySelector('#youtube');
console.log(dribbleGraphic)
youtubeGraphic.addEventListener('click', logThisId);
