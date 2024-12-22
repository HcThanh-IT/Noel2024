const showButton = document.getElementById("showButton");
const christmasMessage = document.getElementById("as");

showButton.addEventListener("click", function () {
  if (christmasMessage.style.display === "none") {
    christmasMessage.style.display = "block";
  } else {
    christmasMessage.style.display = "none";
  }
});
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("as").style.display = "block";
});

document.getElementById("showButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");
  var audioPlayer = document.getElementById("audioPlayer");

  // Ẩn nút
  button.classList.add("hidden");

  // Hiện thông tin
  guideInfo.classList.remove("hidden");
  guideInfo.classList.add("show");

  // Phát nhạc
  audioPlayer.play();
});





document.addEventListener("DOMContentLoaded", function () {
  var encodedText ="&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#72;&#99;&#84;&#104;&#97;&#110;&#104;";
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  document.body.appendChild(footer); 
});
const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", function () {
  treeIcon.classList.add("shake-animation");

  treeIcon.addEventListener("animationend", function () {
    treeIcon.classList.remove("shake-animation");
  });
});

function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");


    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 3}s`;
    snowflake.style.animationDelay = `${Math.random() * 20}s`;
    snowflake.style.setProperty("--random-x", Math.random());

    snowflakesContainer.appendChild(snowflake);
  }
}

window.onload = createSnowflakes;

// Lấy thẻ card
const card = document.getElementById("ax");

// Thêm sự kiện click cho thẻ card
card.addEventListener("click", function () {
  // Kiểm tra nếu card đã mở (có class 'open')
  if (card.classList.contains("open")) {
    // Nếu đã mở, đóng lại
    card.classList.remove("open");

    // Ẩn guideInfo và hiện nút
    var guideInfo = document.getElementById("guideInfo");
    var button = document.getElementById("showButton");

    guideInfo.classList.remove("show");
    setTimeout(function () {
      guideInfo.classList.add("hidden");
      christmasMessage.style.display = "block";
      button.classList.remove("hidden");
    }, 500);
  } else {
    // Nếu chưa mở, mở thẻ
    card.classList.add("open");
  }
});
