# playwright-saucedemo-ui-tests

Sauce Demo を対象にした、Playwright による UI 確認のサンプル成果物です。

## 目的
Playwright を使って、公開デモサイトに対する基本的な UI テストを作成し、実行できる状態にすること。

## 対象サイト
- Sauce Demo
- https://www.saucedemo.com/

## 現在のバージョン
v1.1

## バージョン履歴
### v1.0
standard user でログインし、商品一覧ページが表示されることを確認する最小構成のE2Eテスト成果物。

### v1.1
standard user でログイン後、商品詳細ページへ遷移し、期待した画面表示・文言・URLを確認できる構成に拡張。  
あわせて、Page Object Model (POM) を用いた構造整理を実施。

## 実行方法
以下をターミナルで実行します。

```bash
npx playwright test
```