const form = document.getElementById("rsvp-form");
const status = document.getElementById("status");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    status.innerHTML = "🎶 Thank you! Your RSVP has been sent.";
    form.reset();
  } else {
    status.innerHTML = "Something went wrong. Try again.";
  }
});
