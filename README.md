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

### 118 クリック時に処理をしたい

```javascript
document.querySelector('.button').addEventListener('click', () => {
  alert('ボタンがクリックされました');
});
```

### 119 マウスを押したときや動かしたときに処理をしたい

| イベント名  | 発生タイミング           |
| ----------- | ------------------------ |
| `mousedown` | マウスボタンを押したとき |
| `mouseup`   | マウスボタンを話したとき |
| `mousemove` | マウスを動かしたとき     |

### 120 マウスオーバー時に処理をしたい  

### 121 マウスオーバー時に処理をしたい（バブリングあり）

マウスオーバー時の処理、 `mouseenter` / `mouseleave` と `mouseover` / `mouseout` の違いはイベントがバブリングするかどうか。

> バブリングとは、ある要素で発生したイベントが親要素や先祖要素に伝わることです。

`mouseover` / `mouseout` はバブリングが発生するイベントなので、親要素・小要素で `mouseover` / `mouseout`  のイベントリスナーを設定していた場合、小要素で発生したイベントが親要素にも発生し、親要素のイベントリスナーが実行される。

```html
<div class="item120_box">
  <div class="item120_inner">
  </div>
</div>
```

```javascript
document.querySelector('.item120_box').addEventListener('mouseover', () => {
  console.log('.item120_box 要素にマウスが乗った');
});

document.querySelector('.item120_inner').addEventListener('mouseover', () => {
  console.log('.item120_inner 要素にマウスが乗った');
});
```

と書いたとき、`.item120_inner` をマウスオーバーすると、ログには

```
.item120_inner 要素にマウスが乗った
.item120_box 要素にマウスが乗った
```

と inner要素のイベントに加えて box要素のイベントも発生する。

### 122 マウス操作時の座標を取得したい

| プロパティー    | 内容                          | 型   |
| --------------- | ----------------------------- | ---- |
| `event.clientX` | ブラウザ左上を基準としたX座標 | 数値 |
| `event.clientY` | ブラウザ左上を基準としたY座標 | 数値 |
| `event.offsetX` | 要素左上を基準としたX座標     | 数値 |
| `event.offsetY` | 要素左上を基準としたY座標     | 数値 |
| `event.pageX`   | ページ左上を基準としたX座標   | 数値 |
| `event.pageY`   | ページ左上を基準としたY座標   | 数値 |
| `event.screenX` | デバイス左上を基準としたX座標 | 数値 |
| `event.screenY` | デバイス左上を基準としたY座標 | 数値 |

```javascript
window.addEventListener('mousemove', (event) => {
  console.log(event.clientX, event.clientY);
});
```

### 123 スクロール時に処理をしたい

```javascript
window.addEventListener('scroll', (event) => {
  console.log(window.scrollX, window.scrollY);
});
```

### 124 テキスト選択時に処理をしたい

```javascript
document.querySelector('.item124_paragraph').addEventListener('selectstart', () => {
  console.log('テキストが選択された');
});
```

Medium とかのツールチップ表示はこれなどを使っているのですね。  
実用ではサンプルである通り、選択された文字列が1文字以上あるかなど調べて処理するなどするので少し複雑そうです。

```javascript
// 選択されている文字列を取得する
const selectionCharactors = windowGetSelection().toString();
```

`windowGetSelection()` は選択範囲を返す処理。

### 125 タッチ操作時に処理をしたい

| イベント名   | 発生タイミング               |
| ------------ | ---------------------------- |
| `touchstart` | タッチを開始したとき         |
| `touchmove`  | タッチポイントを動かしたとき |
| `touchend`   | タッチを終了したとき         |

### 126 タッチ操作時のイベントの発生情報を取得したい

タッチイベントは複数のタッチイベントが発生する可能性がある（親指と人差指で同時にタッチした際など）  
`event.changeTouches` とすることでタッチ情報を配列で複数取得ができる。

```javascript
const item126_box = document.querySelector('.item126_box');
item126_box.addEventListener('touchstart', (event) => {
  // タッチ情報のリスト
  console.log(event.changeTouches);
});
```

### 129 タブがバックグラウンドになったときに処理をしたい

```javascript
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('コンテンツが表示されました');
    return;
  }

  if (document.visibilityState === 'hidden') {
    console.log('コンテンツがバックグラウンドになりました');
  }
});
```

「110 ページにフォーカスされているか調べたい」の `focus` / `blur` とは違ってブラウザのタブが選択状態か否かの判断となる。こちらのほうが実用的ですかね

### 130 画面サイズが変更になったときに処理をしたい

「097 ウインドウサイズを調べたい」のときに触れた、リサイズ毎の処理、`setTimeout()` を使う方法

```javascript
// 1秒後にリサイズ処理を実行するタイマー
let resizeTimer;

window.addEventListener('resize', () => {
  // resizeTimer があればタイマーを解除
  if (resizeTimer != null) {
    clearTimeout(resizeTimer);
  }

  // 1000ミリ秒後に onResize() を実行する
  resizeTimer = setTimeout(() => {
    onResize();
  },1000)
});

// リサイズ時の処理
function onResize() {
  console.log('ウィンドウがリサイズされました');
}
```

### 131 画面サイズがブレークポイントを超えたときに処理をしたい

これ全く知らなかったです。↑のウィンドウサイズでやることってだいたいメディアクエリでできることのような気がするので今後これを使うべきかも？

```javascript
const mediaQueryList = matchMedia('(min-width: 500px');
console.log(mediaQueryList);
/* 結果:
matches: true
media: "(min-width: 500px)"
onchange: null
*/
```

> `matchMedia()` メソッドは、引数に応じたメディアクエリの情報を返します。

> `matches` プロパティーはメディアクエリに一致するかどうかの真偽値であり、`media` プロパティーはブラウザーが評価したクエリ文字列です。

`matches` プロパティーを用いて、ブラウザーウィンドウのサイズがメディアクエリに一致するかどうかを調べられます。

```javascript
// ウィンドウサイズが300px以下ならばtrue
const mediaQueryMacth01 = matchMedia('(max-width: 500px').matches;
console.log(mediaQueryMacth01);

// ウィンドウサイズが100px以上700px以下ならばtrue
const mediaQueryMacth02 = matchMedia('(min-width: 100px) and (max-width: 700px').matches;
console.log(mediaQueryMacth02);
```

スマートフォンの縦向き・横向き変更を検知したいときなど、メディアクエリの変化タイミングで処理を行いたいケースには、次のようにコールバック処理を設定できます。コールバックはメディアクエリの状態が変更されるタイミングで実行されます。

```javascript
// (orientation: portrait)は横持ちを示す
const mediaQueryList02 = matchMedia('(orientation: portrait');

mediaQueryList02.eventListener(() => {
  console.log('デバイスの向きが変更された');
});
```

クラス着脱の例

```css
.item131_rectangle {
  width: 200px;
  height: 200px;
  background: blue;
}

.item131_rectangle.big-size {
  background: red;
}
```

```javascript
const rectAngle = document.querySelector('.item131_rectangle');

// メディアクエリ情報
const mediaQueryList03 = matchMedia('(min-width: 600px');

// メディアクエリが変更されたタイミングで処理
mediaQueryList03.addListener(onMediaQueryChange);

// メディアクエリが変更された際に実行される関数
function onMediaQueryChange(mediaQueryList03) {
  if (mediaQueryList03.matches === true) {
    rectAngle.classList.add('big-size');
    console.log('ウィンドウサイズが600pxを超えました');
  } else {
    rectAngle.classList.remove('big-size');
    console.log('ウィンドウサイズが600pxを下回りました');
  }
}

// ページ表示時に一度 onMediaQueryChange() を実行しておく
onMediaQueryChange(mediaQueryList03);
```

### 132 イベントを発火させたい

これも知らなかった。使えるかどうか微妙ですが

> `dispatchEvent()` メソッドは、イベントターゲットに対して任意のイベントを発生させます。

下記の例は、クリックしなくても1秒後に `クリックされました` とHTMLが仕込まれるというもの。

```javascript
const item132_boxElement = document.querySelector('#item132_myBox');

item132_boxElement.addEventListener('click', () => {
  item132_boxElement.innerHTML = 'クリックされました';
});

setTimeout(() => {
  item132_boxElement.dispatchEvent(new Event('click'));
}, 1000);
```

### 133 デフォルトのイベントをキャンセルしたい

```javascript
// マウスホイールを無効化する
document.querySelector('.item133_foo').addEventListener('wheel', (event) => {
  event.preventDefault();
});

// タッチ開始処理を無効化
document.documentElement.addEventListener('touchstart', (event) => {
  event.preventDefault();
});
```



---

132,133 あたりのイベントの発火やキャンセルって結構苦手で実戦ではまた苦戦するのだろうなとも思いますがこういう機会に学べてよかったです