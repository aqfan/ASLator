var artyom = new Artyom();

var result = '';

var UserDictation = artyom.newDictation({
  continuous:true, // Enable continuous if HTTPS connection
  onResult:function(text){
    // Do something with the text
    if (!text || text.length !== 0) {
      result = text;
      console.log(result);
    }
  },
  onStart:function(){
    console.log("Dictation started by the user");
  },
  onEnd:function(){
    alert("Dictation stopped by the user");
    console.log("result:"+result);
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
