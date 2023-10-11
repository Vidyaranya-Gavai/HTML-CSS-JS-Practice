const copyQuote = () => {
    let quoteText = document.getElementById("quote-text").innerHTML;
    navigator.clipboard.writeText(quoteText);
};

const generateQuote = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let randomNum = Math.floor(Math.random()*16 +1);
        let randomQuote = data[randomNum];
        let words = randomQuote.author.split(" ");
        words.pop();
        let result = words.join(" ");
        let words1 = result.split("");
        words1.pop();
        let result1 = words1.join("");
        document.getElementById("quote-text").innerHTML = `${randomQuote.text ? randomQuote.text:""}`;
        document.getElementById("author").innerHTML = `-${result1? result1:""}`;
    })
}