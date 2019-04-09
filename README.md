# 【学習メモ】JavaScriptコードレシピ集

JavaScriptコードレシピ集 の学習メモ 続きです。

## Chapter 2 真偽値や数値や文字の取り扱い

### 022 四捨五入、切り捨て、切り上げをしたい

いろいろ処理あるけど、`round()` `floor()` `ceil()` `trunc()` の4つの使い方があると頭の片隅に入っていればよいような気がする

```javascript
console.log(Math.round(6.24)); // 結果: 6 <- 四捨五入する
console.log(Math.floor(6.24)); // 結果: 6 <- 切り捨てる（数値以下の最大の整数を返す）
console.log(Math.ceil(6.24));  // 結果: 7 <- 切り上げる（数値以上の最小の整数を返す）
console.log(Math.trunc(6.24)); // 結果: 6 <- 数値の整数部分を返す

console.log(Math.round(7.8));  // 結果: 8 <- 四捨五入する
console.log(Math.floor(7.8));  // 結果: 7 <- 切り捨てる（数値以下の最大の整数を返す）
console.log(Math.ceil(7.8));   // 結果: 8 <- 切り上げる（数値以上の最小の整数を返す）
console.log(Math.trunc(7.8));  // 結果: 7 <- 数値の整数部分を返す
```

### 023 ランダムな数を使いたい

ボタンをクリックする度に、ランダムにグラデーション色を変えるサンプル

```html
<button class="item23_button">カラー変更</button>
<div class="item23_rectangle"></div>

<style>
  .item23_rectangle {
    width: 420px;
    height: 200px;
    --start: hsl(0, 100%, 50%);
    --end: hsl(322, 100%, 50%);
    background-image: linear-gradient(-135deg, var(--start), var(--end));
  }
</style>
```

```javascript
/** 長方形 */
const rectangle = document.querySelector('.item23_rectangle');

// ボタンをクリックしたら onClickButton を実行する
document.querySelector('.item23_button').addEventListener('click', onClickButton);

/** ボタンをクリックする度に、長方形のグラデーション色を変える */
function onClickButton() {
  // 0〜359 の間のランダムな数を取得する
  const randomHue = Math.trunc(Math.random() * 360);
  // グラデーションの開始色と終了色を決定
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

  // 長方形のグラデーションのための変数（--start と --end）を変更
  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}
```

これだけで、けっこういろいろできそうなイメージ湧きますね。  
関係ないですが、CSS変数というの見たことある気もしますがはじめて使いました。。こういう JavaScript の処理によって値を入れ替える系だと使えそうですね。

### 027 文字列の長さを取得したい

```javascript
console.log('abc'.length);  // 結果: 3
console.log('あいう'.length); // 結果: 3
console.log('🐮'.length);   // 結果: 2
```

最後の 🐮 は、サロゲートペア（4バイトとして表現される特殊な文字や絵文字）  
1文字としてカウントするには、

```javas
console.log(Array.from('🐮').length); // 結果: 1
```

のように `Array.from()` を使う。



---

下記は難しい（しばらく使わなそう）のでスキップ。

- 024 数学的な計算を行いたい
- 025 三角関数を使いたい