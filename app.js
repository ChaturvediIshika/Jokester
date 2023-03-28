const joke=require('give-me-a-joke');

// joke.getRandomCNJoke(function(joke){
//     console.log(joke);
// });

const color=require('colors');
// console.log("Hello".rainbow);

const figlet=require('figlet');
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.bgBrightRed)
});