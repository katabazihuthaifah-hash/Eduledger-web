const SUPABASE_URL = https://ilkwzmeyvyipualujfhy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_LHqNxqRucVH--zg_1W6XUA_8Yd5Sw0T";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const form = document.getElementById("login-form");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  message.textContent = "Signing in...";

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    message.textContent = "Login failed: " + error.message;
    return;
  }

  message.textContent = "Login successful";
  alert("Login successful");
});
