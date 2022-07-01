window.addEventListener("load", () => {
  const status = document.getElementById("flightStatus");
  const background = document.getElementById("shuttleBackground");
  const height = document.getElementById("spaceShuttleHeight");
  // let shuttleWidth = document.getElementById('spaceShuttleWidth');
  const img = document.getElementById("rocket");

  const takeOff = document.getElementById("takeoff");
  takeOff.addEventListener("click", () => {
    result = window.confirm("Confirm the shuttle is ready for takeoff.");
    if (result) {
      status.innerHTML = "Shuttle in flight.";
      background.style.backgroundColor = "blue";
      height.innerHTML = 10000;
    }
  });

  const land = document.getElementById("landing");
  landing.addEventListener("click", () => {
    response = window.alert("The shuttle is landing. Landing gear engaged.");
    if (response) {
      status.innerHTML = "The shuttle has landed.";
      background.style.backgroundColor = "green";
      height.innerHTML = 0;
    }
  });

  const missionAbort = this.document.getElementById("missionAbort");
  missionAbort.addEventListener("click", function () {
    result = window.confirm("Are you sure you want to end the mission?");
    if (result) {
      background.style.backgroundColor = "green";
      height.innerHTML = "0";
      status.innerHTML = "Mission aborted";
    }
  });

  let shuttleWidth = document.getElementById("spaceShuttleWidth");

  let right = document.getElementById("right");
  right.addEventListener("click", function () {
    movement = parseInt(img.style.left) + 10 + "px";
    img.style.left = movement;
    shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) + 10000;
  });

  let left = document.getElementById("left");
  left.addEventListener("click", function () {
    movement = parseInt(img.style.left) - 10 + "px";
    img.style.left = movement;
  });

  const down = document.getElementById("down");
  down.addEventListener("click", () => {
    movement = parseInt(img.style.bottom) - 10 + "px";
    img.style.bottom = movement;
    height.innerHTML = parseInt(height) - 10000;
  });
});
