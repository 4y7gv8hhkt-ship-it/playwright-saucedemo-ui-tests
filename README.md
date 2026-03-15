# playwright-ui-check

Sauce Demo を対象にした、Playwright による UI 確認のサンプル成果物です。

## 目的
Playwright を使って、公開デモサイトに対する基本的な UI テストを作成し、実行できる状態にすること。

## 対象サイト
- Sauce Demo
- https://www.saucedemo.com/

## 現在のバージョン
v1.0

## バージョン履歴
### v1.0
ローカルで起動したWebアプリに対し、Playwrightで主要な正常系操作を自動実行し、期待した画面表示・文言・URLを確認できる最小構成のE2Eテスト成果物。

## 実行方法
以下をターミナルで実行します。

```bash
npx playwright test
```

## 確認項目
この成果物では、以下を確認しています。

- standard user でログインできること
- locked out user でログイン失敗メッセージが表示されること
- standard user で商品をカートに追加できること

## 使用技術
- Playwright
- TypeScript
- Node.js