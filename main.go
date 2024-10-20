package main

import (
	"context"
	"log"

	"github.com/chromedp/chromedp"
)

func main() {
    // Chromeブラウザのコンテキストを作成
    ctx, cancel := chromedp.NewContext(context.Background())
    defer cancel()

    // ログインするための変数
    loginURL := "http://127.0.0.1:5500/test/attendance.html" // 勤怠システムのログインURLに変更
    username := "user123"
    password := "pass123"

    // ブラウザでの操作を定義
    var res string
    err := chromedp.Run(ctx,
        chromedp.Navigate(loginURL), // ログインページに移動
        chromedp.WaitVisible(`#login-id`), // ログインIDフィールドが見えるまで待機
        chromedp.SendKeys(`#login-id`, username), // ログインIDを入力
        chromedp.SendKeys(`#password`, password), // パスワードを入力
        chromedp.Click(`#submit-btn`), // ログインボタンをクリック
        chromedp.WaitVisible(`#dashboard`), // ログイン後のダッシュボードが表示されるまで待機
        chromedp.OuterHTML(`#dashboard`, &res), // ダッシュボードのHTMLを取得（テスト用）
    )
    if err != nil {
        log.Fatal(err)
    }

    // 結果を表示
    log.Println("Dashboard HTML:", res)

    // ログイン後に特定のボタンをクリック
    err = chromedp.Run(ctx,
        chromedp.Click(`#button-id`),
    )
    if err != nil {
        log.Fatal(err)
    }

    log.Println("ボタンが正常にクリックされました")
}
