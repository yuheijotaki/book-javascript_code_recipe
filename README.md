## Chapter10 アニメーションの作成

### 181 CSS Transitionsの終了時に処理を行いたい

CSSの `animation` ではなく `transition` の終了を監視する場合、`transitionend` イベントを用いる

```javascript
const item181_rect = document.querySelector('.item181_rect');
item181_rect.addEventListener('transitionend', (event) => {
  // アニメーション完了時のコード
  console.log('アニメーションが完了しました');
});
```

### 182 CSS Animationsの終了時に処理を行いたい

CSSの `animation` を監視する場合はこちら  
`animationstart`, `animationiteration`, `animationend` を使ってそれぞれのタイミングが取れる

```css
.item182_rect {
  width: 40px;
  height: 40px;
  background: red;
  animation: infinite 1s item182_rotate linear;
}

@keyframes item182_rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

```javascript
const item182_rect = document.querySelector('.item182_rect');
item182_rect.addEventListener('animationstart', (event) => {
  // アニメーションが開始したときのイベント
  console.log('アニメーションが開始しました。');
});
item182_rect.addEventListener('animationiteration', (event) => {
  // アニメーションで繰り返しが発生したときのイベント（繰り返しが未指定の場合は発生しない）
  console.log('アニメーションで繰り返しが発生しました。');
});
item182_rect.addEventListener('animationend', (event) => {
  // アニメーションが完了したときのイベント（繰り返しを指定した場合は発生しない）
  console.log('アニメーションが完了しました。');
});
```

### 183 アニメーションのための「Web Animations API」を使いたい

> Web Animations API だと JavaScript だけで管理でき、終了時の判定をしやすいというメリットがあります。  
> 第一引数には開始値と終了値を含むオブジェクトを、第二引数にはアニメーションの属性を含むオブジェクトを指定します。

※ Edge はサポートしていないので使用するには Polyfill が必要 <https://caniuse.com/#feat=web-animation>  
参考：[Web Animations API を使ってみる - Qiita](https://qiita.com/mizchi/items/4def48e2467ae2b04da3)

```javascript
// 要素を取得
const item183_rect = document.querySelector('.item183_rect');
item183_rect.animate(
  {
    transform: [
      'translate(0px) rotate(0deg)',    // 開始値
      'translate(200px) rotate(360deg)' // 終了値
    ]
  },
  {
    duration: 3000,       // ミリ秒指定
    iterations: Infinity, // 繰り返し回数
    direction: 'normal',  // 繰り返し挙動
    easing: 'ease'        // イージング
  }
);
```

- 184 要素の大きさを変えたい
- 185 要素を移動させたい
- 186 要素の透明度を変化させたい
- 187 要素の明度を変化させたい
- 188 要素の彩度を変化させたい

あたりはCSSのプロパティと上記が分かってれば大丈夫そうなのでスキップ

### 189 `requestAnimationFrame()` を使いたい

> 時間経過で変化し続けるには `requestAnimationFrame()` メソッドを利用します。`requestAnimationFrame()` メソッドは再描画の前に関数の呼び出しを要求する命令です。

> ウェブのアニメーションでは `requestAnimationFrame()` メソッドを使うのが、もっともムダがなくなめらかに見せられます。

> `requestAnimationFrame()` メソッドは一度しか呼び出されません。アニメーションを実装するには連続して呼び出す必要があるので、関数のなかで自身の関数を呼び出すように予約しておきます。

```javascript
tick();
function tick() {
  requestAnimationFrame(tick);
  // アニメーション処理を記述する
}
```

関数を止めたい場合は

-  `requestAnimationFrame()` の呼び出しをしない
- `cancelAnimationFrame()` を使ってキャンセルする

```javascript
tick();
let requestID;
function tick() {
  requestID = requestAnimationFrame(tick);
  // アニメーション処理を記述する
}
cancelAnimationFrame(requestID);
```

### 190 `requestAnimationFrame()` でHTML要素を動かしたい

これは `style` 当てる形の例ですが、`requestAnimationFrame()` は WebGL や Canvas 動かす場面で主に使うそう

CSSの `will-change` プロパティはじめてみましたが、おまじない的な意味合いだそうであまり気にしなくて良いのかなと  
参考：[CSS: will-change指定時の挙動, パフォーマンスへの影響と考察 - Qiita](https://qiita.com/damele0n/items/71352757d0e6fdf5b184)

```html
<div class="item190_stoker">👻</div>
```

```css
.item190_stoker {
  position: fixed;
  top: 0;
  left: 0;
  will-change: transform;
  font-size: 5rem;
}
```

```javascript
// マウスストーカーの要素を取得
const item190_stoker = document.querySelector('.item190_stoker');

// マウス座標
let mouseX = 0;
let mouseY = 0;
// ストーカーの座標
let currentX = 0;
let currentY = 0;
// マウス移動時
document.body.addEventListener('mousemove', (event) => {
  // マウス座標を保存
  mouseX = event.clientX;
  mouseY = event.clientY;
});

item190_tick();
function item190_tick() {
  // アニメーションフレームを指定
  requestAnimationFrame(item190_tick);

  // マウス座標を遅延してストーカーの座標へ反映する
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  // ストーカーの要素へ反映
  item190_stoker.style.transform = `translate(${currentX}px, ${currentY}px)`;
}
```

---

JavaScript 側でアニメーションさせる（CSS的な要素を指定する）のはなんか好かないのですが、やり方やできること知っておこうと思いました。