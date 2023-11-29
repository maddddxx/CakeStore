var musicList = [];

var currentIndex = 0;

$.ajax({
  type: "GET",
  url: "../music.json",
  dataType: "json",
  success: function (data) {
    musicList = data;
    render(musicList[currentIndex]);
    renderMusicList(musicList);
  },
});

$("#playBtn").on("click", function () {
  if ($("audio").get(0).paused) {

    $(this).removeClass("fa-play").addClass("fa-pause");
 
    $(".player-info").animate(
      {
        top: "-100%",
        opacity: 1,
      },
      "slow"
    );

    $(".cover").css({
      "animation-play-state": "running",
    });

    $("audio").get(0).play();
  } else {
    $(this).removeClass("fa-pause").addClass("fa-play");
    $(".player-info").animate(
      {
        top: "0%",
        opacity: 0,
      },
      "slow"
    );

    $(".cover").css({
      "animation-play-state": "paused",
    });

    $("audio").get(0).pause();
  }

  renderMusicList(musicList);
});

$("#prevBtn").on("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = musicList.length - 1;
  }

  render(musicList[currentIndex]);
  $("#playBtn").trigger("click");
});

$("#nextBtn").on("click", function () {
  if (currentIndex < musicList.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  render(musicList[currentIndex]);

  $("#playBtn").trigger("click");
});


$("#openModal").on("click", function () {
  $(".modal").css({
    display: "block",
  });
});

$(".modal-close").on("click", function () {
  $(".modal").css({
    display: "none",
  });
});


$("audio").on("timeupdate", function () {

  var currentTime = $("audio").get(0).currentTime || 0;

  var duration = $("audio").get(0).duration || 0;

  $(".current-time").text(formatTime(currentTime));

  var value = (currentTime / duration) * 100;
  $(".music_progress_line").css({
    width: value + "%",
  });
});


$("audio").on("ended", function () {
  $("#playBtn").removeClass("fa-pause").addClass("fa-play");

  $(".cover").css({
    "animation-play-state": "paused",
  });
});


$(".music-list").on("click", ".play-circle", function () {
  if ($(this).hasClass("fa-play-circle")) {
    var index = $(this).attr("data-index");
    currentIndex = index;
    render(musicList[currentIndex]);
    $("#playBtn").trigger("click");
  } else {
    $("#playBtn").trigger("click");
  }
});


function formatTime(time) {
  // 329 -> 05:29
  var min = parseInt(time / 60);
  var sec = parseInt(time % 60);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  return `${min}:${sec}`;
}

function render(data) {
  $(".name").text(data.name);
  $(".singer-album").text(`${data.singer} - ${data.album}`);
  $(".time").text(data.time);
  $(".cover img").attr("src", data.cover);
  $("audio").attr("src", data.audio_url);
  $(".mask_bg").css({
    background: `url("${data.cover}") no-repeat center center`,
  });
}

function renderMusicList(list) {
  $(".music-list").empty();

  $.each(list, function (index, item) {
    var $li = $(`
      <li class="${index == currentIndex ? "playing" : ""}">
        <span>0${index + 1}. ${item.name} - ${item.singer}</span>
        <span data-index="${index}" class="fa ${
      index == currentIndex && !$("audio").get(0).paused
        ? "fa-pause-circle"
        : "fa-play-circle"
    } play-circle"></span>
      </li>
    `);
    $(".music-list").append($li);
  });
}
