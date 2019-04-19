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

