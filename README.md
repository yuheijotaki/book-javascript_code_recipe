# 【学習メモ】JavaScriptコードレシピ集

JavaScriptコードレシピ集 の学習メモ 続きです。

## Chapter 2 真偽値や数値や文字の取り扱い

### 022 四捨五入、切り捨て、切り上げをしたい

いろいろ処理あるけど、`round()` `floor()` `ceil()` `trunc()` の4つの使い方があると頭の片隅に入っていればよいような気がする

```javascript
console.log(Math.round(6.24)); // 結果: 6 <- 四捨五入する
console.log(Math.floor(6.24)); // 結果: 6 <- 切り捨てる（数値以下の最大の整数を返す）
console.log(Math.ceil(6.24));  // 結果: 7 <- 切り上げる（数値以上の最小の整数を返す）
console.log(Math.trunc(6.24)); // 結果: 6 <- 数値の整数部分を返す

console.log(Math.round(7.8));  // 結果: 8 <- 四捨五入する
console.log(Math.floor(7.8));  // 結果: 7 <- 切り捨てる（数値以下の最大の整数を返す）
console.log(Math.ceil(7.8));   // 結果: 8 <- 切り上げる（数値以上の最小の整数を返す）
console.log(Math.trunc(7.8));  // 結果: 7 <- 数値の整数部分を返す
```

### 023 ランダムな数を使いたい

ボタンをクリックする度に、ランダムにグラデーション色を変えるサンプル

```html
<button class="item23_button">カラー変更</button>
<div class="item23_rectangle"></div>

<style>
  .item23_rectangle {
    width: 420px;
    height: 200px;
    --start: hsl(0, 100%, 50%);
    --end: hsl(322, 100%, 50%);
    background-image: linear-gradient(-135deg, var(--start), var(--end));
  }
</style>
```

```javascript
/** 長方形 */
const rectangle = document.querySelector('.item23_rectangle');

// ボタンをクリックしたら onClickButton を実行する
document.querySelector('.item23_button').addEventListener('click', onClickButton);

/** ボタンをクリックする度に、長方形のグラデーション色を変える */
function onClickButton() {
  // 0〜359 の間のランダムな数を取得する
  const randomHue = Math.trunc(Math.random() * 360);
  // グラデーションの開始色と終了色を決定
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

  // 長方形のグラデーションのための変数（--start と --end）を変更
  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}
```

これだけで、けっこういろいろできそうなイメージ湧きますね。  
関係ないですが、CSS変数というの見たことある気もしますがはじめて使いました。。こういう JavaScript の処理によって値を入れ替える系だと使えそうですね。

### 027 文字列の長さを取得したい

```javascript
console.log('abc'.length);  // 結果: 3
console.log('あいう'.length); // 結果: 3
console.log('🐮'.length);   // 結果: 2
```

最後の 🐮 は、サロゲートペア（4バイトとして表現される特殊な文字や絵文字）  
1文字としてカウントするには、

```javas
console.log(Array.from('🐮').length); // 結果: 1
```

のように `Array.from()` を使う。

### 029 文字列を検索したい①（インデックスを調べる）

```javascript
const item29_myString = 'JavaScriptを覚えよう';

// 含まれる場合
const item29_a1 = item29_myString.indexOf('JavaScript');
console.log(item29_a1); // 結果: 0

const item29_a2 = item29_myString.indexOf('覚えよう');
console.log(item29_a2); // 結果: 11

const item29_a3 = item29_myString.lastIndexOf('a');
console.log(item29_a3); // 結果: 3

// 含まれない場合
const item29_b1 = item29_myString.indexOf('HTML');
console.log(item29_b1); // 結果: -1

const item29_b2 = item29_myString.indexOf('j');
console.log(item29_b2); // 結果: -1（大文字・小文字区別のため）

// 検索開始インデックスを指定すると、そのインデックスから文字列を検索します。（省略した場合は0が検索開始インデックスになる）
const item29_c1 = item29_myString.indexOf('JavaScript',4);
console.log(item29_c1); // 結果: -1

const item29_c2 = item29_myString.indexOf('覚えよう', 10);
console.log(item29_c2); // 結果: 11
```

### 030 文字列を検索したい②（含まれているかを調べる）

これ定数宣言している意味ない気がするので誤植かもしれないと思いました

```javascript
const item30_myString = 'JavaScriptを覚えよう';

// 文字列が含まれているかどうか
const item30_a1 = 'JavaScriptを覚えよう'.includes('JavaScript');
console.log(item30_a1); // 結果: ture

// 文字列で始まるかどうか
const item30_a2 = 'JavaScriptを覚えよう'.startsWith('覚えよう');
console.log(item30_a2); // 結果: false

// 文字列で終わるかどうか
const item30_a3 = 'JavaScriptを覚えよう'.endsWith('覚えよう');
console.log(item30_a3); // 結果: true
```

### 031 文字列を取り出したい

```javascript
// 指定した場所の文字列を取り出すとき
console.log('JavaScript'.charAt(3)); // 結果: a
console.log('JavaScript'.charAt());  // 結果: J（引数省略時は0のインデックス）
```

### 032 ○文字目～○文字目までの文字列を取り出したい

```javascript
console.log('JavaScript'.slice(0, 4));     // 結果: Java
console.log('JavaScript'.slice(0));        // 結果: JavaScript（引数省略時は全文字を返す）
console.log('JavaScript'.substring(0, 4)); // 結果: Java
console.log('JavaScript'.substring(0));    // 結果: JavaScript（引数省略時は全文字を返す）
```

> `slice()` メソッドのインデックスには負の値も指定可能で、末尾から文字列を取り出したいときに役立ちます。インデックスが負の場合、「文字列の長さ-1」が開始インデックスとなります。

> 対して、`substring()` のインデックスに負の値を指定するとその値は0とみなされます。よって、末尾から文字列を取り出したいときは `substring()` は使えません。

```javascript
// 引数にのインデックスを負の値を指定したとき
console.log('JavaScript'.slice(3, -4));      // 結果: aSc
console.log('JavaScript'.slice(-4, -1));     // 結果: rip
console.log('JavaScript'.substring(3, -3));  // 結果: Jav `substring(3, 0)`と同じ
console.log('JavaScript'.substring(-4, -1)); // 結果: 空   `substring(0, 0)`と同じ
```

### 033 ○文字目から○文字だけ取り出したい

```javascript
// 4を開始インデックスとして、そこから6文字だけ取り出す
console.log('JavaScript'.substr(4, 6)); // 結果: Script
```

### 034 文字列を別の文字に置き換えたい

```javascript
// image1.png を image.png に置き換え
const imageName = 'image1.png';
console.log(imageName.replace('1.png', '2.png')); // 結果: image2.png

// 文字列内の改行コードを削除
const inputText = '鈴木\n一郎';
console.log(inputText.replace('\n', '')); // 結果: 鈴木一郎
```

文字列削除で `.replace('hogehoge', '')` ってあまりしっくりきてなかったのですが、やっぱりやり方的にこれで良いっぽいですね。

電話番号からハイフンを除く場合など削除対象が複数の場合は正規表現を使う

```javascript
let phoneNumber = '090-1234-5678';
console.log(phoneNumber.replace('-', '')); // 結果: 0901234-5678（すべてのハイフンは取り除けない）
// 正規表現を用い、gオプション（文字列全体のマッチ）を指定することで、複数文字の置き換えが可能になります。
console.log(phoneNumber.replace(/-/g, '')); // 結果: 09012345678
```

正規表現の場合は `''` はいらないのですね

### 035 文字列を分割したい

```javascript
const myUrl = 'http://example.com/?id=12345&name=Suzuki&age=28';
console.log(myUrl.split('&'));    // 結果: ["http://example.com/?id=12345", "name=Suzuki", "age=28"]
console.log(myUrl.split(/&|\?/)); // 結果: ["http://example.com/", "id=12345", "name=Suzuki", "age=28"]

// 引数が空指定の場合、1文字ずつ格納された配列になる
console.log('JavaScript'.split('')); // 結果: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// 引数を省略した場合、配列の1要素に全文字が含まれる
console.log('JavaScript'.split());   // 結果: ["JavaScript"]
```

### 039 正規表現を使いたい

```javascript
// 正規表現を使った場合
if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
  console.log('アクセスしているブラウザーはiOS端末です');
} else {
  console.log('アクセスしているブラウザーはiOS端末ではありません');
}

// 正規表現を使わなかった場合
if (
  navigator.userAgent.includes('iPhone') ||
  navigator.userAgent.includes('iPod') ||
  navigator.userAgent.includes('iPad')
) {
  console.log('アクセスしているブラウザーはiOS端末です');
} else {
  console.log('アクセスしているブラウザーはiOS端末ではありません');
}
```

### 040 特定の文字が含まれているか、正規表現で調べたい

> ある文字列が、パターンにマッチするかどうかを調べるには、正規表現の `test()` メソッドを次のように使います。

```javascript
// 「J」が「JavaScript」に含まれているかどうか。
console.log(/J/.test('JavaScript')); // 結果: true
// 「iPhone」が「iP」で始まっているかどうか。
console.log(/^iP/.test('iPhone')); // 結果: true
// 「鈴木」に数字が含まれているかどうか。
console.log(/\d/.test('鈴木')); // 結果: false
// 「Jav」の後に「a」が0回以上続くかどうか。
console.log(/Java.*/.test('JavaScript')); // 結果: true
// 「鈴郎」または「鈴」と「郎」の愛大に文字が含まれるかどうか。
console.log(/鈴.*郎/.test('鈴木一郎')); // 結果: true
// 「数字-数字-数字」という形かどうか。
console.log(/\d+-\d+-\d+/.test('090-1234-5678')); // 結果: true
```

---

下記は難しい（しばらく使わなそう）のでスキップ。

- 024 数学的な計算を行いたい
- 025 三角関数を使いたい

ほか、文字の結合、テンプレート文字列、エンコード/デコードもできることが分かる感じでした。

読んでいて、各項目で「利用シーン」というどういうシーンを想定して利用するか、というものがあるのですが、それ頭に入れながら読まないと、あまり実践での使い方がイメージできずなんとなく読んでしまうなと思いました。