// DOM 2 - Changing content and style
function changeDemo() {
    const el = document.getElementById('change-text');

    // change text
    el.textContent = 'Text changed by JS!';

    // change inline style directly
    el.style.color = '#e74c3c';
    el.style.fontWeight = 'bold';
    el.style.fontSize = '1.4rem';

    // toggle a class
    el.classList.add('highlight');

    // read and log current classes
    console.log('classes:', el.classList);
    console.log('text:', el.textContent);
}