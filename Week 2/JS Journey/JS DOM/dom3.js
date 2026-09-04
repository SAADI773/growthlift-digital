// DOM 3 - Creating and appending nodes
let itemCounter = 0;

function createDemo() {
    const list = document.getElementById('list');

    // build a full element from an HTML string
    const inner = document.createElement('li');
    inner.textContent = 'Created via createElement (item ' + (++itemCounter) + ')';
    list.appendChild(inner);

    // build via innerHTML (alternative)
    list.insertAdjacentHTML('beforeend',
        '<li>Created via innerHTML string</li>');

    // remove the first child if too many
    if (list.children.length > 6) {
        list.removeChild(list.firstElementChild);
    }

    console.log('current children:', list.children.length);
}