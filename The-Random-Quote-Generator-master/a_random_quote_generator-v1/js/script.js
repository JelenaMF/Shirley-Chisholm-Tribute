/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// declared varibles 
let randomQuote;
let randQuoteGen;
let quoteIndex;
let message;
let prntquote;  
let quoteSource;
let HTML;

// and array of quotes and their authors 
let quotes = [
  {Quote: 'You educate a man; you educate a man. You educate a woman; you educate a generation.', 
    Source: 'Brigham Young'},
  {Quote:'A woman without a man is like a fish without a bicycle.', 
    Source: 'Irena Dunn', Year: 'January 1975'},
  {Quote: 'I know enough to know that no woman should ever marry a man who hated his mother.',
    Source:'Martha Gellhorn', Citation:'Selected Letters'},
  {Quote:'The thing women have yet to learn is nobody gives you power. You just take it.',  
    Source: 'Roseanne Barr'},
  {Quote: 'A feminist is anyone who recognizes the equality and full humanity of women and men.', 
    Source: 'Gloria Steinem'}
];


/***
 * `getRandomQuote` function
***/
// function that randomly chooses a quote to display

function getRandomQuote () {
  quoteIndex = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[quoteIndex];
    return randomQuote;
}
randQuoteGen = getRandomQuote(quotes);

/***
 * `printQuote` function
***/
function printQuote () { 
  getRandomQuote();
  HTML = '';
  HTML += '<p class="quote">' + randomQuote.Quote;
  HTML += '<p class="source">' + randomQuote.Source;
  
  if (randomQuote.Citation) {
    HTML += '<span>, </span>' + randomQuote.Citation + '</p>';
  }
  if (randomQuote.Year) {
    HTML += '<span>, </span>' + randomQuote.Year + '</p>';
 }
  document.getElementById('quote-box').innerHTML = HTML;
'</p>'
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 
