//index.html 
var indexPage = document.getElementById('introductionText');
var callToAction = document.getElementById('callToAction');
//lessons.html
var lessonsPage = document.getElementById('textContainer');

var typewriterIndex = new Typewriter(indexPage, {
    loop: false,
    delay: 50   
});
var typeWriterCallToAction = new Typewriter(callToAction, {
    loop: false,
    delay: 60
});
var typewriterLessons = new Typewriter(lessonsPage, {
    loop: false,
    delay: 75

});
typewriterIndex.typeString("Hey there!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("My name's Masaya and I'm from section 3 in MIS.")
    .start();

typeWriterCallToAction.pauseFor(5000).typeString("See MIS lessons ->").start();

typewriterLessons.typeString("Here's what was covered in MIS 120:")
    // .pauseFor(2500)
    // .deleteAll()
    // .typeString('Strings can be removed')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    .start();