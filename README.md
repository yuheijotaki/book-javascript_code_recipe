## Chapter9 フォーム要素の操作方法

### 161 テキストボックスの情報を取得したい

### 162 テキストボックスの変更を検知したい

| イベント名 | 意味                            |
| ---------- | ------------------------------- |
| `change`   | input要素の変更時のイベント     |
| `input`    | input要素のキー入力時のイベント |

`input` イベントはキー入力と同時にイベントが発生   
`change` イベントは `Enter` キーを押したときやフォーカスが外れたときにイベントが発生する

```javascript
// input要素の参照
const chapter09_text = document.querySelector('#chapter09_text');
// イベントを登録
chapter09_text.addEventListener('input', chapter09_text_handleChange);
function chapter09_text_handleChange(event) {
  // 値を取得する
  const chapter09_text_value = event.target.value;
  console.log(chapter09_text_value);
}
```

### 163 テキストエリアの情報を取得したい

### 164 テキストエリアの変更を検知したい

こちらも`input`イベントと`chage`イベントがある  
 `change` イベントは少し遅延してイベントが発生する

```javascript
// textarea要素の参照
const chapter09_textarea = document.querySelector('#chapter09_textarea');
// イベントを登録
chapter09_textarea.addEventListener('input', chapter09_textarea_handleChange);
function chapter09_textarea_handleChange(event) {
  // 値を取得する
  const chapter09_textarea_value = event.target.value;

  // 改行コードを改行タグに変換
  const chapter09_textarea_htmlStr = chapter09_textarea_value.split('\n').join('<br />');
  console.log(chapter09_textarea_htmlStr);
}
```

### 165 チェックボックスの情報を取得したい

```javascript
const chapter09_cbA = document.querySelector('#chapter09_cbA');
const chapter09_checkA = chapter09_cbA.checked; // 選択状態を確認
console.log(chapter09_checkA); // 結果: false

const chapter09_cbB = document.querySelector('#chapter09_cbB');
const chapter09_checkB = chapter09_cbB.checked; // 選択状態を確認
console.log(chapter09_checkB); // 結果: true

const chapter09_cbC = document.querySelector('#chapter09_cbC');
const chapter09_checkC = chapter09_cbC.checked; // 選択状態を確認
console.log(chapter09_checkC); // 結果: false

// チェックボックスの状態を変更する
chapter09_cbC.checked = true;
```

### 166 チェックボックスの変更を検知したい

```javascript
chapter09_cbA.addEventListener('change', (event) => {
  // 選択状態を確認する
  const chapter09_cbA_value = event.target.checked;

  const chapter09_cbA_log = `チェックボックスAは ${chapter09_cbA_value} になりました`;
  console.log(chapter09_cbA_log); // 結果: // チェックボックスAは true/false になりました
});
```

### 170 ラジオボタンの情報を取得したい

```html
<form id="chapter09_radioGroup">
  <p>
    <!-- 1つ目のラジオボタン群 -->
    <label><input type="radio" name="fruit" value="apple" checked>apple</label>
    <label><input type="radio" name="fruit" value="orange">orange</label>
    <label><input type="radio" name="fruit" value="grape">grape</label>
  </p>
  <p>
    <!-- 2つ目のラジオボタン群 -->
    <label><input type="radio" name="drink" value="coke" checked>coke</label>
    <label><input type="radio" name="drink" value="wine">wine</label>
    <label><input type="radio" name="drink" value="tea">tea</label>
  </p>
</form>
```

選択状態取得するとき `value` はそこにくるのか。。少し気味悪い

```javascript
// form要素の参照
const chapter09_radioGroup = document.querySelector('form#chapter09_radioGroup');

// 現在の選択状態を取得
const chapter09_fruitValue = chapter09_radioGroup.fruit.value;
const chapter09_drinkValue = chapter09_radioGroup.drink.value;

console.log(`fruitの値は ${chapter09_fruitValue} です`); // 結果: fruitの値は apple です
console.log(`drinkの値は ${chapter09_drinkValue} です`); // 結果: drinkの値は coke です
```

### 171 ラジオボタンの変更を検知したい

```javascript
chapter09_radioGroup.addEventListener('change', chapter09_radioGroup_handleChange);
function chapter09_radioGroup_handleChange(event) {
  // 現在の選択状態を取得
  const chapter09_fruitValue = chapter09_radioGroup.fruit.value;
  const chapter09_drinkValue = chapter09_radioGroup.drink.value;
  console.log(`fruitの値は ${chapter09_fruitValue} です`); // 結果: fruitの値は apple です
  console.log(`drinkの値は ${chapter09_drinkValue} です`); // 結果: drinkの値は coke です
}
```

### 172 ドロップダウンメニューの情報を取得したい

### 173 ドロップダウンメニューの変更を検知したい

ドロップダウンメニュー = `<select>` 要素ですね  
やり方はもう他のパーツと一緒ですね

```javascript
// select要素の参照
const chapter09_select = document.querySelector('#chapter09_select');
chapter09_select.addEventListener('change', chapter09_select_handleChange);
function chapter09_select_handleChange(event) {
  // 現在の選択状態を取得
  const chapter09_selectValue = chapter09_select.value;
  console.log(`選択されているのは ${chapter09_selectValue} です`); // 結果: fruitの値は apple です
}
```

---

ファイル操作系

- 167 ローカルファイルの情報を取得したい
- 168 ローカルファイルのファイルをテキストとして読み込みたい
- 169 ローカルファイルのファイルをDataURLデータとして読み込みたい

と特殊UI系

- 174 スライダーの情報を取得したい
- 175 スライダーの変更を検知したい
- 176 カラーピッカーの情報を取得したい
- 177 カラーピッカーの変更を検知したい

はスキップ