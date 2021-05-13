const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content')


if(menuContent){
    const menuBody = document.querySelector('menu_body');
    burger.addEventListener("click", function (e) {
    menuContent.classList.add("_active");
    menuBody.classList.add("_active");

});
}
// delet_div
let next = document.getElementById('btn-next');
let previous = document.getElementById('btn_previous');
let slider = document.querySelector('.slider_display');
let index = -1;
  
const sliderBox = [];

const sliderDisplay = () => {
    for (let i = 0; i < slider.children.length; i++) {
      let sliders = slider.children[i];
        sliderBox.push(sliders);
    }
}
sliderDisplay();

const nextSlide = () => {
    
    index ++;
    console.log(index)
    sliderBox[index].classList.add('delet_div');
    previous.classList.remove('delet_div');
    next.classList.remove('active');
    console.log(sliderBox[index])

    if(index === (sliderBox.length - 1)){
        next.classList.add('delet_div');
    }
};

const backSlide = () => {
    next.classList.remove('delet_div');
    index --;
    console.log(index)
    sliderBox[index].classList.remove('delet_div');
    console.log(sliderBox[index])

    if(index === 0){
        next.classList.add('active');
        previous.classList.add('delet_div');
    }
};

next.addEventListener('click',nextSlide);
previous.addEventListener(('click'),backSlide);