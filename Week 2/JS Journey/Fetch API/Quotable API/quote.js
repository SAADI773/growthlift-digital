// Quotable API demo
const QUOTABLE_URL = 'https://quotable.io/quotes/random';

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const savedList = document.getElementById('saved-list');

let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes') || '[]');

// Fallback quotes in case the network is unavailable
const fallbacks = [
    { content: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
    { content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
    { content: 'The best way to predict the future is to create it.', author: 'Peter Drucker' }
];

async function fetchQuote() {
    quoteText.textContent = 'Loading...';
    try {
        const response = await fetch(QUOTABLE_URL);
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.json();

        // Quotable returns { quotes: [...] } or a single object
        const q = Array.isArray(data) ? data[0] : (data.quotes ? data.quotes[0] : data);

        quoteText.textContent = '\u201C' + q.content + '\u201D';
        quoteAuthor.textContent = '\u2014 ' + (q.author || 'Unknown');
    } catch (error) {
        console.warn = console.warn || console.log;
        console.warn('Fetch failed, using fallback:', error);
        const fallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
        quoteText.textContent = '\u201C' + fallback.content + '\u201D';
        quoteAuthor.textContent = '\u2014 ' + fallback.author;
    }
}

function saveQuote() {
    const content = quoteText.textContent.replace(/[\u201C\u201D]/g, '');
    const author = quoteAuthor.textContent.replace(/^[\u2014\s]+/, '');

    if (!savedQuotes.some(q => q.content === content)) {
        savedQuotes.push({ content, author });
        localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
    }
    renderSaved();
}

function toggleSaved() {
    const isHidden = savedList.classList.contains('hidden');
    savedList.classList.toggle('hidden');
    document.getElementById('show-saved').textContent = isHidden
        ? 'Hide Saved Quotes' : 'Show Saved Quotes';
    renderSaved();
}

function renderSaved() {
    savedList.innerHTML = '';
    savedQuotes.forEach(q => {
        const li = document.createElement('li');
        li.textContent = '\u201C' + q.content + '\u201D \u2014 ' + q.author;
        savedList.appendChild(li);
    });
}

// hook up buttons
document.getElementById('new-quote').addEventListener('click', fetchQuote);
document.getElementById('save-quote').addEventListener('click', saveQuote);
document.getElementById('show-saved').addEventListener('click', toggleSaved);

// initial load
fetchQuote();