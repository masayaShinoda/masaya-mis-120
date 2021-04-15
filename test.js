const messages = [
    "Hello!",
    "សួស្តី!",
    "こんにちは!",
    "สวัสดี!",
]
var test = document.getElementById('test');
var testType = new Typewriter(test, {
    loop: true,
    delay: 150
});

testType
    .typeString(messages[0])
    .pauseFor(1500)
    .deleteAll()
    .typeString(messages[1])
    .pauseFor(1500)
    .deleteAll()
    .typeString(messages[2])
    .pauseFor(1500)
    .deleteAll()
    .typeString(messages[3])
    .start();

// const changeMessage = () => {
//     header.innerHTML = messages[i];
// }
// for(i=0;i<4;i++) {
//     setTimeout(changeMessage(), 1500)
//     console.log(messages[i]);
// }    