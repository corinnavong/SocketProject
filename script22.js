var images = [
{src:"Skeleton/images/DSC00759.JPG", caption: "<strong>Takoyaki</strong><br /><br />A popular, ball-shaped Japanese snack made out of flower and filled with octopus, tempura scraps, ginger, and scallion."},
{src:"Skeleton/images/DSC00763.JPG", caption: "<strong>Okonomiyaki</strong> <br /><br />A Japanese savory pancake containing a variety of ingredients, including flour, eggs, shredded cabbage, meat, and some condiments of your choice."},
{src:"Skeleton/images/DSC00896.JPG", caption: "<strong>Ramen</strong><br /><br />Slightly thin, curly noodles served in a soy-flavored chicken broth and with various toppings."},
{src:"Skeleton/images/DSC01194.JPG", caption: "<strong>Sushi</strong><br /><br />A mixture of vinegared rice, seaweed, and ingredients such as seafood, vegetables, meat, and sometimes, tropical fruits."},
{src:"Skeleton/images/DSC01203.JPG", caption: "<strong>Mochi</strong><br /><br />A rice cake in the shape of a ball that is pounded into paste. It can be filled with ingredients like red bean, matcha, strawberry, and more."}];

var imageIndex = 0;
var rightarrow = document.querySelector(".rightarrow");
var leftarrow = document.querySelector(".leftarrow");

function changeImage() {
  imageIndex ++;
  if (imageIndex > images.length - 1) imageIndex = 0;
  $('#slideshowImage').attr('src', images[imageIndex].src);
  $('.caption').html(images[imageIndex].caption);
};

function nextImage() {
  imageIndex ++;
  if (imageIndex > images.length - 1) imageIndex = 0;
  $('#slideshowImage').attr('src',images[imageIndex].src);
  $('.caption').html(images[imageIndex].caption);
};

function previousImage() {
    imageIndex --;
    if (imageIndex < 0) imageIndex = images.length-1;
    $('#slideshowImage').attr('src',images[imageIndex].src);
  	$('.caption').html(images[imageIndex].caption);
}

leftarrow.addEventListener("click", nextImage);
rightarrow.addEventListener("click", previousImage);

setInterval(changeImage, 6000);
