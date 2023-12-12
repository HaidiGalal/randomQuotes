
var quotes=["Be the change that you wish to see in the world","In three words I can sum up everything I've learned about life: it goes on","A friend is someone who knows all about you and still loves you","To avoid criticism, say nothing, do nothing, be nothing.","Spread love everywhere you go. Let no one ever come to you without leaving happier","Do one thing every day that scares you","Go confidently in the direction of your dreams! Live the life you've imagined","Many of life’s failures are people who did not realize how close they were to success when they gave up","Not how long, but how well you have lived is the main thing","Curiosity about life in all of its aspects, I think, is still the secret of great creative people","Turn your wounds into wisdom"];
var saidBy=["Mahatma Gandhi","Robert Frost","Elbert Hubbard","Elbert Hubbard","Mother Teresa","Eleanor Roosevelt","Henry David","Thomas A. Edison","Seneca"," Leo Burnett","Winfrey"];
function getRandomNumber(){
    var i=Math.floor(Math.random()*quotes.length);
  
    return i;

}
var randomnumber;
var oldI;
function check(){
    if(randomnumber==oldI){

        if(randomnumber==quotes.length-1){
           randomnumber=randomnumber-1;
            return randomnumber; 
        }
        else{
            // console.log("jffffff");
           randomnumber=randomnumber+1;
           return randomnumber;
        
    
        }
       }
       return randomnumber;
}

function getQuote(){
    randomnumber =getRandomNumber();
   randomnumber= check();
   console.log(randomnumber);

    document.getElementById("Quote").innerHTML="\" "+quotes[randomnumber]+"\"";
    document.getElementById("saidBy").innerHTML="- - "+saidBy[randomnumber];
    
   oldI=randomnumber;
   
}

