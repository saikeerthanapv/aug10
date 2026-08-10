const countElement = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');
let count = 0;
incrementButton.addEventListener('click', () => {
count++;
countElement.textContent = count;
document.title = 'Count: ${count}'; // Update page title dynamically
});
// Form Handling
const textInput = document.getElementById('textInput');
const outputText = document.getElementById('outputText');
textInput.addEventListener('input', () => {
outputText.textContent = textInput.value;
});
// Toggle Image
const dynamicImage = document.getElementById('dynamicImage');
const toggleImageButton = document.getElementById('toggleImageButton');
const placeholder1 = "https://via.placeholder.com/150";
const placeholder2 = "https://via.placeholder.com/300";
toggleImageButton.addEventListener('click', () => {
dynamicImage.src = dynamicImage.src === placeholder1 ? placeholder2 :
placeholder1;
});
// Scroll to Section
const scrollButton = document.getElementById('scrollButton');
const animatedSection = document.getElementById('animatedSection');
scrollButton.addEventListener('click', () => {
animatedSection.scrollIntoView({ behavior: 'smooth' });
});
// Element Visibility Detection
const visibilityBox = document.getElementById('visibilityBox');
const observer = new IntersectionObserver(
([entry]) => {
visibilityBox.textContent = entry.isIntersecting ? "Visible" : "Not Visible";
visibilityBox.style.background = entry.isIntersecting ? "green" :
"red";
},
{ threshold: 0.1 }
);
observer.observe(visibilityBox);
