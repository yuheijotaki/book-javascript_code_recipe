## Chapter 7 ユーザーアクションの取り扱い

### 114 ユーザーの操作が起こったときに処理を行いたい

イベント発生時に関数を呼び出す方法として、

- アロー関数を使う方法
- function宣言を使う方法
- 関数名を指定する方法

がある。

```javascript
// 要素の参照を取得する
const button = document.querySelector('.button');

// アロー関数を使う方法
button.addEventListener('click', () => {
  console.log(`ボタンがクリックされました`);
});

// function宣言を使う方法
button.addEventListener('click', function () {
  console.log(`ボタンがクリックされました`);
});

// 関数名を指定する方法
button.addEventListener('click', onClickButton);
function onClickButton() {
  console.log(`ボタンがクリックされました`);
}
```

イベント発生時に呼び出す関数では、引数としてイベントの情報を受け取ることができる。

```javascript
// イベントの情報を取得する
button.addEventListener('click', (event) => {
  // クリックされたボタン要素が出力される
  console.log(event.target);
});
```

### 115 イベントリスナーを一度だけ呼び出したい

```javascript
// オプションを指定
const option = {
  once: true
};

document
  .querySelector('.button')
  .addEventListener('click', onClickButton, option);

function onClickButton() {
  alert('ボタンが押されました。');
}
```

これ知らなかったす、たぶんいままで `var flag = true; ` 使ってしていた感じはいらなそう

| オプション | 意味                                | 型     |
| ---------- | ----------------------------------- | ------ |
| `capture`  | キャプチャフェーズで取得するか      | 真偽値 |
| `once`     | リスナーの呼び出しを1回のみにするか | 真偽値 |
| `passive`  | パッシブイベントかどうか            | 真偽値 |

### 117 ページが表示されたときに処理をしたい

```javascript
// DOMにアクセスするタイミングで処理を実行する
window.addEventListener('DOMContentLoaded', () => {
  // .box の要素数を取得する
  const boxNum = document.querySelectorAll('.box').length;
  // ログを出力
  console.log(`.box要素の数は${boxNum}です`);
});
```

この処理を行う場合、`<script src="">` の `defer` 属性の設定は不要。  
（`defer` を使うと、HTMLの解析終了後にスクリプトが実行されるため）

