## Chapter 6 ブラウザーの操作方法

jQuery でばかりやってきたこと中心で、ピュアな JavaScript でも見れば分かるけど自分でも書けなきゃなと思いました。  
後半のほう（全画面表示やオンライン/オフラインの出し分け）はWebアプリ化するときに使えそうなテクニックでした。

### 094 アラートを表示したい

いちおう基本形なので

```javascript
// ボタンの参照
const item94_btn = document.querySelector('.item94_button');

// ボタンをクリックしたとき
item94_btn.addEventListener('click', (event) => {
  // アラートを表示
  alert('こんにちは。\n今日の天気は晴れです。');
});
```

### 097 ウインドウサイズを調べたい

```javascript
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
```

実際は `setTimeOut()` 噛ませて何秒おきとかにしなきゃですね

### 105 ハッシュ（#）の変更を検知したい

`hashchange` というイベントがあるようで、それでハッシュの監視が可能。

```javascript
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
```

### 110 ページにフォーカスされているか調べたい

使うかどうかわからんですが、これ知りませんでした

```javascript
window.addEventListener('focus', () => {
  console.log(`フォーカスがあたっている`);
});

window.addEventListener('blur', () => {
  console.log(`フォーカスがはずれている`);
});
```