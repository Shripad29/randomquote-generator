const btnEl = document.getElementById('btn')
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author_name')

const apiURL = 'https://api.quotable.io/random'







async function getQuote(){

    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = 'Updating...'
        authorEl.innerText = 'Updating...'
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Generate Quote";
        btnEl.disabled = false;
        console.log(data);
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happeded, try again later"
        authorEl.innerText = "An error happeded"
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
    }


 
}


getQuote()

btnEl.addEventListener('click', getQuote)