// DOM 5 - Traversing the DOM tree
function traverseDemo() {
    const parent = document.getElementById('parent');
    const out = document.getElementById('traverse-out');

    // children (direct)
    const children = parent.children; // HTMLCollection
    // first and last child
    const first = parent.firstElementChild;
    const last = parent.lastElementChild;
    // sibling navigation
    const second = first.nextElementSibling;
    const prevOfLast = last.previousElementSibling;
    // parent and grandparent
    const parentNode = first.parentElement;
    const grandParent = parentNode.parentElement;

    out.innerHTML = `
        children count        : <b>${children.length}</b><br>
        first child text      : <b>${first.textContent}</b><br>
        last child text       : <b>${last.textContent}</b><br>
        second (next sibling) : <b>${second.textContent}</b><br>
        before last (prev)    : <b>${prevOfLast.textContent}</b><br>
        parent tag            : <b>${parentNode.tagName}</b><br>
        grandparent tag       : <b>${grandParent.tagName}</b>
    `;
}