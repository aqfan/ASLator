var artyom = new Artyom();

var UserDictation = artyom.newDictation({
    continuous:true, // Enable continuous if HTTPS connection
    onResult:function(text){
        // Do something with the text
        console.log(text);
    },
    onStart:function(){
        console.log("Dictation started by the user");
    },
    onEnd:function(){
        alert("Dictation stopped by the user");
    }
});

function startRecord() {
  UserDictation.start();
}

function stopRecord() {
  UserDictation.stop();
}

artyom.initialize({
    lang:"en-GB",
    debug:true, // Show what recognizes in the Console
    listen:true, // Start listening after this
    speed:0.9, // Talk a little bit slow
    mode:"normal" // This parameter is not required as it will be normal by default
});
