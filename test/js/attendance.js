document
  .getElementById("attendance-button")
  .addEventListener("click", function () {
    const modal = document.getElementById("modal");
    modal.style.display = "flex"; // 勤怠入力のモーダルを表示
  });

document.querySelector(".close").addEventListener("click", function () {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // モーダルを閉じる
});

document
  .getElementById("clock-in-button")
  .addEventListener("click", function () {
    const modal = document.getElementById("modal");
    const popup = document.getElementById("popup");
    modal.style.display = "none"; // モーダルを閉じて
    popup.style.display = "flex"; // ポップアップを表示
  });

document
  .getElementById("confirm-button")
  .addEventListener("click", function () {
    const checkbox = document.getElementById("confirmation-checkbox");
    if (checkbox.checked) {
      alert("出勤が完了しました。");
      const popup = document.getElementById("popup");
      popup.style.display = "none"; // ポップアップを閉じる
    } else {
      alert("チェックボックスを確認してください。");
    }
  });
