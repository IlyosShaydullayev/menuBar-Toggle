const btn = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const pricing = document.querySelector('.pricing');
const product = document.querySelector('.product');

btn.addEventListener('click', () => {
    // btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    btn.classList.toggle('bar')
    contact.classList.toggle('toggle');
    pricing.classList.toggle('toggle');
    product.classList.toggle('toggle');

    // btn.children.style.display='none'
    // contact.style.display='block';
    // pricing.style.display='block';
    // product.style.display='block';
})