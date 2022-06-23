window.addEventListener("load", () => {
  const takeOff = document.getElementById("takeoff");
  const status = document.getElementById("flightStatus");
  const background = document.getElementById("shuttleBackground");
  const height = document.getElementById("spaceShuttleHeight");
  const land = document.getElementById("landing");
  const down = document.getElementById("down");
  const img = document.getElementById("rocket");

  takeOff.addEventListener("click", () => {
    result = window.confirm("Confirm the shuttle is ready for takeoff.");
    if (result) {
      status.innerHTML = "Shuttle in flight.";
      background.style.backgroundColor = "blue";
      height.innerHTML = 10000;
    }
  });

  landing.addEventListener("click", () => {
    response = window.alert("The shuttle is landing. Landing gear engaged.");
    if (response) {
      status.innerHTML = "The shuttle has landed.";
      background.style.backgroundColor = "green";
      height.innerHTML = 0;
    }
  });

  down.addEventListener("click", () => {
    movement = parseInt(img.style.bottom) - 10 + "px";
    img.style.bottom = movement;
    height.innerHTML = parseInt(height) - 10000;
  });
});
