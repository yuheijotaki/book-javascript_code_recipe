/**********
* 244 `localStorage` を使ってローカルデータを使いたい
**********/
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

/**********
* 245 Storage APIからデータを消したい
**********/
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
