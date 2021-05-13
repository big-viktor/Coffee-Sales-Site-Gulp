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
console.log(next)

let previous = document.getElementById('btn_previous');
console.log(previous)

let slider = document.querySelector('.slider_display');

const sliderBox = [];
console.log(sliderBox)

const sliderDisplay = () => {
    for (let i = 0; i < slider.children.length; i++) {
        sliders = slider.children[i];
        sliderBox.push(sliders);
        // sliderbox.classList.add('delet_div');
    }
    
}
sliderDisplay();

next.addEventListener("click", function (e) {
    for (let i = 4; i > sliderBox.length; ++i) {
        let sliderBoxI = sliderBox[i]; 
         sliderBoxI.classList.add('delet_div');
         console.log(sliderBoxI);
     }
});
console.log(sliderBox)