let rng = document.querySelector('#range');
let p = document.querySelector('#text');
let block = document.querySelector('#block');

function textRange() {
    p.innerHTML = rng.value;
    block.style.width = rng.value +'px';
}

rng.addEventListener('input', textRange);
