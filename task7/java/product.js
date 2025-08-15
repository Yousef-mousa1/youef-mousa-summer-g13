function changeImg(en){
    let img = document.getElementById('card-img')
   img.src = en.src
}
let container = document.querySelector('.zoom-container');
let image = document.querySelector('.zoom-image');

container.addEventListener('mousemove', (e) => {
  let { left, top, width, height } = container.getBoundingClientRect();
  
  let x = (e.clientX - left) / width;
  let y = (e.clientY - top) / height;
  image.style.transform = `scale(2) translate(${(0.5 - x) * 50}px, ${(0.5 - y) * 50}px)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = 'scale(1) translate(0, 0)';
});
