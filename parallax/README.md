## パララックス（視覚効果）をRellax.jsで実装。
https://dixonandmoe.com/rellax/

## パララックスとは
パララックスとは視覚効果のこと。
スクロールに応じて要素の動きやスピードを操作する。
立体感・奥行きなどを演出すること。

## デメリット
 - スクロール処理はスクロールするごとに処理するため、サイトが重くなりやすい。
 - たくさんの要素にパララックスを使用すると余計に負荷がかかるため注意がいる。

## Rellax.js
jQueryに依存しない、パララックスを気軽に実装できるプラグイン。

読み込みはCDNもあり。

ダウンロードはGithubから。
https://github.com/dixonandmoe/rellax

## 主に使用するプラグインのオプション
 - JS
   - speed data-rellax-speedと同様。

   - center true/false 初期値はfalse。

   - horizontal 初期値false。横スクロールのサイトを作るときにtrueにする。

   - vertical 初期値true。horizontalをtrueにする場合はこちらをfalseにする。

   - callback (コールバック関数) 現在のスクロール値の取得。

   - round true(初期値) / false。trueでスクロール値を小数点以下に四捨五入する。

 - HTML(カスタム属性)
   - data-rellax-speed スクロールスピード(-10 ～ 10)デフォルトは-2。マイナス値を指定すると下方向にスクロール。プラス値だと上方向にスクロール。

   - data-rellax-zindex 重なり順。数字が大きいほど手前に表示。デフォルト 0

   - data-rellax-percentage 要素の位置を指定。初期値は -0.1くらい。JSのcenterをtrueにしていると使えない。マイナス値で下方向へ、プラス値で上方向へ配置される。