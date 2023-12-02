let stars = document.getElementsByClassName('star');

//set stars locations in sky 
for(let i=0; i<stars.length; i++){
  stars[i].style.setProperty('--starY', `${randomIntFromInterval(20,100)}%`)
  stars[i].style.setProperty('--starX', `${randomIntFromInterval(1, 100)}%`)
}

for(let i=0; i<stars.length; i++){
  
  //give stars different sizes
  if(i % 3 === 0) {
    stars[i].style.setProperty('--starSize', '6px')
  } else if(i % 2 === 0){
     stars[i].style.setProperty('--starSize', '4px')
  } else {
    stars[i].style.setProperty('--starSize', '2px')
  }
  
  //give stars three different colors
    if(i % 10 === 0 && i % 20){
    console.log(stars.length, randomIntFromInterval(0, stars.length))
    stars[i].style.setProperty('--starColor', '#f8b3a3')
  } else if (i% 10 ===0) {
     stars[i].style.setProperty('--starColor', '#b677ac')
  } else if (i% 5 ===0) {
    stars[i].style.setProperty('--starColor', '#d5b7c9')
  }
  
  //make some stars twinkle
  if(i% 4 === 0) {
    stars[i].classList.add('twinkle')
  }
  if(i% 5 === 0) {
    stars[i].classList.add('twinkle-other')
  }
  
}

//random number generator
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
