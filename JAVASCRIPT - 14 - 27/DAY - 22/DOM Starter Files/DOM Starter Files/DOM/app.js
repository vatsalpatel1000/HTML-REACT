let smallimages = document.getElementsByClassName("oldImg");

for(let i = 0 ; i<smallimages.length ; i++){
    smallimages[i].src = "/Assets/Spider-Man.png";
    console.log(`value of image no, ${i} is changed`);
}
