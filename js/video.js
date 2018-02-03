var video_list = [];

var video_index = 0;
var video_player = document.getElementById("video");

function onSubmit(){
  var input_text = $("#translate-text").val();
  video_list = [];
  video_index = 0;
  if (!input_text || input_text.length !== 0) {
    parseText(input_text);
  }
}

function onClear(){
  $("#translate-text").val("");
}

function parseText(text) {
  var arr = text.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var str = "https://www.handspeak.com/word/"+arr[i].charAt(0)+"/"+arr[i]+".mp4";
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
      video_index++;
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
        video_index++;
      });
    }
  } else {
    video_player.pause();
  }

}
