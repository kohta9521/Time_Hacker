document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const loginId = document.getElementById("login-id").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // 仮のログイン情報をチェック
  if (loginId === "user123" && password === "pass123") {
    window.location.href = "attendance.html"; // ログイン成功で勤怠ページに移動
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "ユーザーIDまたはパスワードが正しくありません。";
  }
});
