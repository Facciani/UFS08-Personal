const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
]

/* Looping through images */

images.forEach((image) => {
  const newImage = document.createElement('img')
  newImage.setAttribute('src', `images/${image}`)
  newImage.setAttribute('alt', `image of nature`)
  thumbBar.appendChild(newImage)
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
  });
})


btn.addEventListener('click', () => {
  if(btn.getAttribute('class') === 'dark'){
    btn.setAttribute('class','light');
    btn.textContent = 'Lithen';
    displayedImage.style.filter = 'brightness(50%)';
  }else{
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    displayedImage.style.filter = 'brightness(100%)';
  }
})

/* Wiring up the Darken/Lighten button */
