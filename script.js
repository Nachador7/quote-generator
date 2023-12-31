// Define API URL
const API_URL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

// Get DOM elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show loading spinner
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading spinner
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
const newQuote = () => {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace it with "Unknown"
    authorText.textContent = quote.author || "Unknown";
    // Check quote length to determine styling
    quoteText.classList.toggle('long-quote', quote.text.length > 120);
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    complete();
}

// Fetch quotes from API
async function getQuotes() {
    loading();
    try {
        const response = await fetch(API_URL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.error('Failed to fetch quotes: ', error);
    }
}

// Tweet quote
function tweetQuote() {
    const tweetText = encodeURIComponent(`${quoteText.textContent} - ${authorText.textContent}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, '_blank');
}

// Add event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Fetch quotes on load
getQuotes();