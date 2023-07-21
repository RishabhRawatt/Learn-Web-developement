const left=document.querySelector('.left');
const right=document.querySelector('.right');
const container=document.querySelector('.container');


left.addEventListener('mouseenter',()=>container.classList.add('hover-left'));
left.addEventListener('click',()=>container.classList.add('click-left'));
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left'));

right.addEventListener('mouseenter',()=>container.classList.add('hover-right'));
right.addEventListener('click',()=>container.classList.add('click-right'));
right.addEventListener('mouseleave',()=>container.classList.remove('hover-right'));
