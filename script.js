
const display = document.getElementById("universeImage");

const paths = {
  "0": "Multi%20View%20Universe%20Exhibit.png",
  "1": "multi%20view%20universe/1.jpg",
  "2": "multi%20view%20universe/2.jpg",
  "3": "multi%20view%20universe/3.jpg",
  "4": "multi%20view%20universe/4.jpg",
  "5": "multi%20view%20universe/5.jpg",
  "6": "multi%20view%20universe/6.jpg"
};

const cache = {};
let current = 0;

// Preload all images
for (const [key, path] of Object.entries(paths)) {
  const img = new Image();
  img.src = path;
  cache[key] = img;
}

function showImage(number) {
  const img = cache[String(number)];

  if (img && img.complete && img.naturalWidth > 0) {
    display.src = img.src;
    current = Number(number);
  } else {
    console.warn("Image is not ready yet:", number);
  }
}

// Keyboard: direct selection
document.addEventListener("keydown", (event) => {
  if (event.repeat) return;

  if (event.key >= "0" && event.key <= "6") {
    showImage(event.key);
  }
});

// Optional Next button
const nextButton = document.getElementById("nextButton");

if (nextButton) {
  nextButton.addEventListener("click", () => {
    const next = current >= 6 ? 1 : current + 1;
    showImage(next);
  });
}