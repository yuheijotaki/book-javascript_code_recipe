/**********
* 114 ユーザーの操作が起こったときに処理を行いたい
**********/
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

// イベントの情報を取得する
button.addEventListener('click', (event) => {
  // クリックされたボタン要素が出力される
  console.log(event.target);
});

/**********
* 115 イベントリスナーを一度だけ呼び出したい
**********/
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

/**********
* 117 ページが表示されたときに処理をしたい
**********/
// DOMにアクセスするタイミングで処理を実行する
window.addEventListener('DOMContentLoaded', () => {
  // .box の要素数を取得する
  const boxNum = document.querySelectorAll('.box').length;
  // ログを出力
  console.log(`.box要素の数は${boxNum}です`);
});

/**********
* 118 クリック時に処理をしたい
**********/
document.querySelector('.button').addEventListener('click', () => {
  alert('ボタンがクリックされました');
});

/**********
* 120 マウスオーバー時に処理をしたい
* 121 マウスオーバー時に処理をしたい（バブリングあり）
**********/
document.querySelector('.item120_box').addEventListener('mouseover', () => {
  console.log('.item120_box 要素にマウスが乗った');
});

document.querySelector('.item120_inner').addEventListener('mouseover', () => {
  console.log('.item120_inner 要素にマウスが乗った');
});

/**********
* 122 マウス操作時の座標を取得したい
**********/
window.addEventListener('mousemove', (event) => {
  // console.log(event.clientX, event.clientY);
});

/**********
* 123 スクロール時に処理をしたい
**********/
window.addEventListener('scroll', (event) => {
  // console.log(window.scrollX, window.scrollY);
});

/**********
* 124 テキスト選択時に処理をしたい
**********/
document.querySelector('.item124_paragraph').addEventListener('selectstart', () => {
  console.log('テキストが選択された');
});

/**********
* 126 タッチ操作時のイベントの発生情報を取得したい
**********/
const item126_box = document.querySelector('.item126_box');
item126_box.addEventListener('touchstart', (event) => {
  // タッチ情報のリスト
  console.log(event.changeTouches);
});

/**********
* 129 タブがバックグラウンドになったときに処理をしたい
**********/
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('コンテンツが表示されました');
    return;
  }

  if (document.visibilityState === 'hidden') {
    console.log('コンテンツがバックグラウンドになりました');
  }
});

/**********
* 130 画面サイズが変更になったときに処理をしたい
**********/
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

/**********
* 131 画面サイズがブレークポイントを超えたときに処理をしたい
**********/
const mediaQueryList01 = matchMedia('(min-width: 500px');
console.log(mediaQueryList01);
/* 結果:
matches: true
media: "(min-width: 500px)"
onchange: null
*/

// ウィンドウサイズが300px以下ならばtrue
const mediaQueryMacth01 = matchMedia('(max-width: 500px').matches;
console.log(mediaQueryMacth01);

// ウィンドウサイズが100px以上700px以下ならばtrue
const mediaQueryMacth02 = matchMedia('(min-width: 100px) and (max-width: 700px').matches;
console.log(mediaQueryMacth02);

// (orientation: portrait)は横持ちを示す
const mediaQueryList02 = matchMedia('(orientation: portrait');

mediaQueryList02.addListener(() => {
  console.log('デバイスの向きが変更された');
});

/*
* クラス着脱の例
*/
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

/**********
* 132 イベントを発火させたい
**********/
const item132_boxElement = document.querySelector('#item132_myBox');

item132_boxElement.addEventListener('click', () => {
  item132_boxElement.innerHTML = 'クリックされました';
});

setTimeout(() => {
  item132_boxElement.dispatchEvent(new Event('click'));
}, 1000);

/**********
* 133 デフォルトのイベントをキャンセルしたい
**********/
// マウスホイールを無効化する
document.querySelector('.item133_foo').addEventListener('wheel', (event) => {
  event.preventDefault();
});

// タッチ開始処理を無効化
document.documentElement.addEventListener('touchstart', (event) => {
  event.preventDefault();
});
