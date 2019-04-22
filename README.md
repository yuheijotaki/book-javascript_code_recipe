## Chapter15 ローカルデータの取り扱い

### 244 `localStorage` を使ってローカルデータを使いたい

>  `localStorage` はブラウザー上にデータを保存できる手軽な手段です。`window` オブジェクトに `localStorage` オブジェクトが存在するので、直接 `localStorage` と記述すればどこからでも呼び出せます。`localStorage` に保存されたデータには保存期間の制限はありません。

`setItem()` メソッドを使って保存。第一引数にはキー名を、第二引数には任意のデータを指定。  
`getItem()` メソッドを使って読み出し。第一引数にには `setItem()` で用いたキー名を指定する。

だいたい jQuery Cookie と使い方同じで保存期間を指定しないバージョンて感じですね

```html
<div class="item244_localStorage">
  <input type="text" class="item244_input">
  <button class="item244_btnSave">保存する</button>
  <button class="item244_btnRead">読み出す</button>
</div>
```

```javascript
const item244_section = document.querySelector('.item244_localStorage');
const item244_btnRead = item244_section.querySelector('.item244_btnRead');
const item244_btnSave = item244_section.querySelector('.item244_btnSave');
const item244_input = item244_section.querySelector('.item244_input');

// 「保存する」ボタンをクリックしたとき
item244_btnSave.addEventListener('click', () => {
  // テキスト入力欄の文字列を取得
  const item244_data = item244_input.value;

  // ローカルストレージに保存
  localStorage.setItem('item244_myKey', item244_data);
});

// 「読み出す」ボタンをクリックしたとき
item244_btnRead.addEventListener('click', () => {
  // ローカルストレージから読み出す
  const item244_data = localStorage.getItem('item244_myKey');

  // テキスト入力欄の文字列に代入
  item244_input.value = item244_data;
});
```

コンソールでは `Application > Local Storage` からキーと値を確認。  
なおシークレッドウィンドウでの利用の場合はブラウザによって挙動（保存方法など）が異なる。

`sessionStorage` も `localStorage` と使い方は同じだが、セッションが終わると同時に（ブラウザが閉じられたときに）クリアされる点が異なる。

### 245 Storage APIからデータを消したい

キーを指定して削除する場合は、`removeItem()`、 全削除（クリア）する場合は、`clear()`

```html
<div class="item245_localStorage">
  <input type="text" class="item245_input">
  <button class="item245_btnSave">保存する</button>
  <button class="item245_btnRemove">削除する</button>
  <button class="item245_btnClear">すべてクリアする</button>
</div>
```

```javascript
const item245_section = document.querySelector('.item245_localStorage');
const item245_btnSave = item245_section.querySelector('.item245_btnSave');
const item245_btnRemove = item245_section.querySelector('.item245_btnRemove');
const item245_btnClear = item245_section.querySelector('.item245_btnClear');
const item245_input = item245_section.querySelector('.item245_input');

// 「保存する」ボタンをクリックしたとき
item245_btnSave.addEventListener('click', () => {
  // テキスト入力欄の文字列を取得
  const item245_data = item245_input.value;

  // ローカルストレージに保存
  localStorage.setItem('item245_myKey1', item245_data);
  localStorage.setItem('item245_myKey2', item245_data);
});

// 「削除する」ボタンをクリックしたとき
item245_btnRemove.addEventListener('click', () => {
  // ローカルストレージから削除する
  localStorage.removeItem('item245_myKey1');
});

// 「クリアする」ボタンをクリックしたとき
item245_btnClear.addEventListener('click', () => {
  // クリアする
  localStorage.clear();
});
```

### 246 Cookieを使ってローカルデータを使いたい

### 247 Cookieからデータを読み出したい

`localStorage` はデータに 文字列/数値/真偽値/オブジェクト/配列 などさまざまなデータ型を保持できるが、Cookie は1次元の文字列しか保存ができない。  
ただサーバーサイドとも共有して読み込み/書き換えができるため利用することもあるかもしれない。

Cookie の値では、`=` や `;` などの特殊記号や日本文字は `%82%A0` のような形にエンコードして保存しておき、読み出し時にデコードする必要がある。

#### Cookie の仕様

- Cookie はブラウザーが自動的にウェブサーバーに送る
- Cookie は有効期限の設定が可能
- 消さない限りずっと保持
- ドメイン単位で保持。ただし、同一ドメインでも http / https だと別領域に保存

コードでの扱い方も載ってますが使うときにみれば分かりそうなのでスキップ

