## Chapter11 画像・音声・動画の取り扱い

### 191 画像をスクリプトで読み込みたい

> HTMLの`src`属性にははじめは値を設定しないでおきます。空文字であってもネットワーク通信が発生するためです。

↑ しらんかった

```html
<img id="item191_myImageA">
```

```javascript
const item191_myImageA = document.querySelector('#item191_myImageA');
item191_myImageA.src = 'assets/img/photo_a.png';
```

### 192 画像の読み込み完了時に処理を行いたい

```javascript
const item192_myImage = document.querySelector('#item192_myImage');
item192_myImage.onload = () => {
  // 画像の読み込み完了後の処理
  setTimeout(() => {
    item192_myImage.classList.remove('loading');
  },1000);
}
item192_myImage.src = 'assets/img/photo_a.png';
item192_myImage.classList.add('loading');
```

### 193 ウェブページ内の画像を遅延読み込みさせる

```html
<img class="item193_img" data-src="assets/img/photo_a.png" width="144" height="144">
<img class="item193_img" data-src="assets/img/photo_b.png" width="144" height="144">
<img class="item193_img" data-src="assets/img/photo_c.png" width="144" height="144">
<button class="item193_btn">読み込む</button>
```

```javascript
// 保存用に Map を用意
const item193_srcMap = new Map();
window.addEventListener('DOMContentLoaded', () => {
  // img要素を一括で取得
  const item1193_imgs = document.querySelectorAll('.item193_img');
  item1193_imgs.forEach((img) => {
    // 各img 要素の data-src属性を Mapに保存
    item193_srcMap.set(img, img.dataset.src);
    // 遅延読み込みのため空にしておく
    img.removeAttribute('src');
  });
});
 
const item193_btn = document.querySelector('.item193_btn');
item193_btn.addEventListener('click', () => {
  // img要素を一括で参照
  const item1193_imgs = document.querySelectorAll('.item193_img');
  item1193_imgs.forEach((img) => {
    // 保存していたMapからsrcを割り当てる
    const source = item193_srcMap.get(img);
    img.src = source;
  });
});
```

---

以降の Base64画像/音声/動画/カメラ も読みましたが実際にコード書くときでいいかなという感じでした。  
動画は最近 PCのChrome では自動再生ができなくなったり、ときどきで仕様変わるのでそのあたりはむずかしいですね