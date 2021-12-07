function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const audio = document.getElementById("audio");

function changeSong(song) {
  document.getElementById("music").src = song;
  audio.load();
  audio.play();
}

function zTransition(activeId, oldId) {
  const activeIFrame = document.getElementById(activeId);
  const oldIFrame = document.getElementById(oldId);
  activeIFrame.classList.remove("fadeIn");
  activeIFrame.classList.remove("fadeOut");
  activeIFrame.classList.add("fadeIn");
  oldIFrame.classList.remove("fadeIn");
  oldIFrame.classList.remove("fadeOut");
  oldIFrame.classList.add("fadeOut");
  activeIFrame.style.zIndex = "2";
  oldIFrame.style.zIndex = "1";
}

let counter;

async function main() {
  counter = 0;

  while (counter < 3) {
    predictWebcam();

    // Compute every sec
    await sleep(1000);
  }

  // Change scene to prompt
  document.getElementById("content2").src = scenes["prompt"]["src"];
  zTransition("content2", "content1");
  changeSong(scenes["prompt"]["music"]);
  // sleep until prompt loads
  await sleep(scenes["prompt"]["duration"] * 1000);

  annyang.resume();
}

// Activate the webcam stream.
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    video.srcObject = stream;
  })
  .catch(function (err) {
    alert("getUserMedia() is not supported by your browser");
  });

  navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function (stream) {
  })
  .catch(function (err) {
    alert("getUserMedia() is not supported by your browser");
  });

var model = undefined;
const video = document.getElementById("webcam");

// Before we can use COCO-SSD class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment to
// get everything needed to run.
cocoSsd.load().then(function (loadedModel) {
  model = loadedModel;
  // Show neutral screen now model is ready to use.
  zTransition("content1", "waiting");
  main();
});

// Prediction
async function predictWebcam() {
  // Now let's start classifying the stream.
  model.detect(video).then(function (predictions) {
    // loop through predictions and start if high confidence score.
    for (let n = 0; n < predictions.length; n++) {
      // If we are over 66% sure we are sure we classified it right
      if (predictions[n].score > 0.66 && predictions[n].class == "person") {
        counter += 1;
      } else {
        counter = 0;
      }
    }
  });
}

// Speech Recognition
if (annyang) {
  var commands = {
    angry: async function () {
      annyang.pause();
      document.getElementById("content1").src = scenes["angry"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["angry"]["music"]);
      await sleep((scenes["angry"]["duration"] + 3) * 1000);
      document.getElementById("content2").src = scenes["end"]["src"];
      zTransition("content2", "content1");
      changeSong(scenes["end"]["music"]);
      await sleep((scenes["end"]["duration"] + 3) * 1000);
      document.getElementById("content1").src = scenes["neutral"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["neutral"]["music"]);
      main();
    },
    happy: async function () {
      annyang.pause();
      document.getElementById("content1").src = scenes["happy"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["happy"]["music"]);
      await sleep((scenes["happy"]["duration"] + 3) * 1000);
      document.getElementById("content2").src = scenes["end"]["src"];
      zTransition("content2", "content1");
      changeSong(scenes["end"]["music"]);
      await sleep((scenes["end"]["duration"] + 3) * 1000);
      document.getElementById("content1").src = scenes["neutral"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["neutral"]["music"]);
      main();
    },
    sad: async function () {
      annyang.pause();
      document.getElementById("content1").src = scenes["sad"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["sad"]["music"]);
      await sleep((scenes["sad"]["duration"] + 3) * 1000);
      document.getElementById("content2").src = scenes["end"]["src"];
      zTransition("content2", "content1");
      changeSong(scenes["end"]["music"]);
      await sleep((scenes["end"]["duration"] + 3) * 1000);
      document.getElementById("content1").src = scenes["neutral"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["neutral"]["music"]);
      main();
    },
    scared: async function () {
      annyang.pause();
      document.getElementById("content1").src = scenes["scared"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["scared"]["music"]);
      await sleep((scenes["scared"]["duration"] + 3) * 1000);
      document.getElementById("content2").src = scenes["end"]["src"];
      zTransition("content2", "content1");
      changeSong(scenes["end"]["music"]);
      await sleep((scenes["end"]["duration"] + 3) * 1000);
      document.getElementById("content1").src = scenes["neutral"]["src"];
      zTransition("content1", "content2");
      changeSong(scenes["neutral"]["music"]);
      main();
    },
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  annyang.pause();
}
