window.onload = function () {
  var sendBtn = document.querySelector("#send");
  var envelope = document.querySelector(".envelope");
  var envelopebg = document.querySelector(".envbg");
  var finished = document.querySelector(".finished");
  var resetButton = document.querySelector(".resetButton");
  var lid = document.querySelector(".lid");
  var email = document.querySelector(".emailBody");
  var fromEmail = document.getElementById("fromEmail");
  var fromName = document.getElementById("fromName");
  var fromSubject = document.getElementById("fromSubject");
  var mainMessage = document.getElementById("mainMessage");

  function startAnimation() {
    envelope.classList.add("show");
    envelopebg.classList.add("show");
    email.classList.add("move");
    lid.classList.add("move");
    envelope.classList.add("move");
    setTimeout(function () {
      email.classList.add("hide");
      envelopebg.classList.add("hide");
    }, 5000);
  }

  function reset() {

    fromEmail.value = "";
    fromName.value = "";
    fromSubject.value = "";
    mainMessage.value = "";

    sendBtn.disabled = false;

    envelopebg.classList.remove("show");
    envelopebg.classList.remove("hide");
    envelope.classList.remove("show");
    envelope.classList.remove("done");
    envelope.classList.remove("move");
    lid.classList.remove("move");
    email.classList.remove("move");
    email.classList.remove("hide");
    finished.classList.remove("show");
  }

  sendBtn.addEventListener("click", function () {
    this.disabled = true;
    startAnimation();
    setTimeout(function () {
      reset();
      email.classList.add("hide");
      envelope.classList.add("done");
    }, 7500);
    setTimeout(function () {
      envelope.classList.add("show");
      finished.classList.add("show");
    }, 7800);
  });

  resetButton.addEventListener("click", reset);
};
