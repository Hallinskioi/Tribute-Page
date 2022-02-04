function Change(){
    const makes = ["He made the World Wide Web", "He made the Web Browser", "He made the HTML Language", "He made the Hypertext Transfer Protocol"]

    let item = makes[Math.floor(Math.random()*makes.length)];
    document.getElementById("made").innerHTML = item;
}

let imageIndex = 0;

function imageChangeOnClick() {
    let clickable = document.getElementById("imagebox");
    let imageboi = ["img/tim-1.jpg", "img/tim-2.jpg", "img/tim-3.webp"];
    clickable.src = imageboi[imageIndex];
    imageIndex++;
    if (imageIndex >= imageboi.length) {
        imageIndex = 0;
    }

}