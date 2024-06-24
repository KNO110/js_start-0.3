const images = [
    'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png',
    'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.png',
    'https://avatanplus.com/files/resources/original/5b501847c6deb164b0ded887.png'
];
let currentIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    galleryImage.src = images[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

prevBtn.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
};

nextBtn.onclick = function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
};

updateImage();
