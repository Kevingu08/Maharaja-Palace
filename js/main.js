function init(){
    let slider = document.getElementById("slider-one");
    let sliderListOne =  document.getElementById("slider-list-one");
    let sliderWidth;
    let sliderListItem = sliderListOne.children;
    console.log(sliderListItem);
    for(let index = 0; index < sliderListItem.length; index++){
        sliderWidth += sliderListItem[index].style.width;
        console.log(sliderListItem[index].className)
    }
    console.log(sliderWidth);
    slider.style.width = sliderWidth + "%";
}

document.addEventListener("DOMContentLoaded", function(){

    init()
    
});