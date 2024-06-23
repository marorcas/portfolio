document.querySelector('.content_gallery_btn--p1').addEventListener('click', function() {
    console.log("Hi");
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.content_gallery_btn--p2').addEventListener('click', function() {
    console.log("Hi");
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.content_gallery_btn--p3').addEventListener('click', function() {
    console.log("Hi");
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.content_gallery_btn--p4').addEventListener('click', function() {
    console.log("Hi");
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.popup_close').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});