let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click",() =>{
    speech.text = document.querySelector("textarea").value;
    // window.SpeechSynthesis.speak(speech);
    // window.speechSynthesis.speak()


    // const utterance = new SpeechSynthesisUtterance();

    // Select a voice
    const voices = speechSynthesis.getVoices();
    speech.voice = voices[0]; // Choose a specific voice
  

    speech.voice = voices[6];
    // speech.lang = voices[4].lang;


    // Speak the text
    speechSynthesis.speak(speech);
});

function setVoice(){
    let voice = document.getElementById("voice-type").value;
    alert(voice)
}

// window.speechSynthesis.onvoiceschanged = function() {
//     voices = window.speechSynthesis.getVoices()
//     var utterance = new SpeechSynthesisUtterance("Hello World");
//     utterance.voice = voices[4];
//     utterance.lang = voices[4].lang;
//     window.speechSynthesis.speak(utterance);
//     };