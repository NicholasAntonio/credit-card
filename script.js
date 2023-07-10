document.querySelector('#number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('#number-input').value;
}

document.querySelector('#number-input').addEventListener('input', () => {
   
    const limit = parseInt(document.querySelector('#number-input').getAttribute("maxlength"));
    if (document.querySelector('#number-input').value.length > limit) {
      document.querySelector('#number-input').value = document.querySelector('#number-input').value.slice(0, limit);
    }
  });
  
document.querySelector('#name-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('#name-input').value;
}
document.querySelector('#expiration-input').oninput = () => {
    document.querySelector('.exp-date').innerText = document.querySelector('#expiration-input').value;
}
document.querySelector('#cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('#cvv-input').onmouseleave = () => {
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('#cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('#cvv-input').value;
}

