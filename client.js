console.log('Client loaded');
function startVsBot() { alert("Coming soon: Play vs Bot"); }
function joinGame() { alert("Joining Online Game..."); }
function openPuzzle() { alert("Puzzle Mode Loading..."); }
function openTournament() { alert("Tournament Feature Starting..."); }
function openCoach() { alert("Coach Mode Initiated"); }
function openLearn() { alert("Learning Mode"); }
document.querySelector(".register-button").addEventListener("click", async () => {
  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
});

document.querySelector(".login-button").addEventListener("click", async () => {
  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
});
