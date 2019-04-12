/**********
* 094 アラートを表示したい
**********/
// ボタンの参照
const item94_btn = document.querySelector('.item94_button');

// ボタンをクリックしたとき
item94_btn.addEventListener('click', (event) => {
  // アラートを表示
  alert('こんにちは。\n今日の天気は晴れです。');
});

/**********
* 097 ウインドウサイズを調べたい
**********/
window.addEventListener('resize', resizeHandler);
resizeHandler(event);

function resizeHandler(event) {
  // 画面幅
  const w = innerWidth;
  // 画面高さ
  const h = innerHeight;

  console.log(`横幅は${w}pxです`);
  console.log(`高さは${h}pxです`);
}

/**********
* 105 ハッシュ（#）の変更を検知したい
**********/
// ハッシュの変更のイベントを監視
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
  // 変更後のハッシュの値
  const hash = location.hash;
  if (hash) {
    console.log(`現在のアンカーは「${hash}」です`);
  } else {
    console.log(`アンカーはありません`);
  }
}

/**********
* 110 ページにフォーカスされているか調べたい
**********/
window.addEventListener('focus', () => {
  console.log(`フォーカスがあたっている`);
});

window.addEventListener('blur', () => {
  console.log(`フォーカスがはずれている`);
});

/**********
* 111 全画面表示にしたい
**********/

/**********
* 112 オンライン、オフラインに応じて処理を分けたい
**********/
