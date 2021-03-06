var video_list = [];

var video_index = 0;
var video_player = document.getElementById("video");

function onSubmit(){
  var input_text = $("#translate-text").val();
  if (!input_text || input_text.length !== 0) {
    parseText(input_text.toLowerCase());
  }
}

function onClear(){
  $("#translate-text").val("");
}

function parseText(text) {
  var arr = text.split(" ");
  makeArray(arr);
}

function makeArray(arr) {
  video_list = [];
  video_index = 0;
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].toLowerCase();
    console.log(temp);
    var str = "https://www.handspeak.com/word/"+temp.charAt(0)+"/"+temp+".mp4";
    video_list.push(str);
  }
  console.log(video_list);
  video_player.src = video_list[video_index];
  video_player.load();
  var playPromise = video_player.play();

  // In browsers that don’t yet support this functionality,
  // playPromise won’t be defined.
  if (playPromise !== undefined) {
    playPromise.then(function() {
      console.log("auto playback started!");
    }).catch(function(error) {
      console.error('Failed to start video, retrying');
      onVideoEnded();
    });
  }
}

function onVideoEnded() {
  console.log("video ended");
  if(video_index < video_list.length - 1) {
    video_index++;
    video_player.src = video_list[video_index];
    var playPromise = video_player.play();

    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (playPromise !== undefined) {
      playPromise.then(function() {
        console.log("auto playback started!");
      }).catch(function(error) {
        console.error('Failed to start video, retrying');
        onVideoEnded();
      });
    }
  } else {
    video_player.pause();
  }

}
