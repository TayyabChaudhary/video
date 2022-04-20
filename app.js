const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("video");
/* Controls and Display Video Full Time Function Code */
const VideoFullTime = document.getElementById("oioo");
const controlsContainer = document.querySelector(".controls-container");
/*  */
const leftSideControls = document.querySelector(".left-side-controls");
const volumeControl = document.querySelector(".volume-control");
/*  */
const volumePanel = document.querySelector(".volume-panel");
const volumeRange = volumePanel.querySelector("input");
/*  */
const volumeProgress = volumePanel.querySelector(".volume-progress");
const playPauseButton = document.querySelector(".play-pause-btn");
/*  */
const volumeButton = document.querySelector(".volume-btn");
const fullScreenButton = document.querySelector(".full-screen-btn");
/*  */
const playButton = playPauseButton.querySelector(".play");
const pauseButton = playPauseButton.querySelector(".pause");
/*  */
const fullVolumeButton = volumeButton.querySelector(".full-volume");
const halfVolumeButton = volumeButton.querySelector(".half-volume");
/*  */
const mutedButton = volumeButton.querySelector(".muted");
const maximizeButton = fullScreenButton.querySelector(".maximize");
/*  */
const minimizeButton = fullScreenButton.querySelector(".minimize");
const VideoDurationTime = document.getElementById("video_duration");
/*  */
const progressBar = document.querySelector(".progress-bar");
const watchedBar = document.querySelector(".watched-bar");
/*  */
const playHead = document.querySelector(".playhead");
const centerPlayButton = document.getElementById("_iaa_ss_dd_rr");
/*  */
const Setting_Show_Hide_Toggle = document.getElementById("_paoa");
const Display_Zero_Percent_text = document.getElementById("full_one_hundred");

pauseButton.style.display = "none";
halfVolumeButton.style.display = "none";

mutedButton.style.display = "none";
minimizeButton.style.display = "none";

window.onresize = function () {
  var width = window.innerWidth - 30;
  controlsContainer.style.width = width + "px";
};

document.addEventListener("DOMContentLoaded", function () {
  var width = window.innerWidth - 30;
  controlsContainer.style.width = width + "px";
});

const playPause = () => {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
    pauseButton.style.display = "";
    centerPlayButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "";
    pauseButton.style.display = "none";
    centerPlayButton.style.display = "";
  }
};

const toggleMute = () => {
  video.muted = !video.muted;
  if (video.muted) {
    fullVolumeButton.style.display = "none";
    halfVolumeButton.style.display = "none";
    mutedButton.style.display = "";
    volumeRange.value = "0";
  } else {
    volumeRange.value = video.volume * 100;

    if (video.volume <= 0.5) {
      fullVolumeButton.style.display = "none";
      halfVolumeButton.style.display = "";
      mutedButton.style.display = "none";
    } else if (video.volume > 0.5) {
      fullVolumeButton.style.display = "";
      halfVolumeButton.style.display = "none";
      mutedButton.style.display = "none";
    }
  }
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

document.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    maximizeButton.style.display = "";
    minimizeButton.style.display = "none";
  } else {
    maximizeButton.style.display = "none";
    minimizeButton.style.display = "";
  }
});

video.addEventListener("timeupdate", function () {
  var watched = (100 / video.duration) * video.currentTime;
  watchedBar.style.width = watched + "%";
  playHead.style.left = watched + "%";

  if (video.ended) {
    playButton.style.display = "";
    pauseButton.style.display = "none";
  }
});

progressBar.addEventListener("mousedown", function (event) {
  const pos =
    (event.pageX -
      (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) /
    progressBar.offsetWidth;
  video.currentTime = pos * video.duration;
});

video.addEventListener("click", playPause);

video.addEventListener("dblclick", toggleFullScreen);

playPauseButton.addEventListener("click", playPause);

volumeButton.addEventListener("click", toggleMute);

fullScreenButton.addEventListener("click", toggleFullScreen);

volumeRange.addEventListener(
  "input",
  function (e) {
    volumeProgress.style.width = volumeRange.value + "%";

    video.volume = volumeRange.value / 100;

    if (volumeRange.value <= 0) {
      fullVolumeButton.style.display = "none";
      halfVolumeButton.style.display = "none";
      mutedButton.style.display = "";
    } else if (volumeRange.value <= 50) {
      video.muted = false;
      fullVolumeButton.style.display = "none";
      halfVolumeButton.style.display = "";
      mutedButton.style.display = "none";
    } else if (volumeRange.value > 50) {
      video.muted = false;
      fullVolumeButton.style.display = "";
      halfVolumeButton.style.display = "none";
      mutedButton.style.display = "none";
    }
  },
  false
);

volumeButton.addEventListener("mouseenter", function () {
  volumeControl.style.margin = "0px 2px 0px 0px";
  volumePanel.style.width = "52px";
});

leftSideControls.addEventListener("mouseleave", function () {
  volumeControl.style.margin = "0px 0px 0px 0px";
  volumePanel.style.width = "0px";
});

setInterval(function () {
  volumeProgress.style.width = volumeRange.value + "%";
}, 1);

// Play Button Tooltip
tippy("#skkdkd", {
  content: "Play (Space)",
  theme: 'dark',
  animation: 'scale',
  inertia: true,
  arrow: false,
});
// Mute Video
tippy("#_i_x_c_c", {
  content: "Mute video (m)",
  theme: 'dark',
  animation: 'scale',
  inertia: true,
  arrow: true,
});
// Un Mute Video
tippy("#_i_x_c_c_p_a_s_s", {
  content: "Unmute video (m)",
  theme: 'dark',
  animation: 'scale',
  inertia: true,
  arrow: true,
});
// Full Screen Tooltip
tippy("#o_aoao", {
  content: "Full Screen",
  theme: 'dark',
  animation: 'scale',
  inertia: true,
  arrow: true,
});
tippy("#se_ty_a", {
  content: "Settings",
  theme: 'dark',
  animation: 'scale',
  inertia: true,
  arrow: true,
});

tippy("#_o_0_a_q_3_s_s", {
  content: 'Multiplayer (i)',
  theme: 'dark',
  animation: 'scale',
  inertia: true,
  arrow: true
});
// Subtitle ToolTip
tippy("#_s_b_t_t_l_e", {
  content: 'Subtitles/closed captions unavaible',
  theme: 'dark',
  animation: 'scale',
  inertia: true,
  arrow: true
});

// IF I Press Keyboard Scape Button Then Video Will Play and Pause Code Start From Here
document.onkeypress = function (e) {
  switch ((e || window.event).keyCode === 32) {
    case video.paused:
      video.play();
      playButton.style.display = "none";
      pauseButton.style.display = "";
      centerPlayButton.style.display = "none";

      break;
    default:
      video.pause();
      playButton.style.display = "";
      pauseButton.style.display = "none";
      centerPlayButton.style.display = "";
      break;
  }
};
// IF I Press Keyboard Scape Button Then Video Will Play and Pause Code End From Here

video.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  var Con = document.getElementById("contextmenu");
  Con.style.top = e.offsetY + "px";
  Con.style.left = e.offsetX + "px";
  Con.classList.add("show_active");
});
window.addEventListener("click", function () {
  document.getElementById("contextmenu").classList.remove("show_active");
});



/* If Press Right Left Key Arrow After Video Forward and BackWord Code Start Here */
document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      event.preventDefault();

      dislay_video_current_Time = video.currentTime;
      video.currentTime = dislay_video_current_Time - 5;
      break;

    case 39:
      event.preventDefault();
      dislay_video_current_Time = video.currentTime;
      video.currentTime = dislay_video_current_Time + 5;
      break;

    case 70:
      if (!document.fullscreenElement) {
        videoContainer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      break;

    case 77:
      video.muted = !video.muted;
      if (video.muted) {
        fullVolumeButton.style.display = "none";
        halfVolumeButton.style.display = "none";
        mutedButton.style.display = "";
        volumeRange.value = "0";
        Display_Zero_Percent_text.style.display = "none";
      } else {
        volumeRange.value = video.volume * 100;

        if (video.volume <= 0.5) {
          fullVolumeButton.style.display = "none";
          halfVolumeButton.style.display = "";
          mutedButton.style.display = "none";
        } else if (video.volume > 0.5) {
          fullVolumeButton.style.display = "";
          halfVolumeButton.style.display = "none";
          mutedButton.style.display = "none";
          Display_Zero_Percent_text.style.display = "block";
          setTimeout(() => {
              Display_Zero_Percent_text.style.display = "none";
          }, 1000);
        }
      }
      break;
 
  }
};


/* If Click Setting Button After Show PopUp Video Option Code Start Here */
Setting_Show_Hide_Toggle.onclick = function () {
  var Show_hide_setting_Video_Play_back = document.getElementById("_p_0_a_3_s");

  if (Show_hide_setting_Video_Play_back.style.display !== 'none') {
    Show_hide_setting_Video_Play_back.style.display = 'none';
  }
  else {
    Show_hide_setting_Video_Play_back.style.display = 'block';
    var Show_Video_Quality_Popup_ = document.getElementById("ksdlskdl");

  Show_Video_Quality_Popup_.style.display = "none";
  }
}
/* If Click Setting Button After Show PopUp Video Option Code End Here */

function Io_a_as_sd() {
  var Show_Video_Quality_Popup_ = document.getElementById("ksdlskdl");

  Show_Video_Quality_Popup_.style.display = "block";

  var Hide_Pervoius_Box = document.getElementById("_p_0_a_3_s");

  Hide_Pervoius_Box.style.display = "none";
}

