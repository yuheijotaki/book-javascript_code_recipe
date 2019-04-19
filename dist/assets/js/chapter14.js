/**********
* 229 JSONをパースしたい
**********/
// JSON文字列
const item229_jsonString = `{
  "students": 40,
  "grade": 4,
  "name": "C組"
}`;

// 文字列をJavaScriptのオブジェクトに変換
const item229_data = JSON.parse(item229_jsonString);

console.log(item229_data);          // 結果: {students: 40, grade: 4, name: "C組"}
console.log(item229_data.students); // 結果: 40
console.log(item229_data.grade);    // 結果: 4
console.log(item229_data.name);     // 結果: "C組"

/**********
* 230 オブジェクトをJSONに変換したい
**********/
const item230_data = {
  a: 1000,
  b: 'こんにちは、世界'
};
const item230_str = JSON.stringify(item230_data);

console.log(item230_str); // 結果: {"a":1000,"b":"こんにちは、世界"}

/**********
* 231 JSONの変換時にインデントを付けたい
**********/
const item231_data = {
  a: 1000,
  b: 'こんにちは、世界'
};
const item231_str = JSON.stringify(item231_data, null, '  ');

console.log(item231_str);
/* 結果:
{
  "a": 1000,
  "b": "こんにちは、世界"
}
*/

/**********
* 234 `fetch()`メソッドでJSONを読み込みたい
**********/
// await・async を使って記載した場合
async function load() {
  // ファイルを読み込む
  const item234_data = await fetch('assets/js/sample.json');
  // JSONとして解析
  const item234_obj = await item234_data.json();
  // console.log(item234_obj); // 結果: {name: "別所分校", classes: Array(2)}
  // テキストを出力
  const item234_str = JSON.stringify(item234_obj, null, '  ');
  console.log(item234_str);
/* 結果:
{
  "name": "別所分校",
  "classes": [
    {
      "students": 40,
      "grade": 4,
      "name": "C組"
    },
    {
      "students": 20,
      "grade": 2,
      "name": "B組"
    }
  ]
}
*/
}

load();

/**********
* 237 `fetch()`メソッドでデータを送信したい
**********/
// JSONフォーマットで送る場合（`application/json` 方式）
const item237_obj01 = { hello: 'world' };

const item237_data01 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(item237_obj01)
};

fetch('./new01', item237_data01)
  .then((res) => res.text())
  .then(console.log);

// フォーム方式で送る場合（`multipart/form-data方式`）
const item237_body02 = new FormData();
item237_body02.set('hello', 'world');

const item237_data02 = {
  method: 'POST',
  body: item237_body02
};

fetch('./new02', item237_data02)
  .then((res) => res.text())
  .then(console.log);

/**********
* 238 XMLHttpRequestでテキストを読み込みたい
**********/

/**********
* 239 XMLHttpRequestでデータの読み込み状況を取得したい
**********/

/**********
* 240 XMLHttpRequestで読み込み中の通信をキャンセルしたい
**********/

/**********
* 241 バックグランドでスクリプトを実行させたい
**********/

/**********
* 242 バックグランドでサービスワーカーを実行させたい
**********/

/**********
* 243 プッシュ通知を実行させたい
**********/
