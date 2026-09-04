// DOM 1 - Selecting elements
function selectDemo() {
    const out = document.getElementById('select-out');

    // by ID
    const byId = document.getElementById('select-id');
    // by class -> first match
    const byClass = document.querySelector('.group-class');
    // by class -> all matches (returns array-like list)
    const allByClass = document.querySelectorAll('.group-class');
    // by tag
    const byTag = document.querySelector('h2');
    // by CSS selector
    const byFull = document.querySelector('#select-id.highlight');

    out.innerHTML = `
        getElementById text        : <b>${byId.textContent}</b><br>
        querySelector .group-class : <b>${byClass.textContent}</b><br>
        querySelectorAll count     : <b>${allByClass.length}</b><br>
        querySelector h2 text      : <b>${byTag.textContent}</b><br>
        complex selector found     : <b>${byFull ? 'yes' : 'no'}</b>
    `;
}