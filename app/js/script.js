const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content')


if(menuContent){
    const menuBody = document.querySelector('menu_body');
    burger.addEventListener("click", function (e) {
    menuContent.classList.add("_active");
    menuBody.classList.add("_active");

});
}



let next = document.getElementById('btn-next');
let previous = document.getElementById('btn-previous');
let slider = document.querySelector('.slider_display');



const sliderBox = [];

 for (let i = 0; i < slider.children.length; i++) {
      let sliders = slider.children[i];
        sliderBox.push(sliders);
    }

console.log(sliderBox)

let index = 0;
console.log(index)


 let arr = sliderBox[index];
console.log(arr)

nextSlide = () => {
    if(index === (sliderBox.length -2)){
        next.classList.add('delet_div');
    }
    else if(index === -1 ){
        alert('-12')
        index = 0;
        index++;
    }
    arr = sliderBox[index];
    arr.classList.add('delet_div');

    index++;
    
    console.log(index)
    console.log(arr)
    next.classList.remove('active');
    previous.classList.remove('delet_div');
    
   

};

 backSlide = () => {
    
    arr = sliderBox[index];
    arr.classList.remove('delet_div');
    console.log(arr)
    index--;
    console.log(index)

    next.classList.remove('delet_div');
    if(index === -1){
        console.log(index)
        alert('stop!!')
        index = -1;
        next.classList.add('active');
        previous.classList.add('delet_div');

        }else if(index === 0 ){
            alert('stop')
            index = -1;
            index++;
        }
};

next.addEventListener('click', nextSlide);
previous.addEventListener(('click'), backSlide);

// 
    // index--;
    // console.log(index)
    // console.log(sliderBox[index])
    // console.log(sliderBox)
    //


 // index++
    // console.log(index)

    // sliderBox[index].classList.add('delet_div');

    
    
    // console.log(sliderBox[index])
    
    

// const sliderDisplay = () => {
   
//     sliderDisplay();
// }
