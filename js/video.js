var video_list = [];

var video_index = 0;
var video_player = null;
var input_text = null;

function onSubmit(){
  console.log("body loaded");
  video_player = document.getElementById("video");
  input_text = $("#translate-text").val();
  video_list = [];
  if (!input_text || input_text.length !== 0) {
    console.log(input_text);
    parseText();
  }
}

function onClear(){
  $("#translate-text").val("");
}

function parseText() {
  var arr = input_text.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var str = "https://www.handspeak.com/word/"+arr[i].charAt(0)+"/"+arr[i]+".mp4";
    console.log(str);
    video_list.push(str);
  }
  video_player.src = video_list[video_index];
  startPlayback();
}

function startPlayback() {
  console.log("startplayback");
    video_player.play();
}

startPlayback.then(function () {
  console.log(video_player.currentTime, video_player.duration);
}).catch(function(error) {
        console.error('Failed to start video, retrying');
        var playButton = document.querySelector('#submit');
        playButton.addEventListener('click', startPlayback);
        playButton.hidden = false;
});


function onVideoEnded() {
  console.log("video ended");
  if(video_index < video_list.length - 1) {
    video_index++;
    video_player.src = video_list[video_index];
    startPlayback();
  } else {
    video_player.pause();
  }

}
