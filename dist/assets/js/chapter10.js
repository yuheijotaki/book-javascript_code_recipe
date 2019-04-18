/**********
* 181 CSS Transitionsの終了時に処理を行いたい
**********/
const item181_rect = document.querySelector('.item181_rect');
item181_rect.addEventListener('transitionend', (event) => {
  // アニメーション完了時のコード
  console.log('アニメーションが完了しました');
});

/**********
* 182 CSS Animationsの終了時に処理を行いたい
**********/
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

/**********
* 183 アニメーションのための「Web Animations API」を使いたい
**********/
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

/**********
* 189 `requestAnimationFrame()` を使いたい
**********/
item189_tick();
function item189_tick() {
  requestAnimationFrame(item189_tick);
  // アニメーション処理を記述する
}

/**********
* 190 `requestAnimationFrame()` でHTML要素を動かしたい
**********/
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
