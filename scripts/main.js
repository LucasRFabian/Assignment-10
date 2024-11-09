const image1 = document.querySelector('#bbw');
const image2 = document.querySelector('#vbw');

image1.onmousedown = () => {
    image1.style.width = '60%';
};
image1.onmouseup = () => {
    image1.style.width = 'auto';
};
image2.onmouseenter = (e) => {
    image2.style.transform = "rotate(90deg)";
};
image2.onmouseleave = (e) => {
    image2.style.transform = "rotate(0deg)";
};