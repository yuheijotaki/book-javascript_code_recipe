## Chapter14 さまざまなデータの送受信方法

### 229 JSONをパースしたい

> 文字列をJSONとして解析し、JavaScriptの値やオブジェクトに変換するには `JSON.parse()` メソッドを使います。

```javascript
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
```

### 230 オブジェクトをJSONに変換したい

> `JSON.stringify()` メソッドを使うと、JavaScriptのオブジェクトをJSON文字列に変換できます。

```javascript
const item230_data = {
  a: 1000,
  b: 'こんにちは、世界'
};
const item230_str = JSON.stringify(item230_data);

console.log(item230_str); // 結果: {"a":1000,"b":"こんにちは、世界"}
```

### 231 JSONの変換時にインデントを付けたい

> `JSON.stringify()` メソッドの第三引数はJSON文字列に改行とインデントを挿入するために使います。インデントとして利用したい文字列を指定します。数値を指定した場合はスペースの数になります。

数値を指定した場合はスペースの数とか、隠し機能っぽいですね

```javascript
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
```

### 234 `fetch()`メソッドでJSONを読み込みたい

ローカルサーバーなりでやる

> `await`・`async` は `Promise` による非同期処理を同期処理のようにわかりやすく書けることが利点です。

```javascript
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
```

ここではJSONのみにしましたが、

- テキスト
- XML
- バイナリ（画像や3Dデータ）

も `fetch()` で扱える。

### 237 `fetch()`メソッドでデータを送信したい

> ウェブサーバーのプログラムにデータを渡したいときにも `fetch()` メソッドを利用できます。データ送信方法として、`GET` 方式と `POST` 方式の2種類があります。

| 方式        | 概要                              | 特徴                                                         |
| ----------- | --------------------------------- | ------------------------------------------------------------ |
| `GET` 方式  | URLにパラメータを付与する方式     | URLでウェブページの結果が一意に決まるような場面で最適  <br />SEOと相性が良い |
| `POST` 方式 | URLにフォームの送信情報が載らない | HTTPSプロトコルで通信している限りは `POST` の中身は第三者が見れない |

> `POST` で送信する場合はメソッドとヘッダー、ボディー情報を指定します。

#### JSONフォーマットで送る場合（`application/json` 方式）

JSONフォーマットでサーバーにデータを送る方法です。`fetch()` メソッドの第二引数にオプションを指定します。

```javascript
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
```

```php
<?php
$json_string = file_get_contents('php://input'); ## 今回のキモ

// PHPで文字列をJSOnデータとして展開する
$obj = json_decode($json_string);

echo $obj->{"hello"};
```

#### フォーム方式で送る場合（`multipart/form-data` 方式）

> この方法はPHP側で値を受け取りやすいといったメリットがあります。

主に画像やテンプレファイルなどをサーバーにアップロードするときに `multipart/form-data` 方式が使われることが多い。

```javascript
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
```

```php
<?php
echo $_POST["hello"];
```

### 238 XMLHttpRequestでテキストを読み込みたい

### 239 XMLHttpRequestでデータの読み込み状況を取得したい

> `fetch()` メソッドよりも昔から存在する機能で `XMLHttpRequest` というJavaScriptの機能があります。`XMLHttpRequest` は `fetch()` メソッドよりも冗長な制御をしなければなりませんんが、低レベルの制御ができたり、古いブラウザーでも利用できたりするといった利点があります。

```javascript
// XHR を作成
const item238_req = new XMLHttpRequest();
// 読み込み完了時のイベント
item238_req.addEventListener('load', (event) => {
  // レスポンスを受け取る
  const item238_text = event.target.responseText;

  // テキストを出力
  console.log(item238_text);
});

// ファイルを指定
item238_req.open('GET', './assets/js/sample.txt');
// 読み込み開始
item238_req.send();
```

`progress` イベントのイベントハンドラーで`total` プロパティー（総容量）、`loaded` プロパティー（現在の読み込み量）を取得すると何％のデータが読み込まれたかを取得できる。

```javascript
item238_req.addEventListener('progress', (event) => {
  // 読み込みの割合を算出
  const item238_rate = event.loaded / event.total;
  console.log(`${item238_rate * 100}%`);
});
```

### 241 バックグランドでスクリプトを実行させたい

> JavaScript はメインスレッドで動作しますが、負荷の高い処理を実行すると、その最中は操作不可能となります。JavaScript の処理がUIを担当するメインスレッドを止めてしまうためです。解決する手段のひとつに Web Worker という仕様があります。Web Worker はメインスレッドの JavaScript と分離して処理が実行されます。

注意点として、Web Worker はDOM操作ができない。

```html
<div class="item241_wrap">
  <input type="number" value="1" id="item241_numA"> +
  <input type="number" value="2" id="item241_numB"> =
  <span class="item241_result"></span>
</div>
<button class="item241_btn">計算する</button>
```

メインスレッドのJS

```javascript
// 参照を取得
const item241_numA = document.querySelector('#item241_numA');
const item241_numB = document.querySelector('#item241_numB');
const item241_result = document.querySelector('.item241_result');
const item241_btn = document.querySelector('.item241_btn');

// ワーカーを作成
const worker = new Worker('./assets/js/worker.js');

// ボタンをクリックしたとき
item241_btn.addEventListener('click', () => {
  worker.postMessage([Number(item241_numA.value), Number(item241_numB.value)]);
  console.log('[メインスクリプト] ワーカーへメッセージを送信');
});

// ワーカーから受信したとき
worker.onmessage = function (e) {
  // 結果を画面に反映
  item241_result.textContent = e.data;
  console.log('[メインスクリプト] ワーカーからメッセージを受信');
};
```

worker.js

```javascript
onmessage = (e) => {
  console.log('[ワーカー] メインスクリプトからメッセージを受信');

  // 足し算を実行
  const item241_result = e.data[0] + e.data[1];

  console.log('[ワーカー] メインスクリプトにメッセージを送信');
  postMessage(item241_result);
}
```

### 242 バックグランドでサービスワーカーを実行させたい

> サービスワーカーは開いているWeb Pageの裏側で常に起動するスクリプトです。Web Worker はページが開いているときのみ実行されるのに対して、サービスワーカーはブラウザーを閉じていても実行できるという利点があります。

※ Safari12 はブラウザ終了には Service Worker は動作しない。

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./assets/js/sw.js')
    .then((registration) => {
      // 登録成功
      console.log('ServiceWorkerの登録に成功', registration.scope);
    })
    .catch((error) => {
      // 登録失敗
      console.log('ServiceWorkerの登録に失敗', error);
    });
}
```

sw.js

```javascript
self.addEventListener('fetch', (event) => {
  console.log('通信が発生', event.request);
});
```

> キャッシュ機能を利用するには Google が提供するライブラリ Workbox を利用するのがいいでしょう。

[Workbox  |  Google Developers](https://developers.google.com/web/tools/workbox/)