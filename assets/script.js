'use strict'

let likeButton = document.querySelectorAll('.like-button');
let upVote = document.querySelectorAll('.pj-up');
let downVote = document.querySelectorAll('.pj-down');
let postImages = document.querySelectorAll('.posts-image');
let imageModalBox = document.querySelector('#image-modal');
let imageContainer = document.querySelector('#modal-image-container');
let modalCloseButton = document.querySelector('#modal-close-button');

likeButton.forEach(function (e){
    e.addEventListener('click', function (){
        e.classList.toggle('liked');
    })
})

upVote.forEach(function (e,i){
    e.addEventListener('click', function (){
        if (downVote[i].classList.contains('down-vote')){
            downVote[i].classList.remove('down-vote');
        }
        e.classList.toggle('up-vote');
    })
})

downVote.forEach(function (e,i){
    e.addEventListener('click', function (){
        if (upVote[i].classList.contains('up-vote')){
            upVote[i].classList.remove('up-vote');
        }
        e.classList.toggle('down-vote');
    })
})

postImages.forEach(function (e,i){
    e.addEventListener('click', function (){
        imageModalBox.classList.add('show');
        if (i===0){
            imageContainer.src = './assets/images/first.jpg'
        } else if (i===1) {
            imageContainer.src = './assets/images/second.jpg'
        } else imageContainer.src = './assets/images/third.jpg'
    })
})

modalCloseButton.addEventListener('click', function (){
    imageModalBox.classList.remove('show');
})

window.addEventListener('click', function (e){
  if (e.target===imageModalBox) imageModalBox.classList.remove('show');
})