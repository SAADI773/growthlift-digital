// DOM 4 - Events
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('event-btn');
    const input = document.getElementById('input-box');
    const out = document.getElementById('event-out');

    // click event
    btn.addEventListener('click', () => {
        out.textContent = 'Button was clicked at ' + new Date().toLocaleTimeString();
    });

    // mouseover / mouseout
    btn.addEventListener('mouseover', () => {
        btn.textContent = 'I am hovered';
    });
    btn.addEventListener('mouseout', () => {
        btn.textContent = 'Hover / Click me';
    });

    // input event
    input.addEventListener('input', () => {
        out.textContent = 'You typed: "' + input.value + '"';
    });
});