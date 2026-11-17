(function () {
  const form = document.querySelector("#tiktok-form");
  if (!form) return;

  const redirectUri = document.querySelector("#redirect-uri");
  const status = document.querySelector("#connect-status");
  redirectUri.value = new URL("callback.html", window.location.href).href;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const clientKey = document.querySelector("#client-key").value.trim();
    if (!clientKey) {
      status.textContent = "Enter the client key from your TikTok Developer app.";
      return;
    }

    const state = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    sessionStorage.setItem("tiktok_oauth_state", state);
    const params = new URLSearchParams({
      client_key: clientKey,
      response_type: "code",
      scope: "user.info.basic,video.list",
      redirect_uri: redirectUri.value,
      state: state
    });
    window.location.href = "https://www.tiktok.com/v2/auth/authorize/?" + params;
  });
}());
