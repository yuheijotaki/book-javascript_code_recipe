## Chapter8 HTML要素の操作方法

DOM操作まわりの章です。  
共通で使うHTMLは下記にしました。

```html
<ul class="chapter08_list">
  <li id="chapter08_item01" class="chapter08_item">item01</li>
  <li id="chapter08_item02" class="chapter08_item">item02</li>
  <li id="chapter08_item03" class="chapter08_item">item03</li>
  <li id="chapter08_item04" class="chapter08_item">item04</li>
  <li id="chapter08_item05" class="chapter08_item">item05</li>
</ul>
```

### 136 セレクター名に一致する要素をひとつ取得したい

> `document.querySelector()` メソッドは、セレクターに合致するHTML要素をひとつ取得するメソッドです。

セレクターに合致する、なのでCSSにおける `#ID名`, `.クラス名`, `:nth-child(番号)` などのこと。  
複数合致する場合は最初の要素を返す。

```javascript
const item136_item01 = document.querySelector('.chapter08_item');
console.log(item136_item01); // 結果: <li class="chapter08_item">item01</li>

const item136_item02 = document.querySelector('.chapter08_item:nth-child(2)');
console.log(item136_item02); // 結果: <li class="chapter08_item">item02</li>
```

### 137 ID名に一致する要素を取得したい

> `document.getElementById()` メソッドは、ID名を指定してHTML要素をひとつ取得するメソッドです。

引数にセレクターではなくID名のみを指定する。

```javascript
const item137_item01 = document.getElementById('chapter08_item01');
console.log(item137_item01); // 結果: <li id="chapter08_item01" class="chapter08_item">item01</li>
```

### 138 セレクター名に該当する要素をまとめて取得したい

> `document.querySelectorAll()` メソッドは、セレクターに合致するHTML要素をすべて取得するメソッドです。

帰ってくるのは、複数の要素をひとまとめにしたオブジェクト（NodeListオブジェクト）。ひとつひとつを処理するには、`forEach` もしくは `for` 文を用いる。

```javascript
const item138_nodeList = document.querySelectorAll('.chapter08_item');
console.log(item138_nodeList);
/* 結果: NodeList(5) [li#chapter08_item01.chapter08_item, li#chapter08_item02.chapter08_item, li#chapter08_item03.chapter08_item, li#chapter08_item04.chapter08_item, li#chapter08_item05.chapter08_item] */

// forEach を使う場合
item138_nodeList.forEach((targetList) => {
  console.log(targetList.innerHTML); // 結果: item01, item02, item03, item04, item05
});
```

### 139 クラス名に一致する要素をすべて取得したい

> `document.getElementsByClassName()` メソッドは、クラス名を指定して合致するHTML要素をすべて取得するメソッドです。

引数にはセレクターではなくクラス名のみを指定する。  
各要素を処理するには `for` 文を使う。

```javascript
const item139_item01 = document.getElementsByClassName('chapter08_item');
console.log(item139_item01);
/* 結果: HTMLCollection(5) [li#chapter08_item01.chapter08_item, li#chapter08_item02.chapter08_item, li#chapter08_item03.chapter08_item, li#chapter08_item04.chapter08_item, li#chapter08_item05.chapter08_item, chapter08_item01: li#chapter08_item01.chapter08_item, chapter08_item02: li#chapter08_item02.chapter08_item, chapter08_item03: li#chapter08_item03.chapter08_item, chapter08_item04: li#chapter08_item04.chapter08_item, chapter08_item05: li#chapter08_item05.chapter08_item] */

// 各要素を処理する場合にはfor文を使う
const item139_itemList = document.getElementsByClassName('chapter08_item');
const item139_itemLength = item139_itemList.length;

for (let item139_index = 0; item139_index < item139_itemLength; item139_index++) {
  console.log(item139_itemList[item139_index]); // 結果: <li id="chapter08_item01" class="chapter08_item">item01</li> ...
}
```

jQuery だと `$('.hoge')` と `each()` 使ってできちゃうのでちょっとややこしいですが、4つの違いおぼえなきゃですね

### 140 `<html>` 要素や `<body>` 要素を取得したい

| プロパティー               | 意味        | 型          |
| -------------------------- | ----------- | ----------- |
| `document.documentElement` | ルート要素  | `html` 要素 |
| `document.head`            | `head` 要素 | `head` 要素 |
| `document.body`            | `body` 要素 | `body` 要素 |

```javascript
document.body.classList.toggle('theme-dark');
```

みたいに書く

### 141 子要素・前後要素・親要素を取得したい

jQuery でいうところの `parent()`,  `child()`,  `prev()`,  `next()` あたりの処理

| プロパティー                      | 意味             | 型                       |
| --------------------------------- | ---------------- | ------------------------ |
| `親ノード.children`               | 子ノード         | 要素郡（HTMLCollection） |
| `親ノード.firstElementChild`      | 最初の子ノード   | 要素（Element）          |
| `親ノード.lastElementChild`       | 最後の子ノード   | 要素（Element）          |
| `親ノード.nextElementSibling`     | 次（弟）のノード | 要素（Element）          |
| `親ノード.previousElementSibling` | 前（兄）のノード | 要素（Element）          |
| `親ノード.parentNode`             | 親のノード       | ノード（Node）           |

```javascript
const item141_parentElement = document.querySelector('.chapter08_list');
console.log(item141_parentElement.children);
/* 結果: HTMLCollection(5) [li#chapter08_item01.chapter08_item,... */

const item141_firstElementChild = item141_parentElement.firstElementChild;
console.log(item141_firstElementChild); // #chapter08_item01
console.log(item141_firstElementChild.nextElementSibling); // #chapter08_item02
console.log(item141_firstElementChild.parentNode); // .chapter08_list
```

### 142 親要素の末尾に要素を追加したい

### 143 指定要素の直前に要素を追加したい

### 144 要素の前後に別の要素を追加したい

| メソッド                                       | 意味                                     | 戻り値          |
| ---------------------------------------------- | ---------------------------------------- | --------------- |
| `親ノード.appendChild(子ノード)`               | 親ノード内の末尾に子ノードを追加する     | 要素（Element） |
| `親ノード.insertBefore(子ノード,直前のノード)` | 親ノード内にノードを追加する             | 要素（Element） |
| `ノード1.before(ノード2)`                      | ノード1の前にノード2を追加する           | なし            |
| `ノード1.after(ノード2)`                       | ノード1の後にノード2を追加する           | なし            |
| `親ノード.hasChild(子ノード)`                  | 親ノードに子ノードが存在するかを確認する | 真偽値          |

### 145 HTMLコードを要素として挿入したい

> `insertAdjacentHTML()` メソッドは、第一引数の位置に第二引数の文字列をHTML（またはXML）として挿入するメソッドです。

使い方

```javascript
const item145_container = document.querySelector('.chapter08_list');
// 挿入する .new-element 要素
const item145_newElement = `<div class="new-element">.new-element要素</div>`;

setTimeout(() => {
  // .chapter08_list 要素内先頭に .new-element を挿入する
  item145_container.insertAdjacentHTML('afterbegin', item145_newElement);
}, 1000);
```

第一引数は4つオプションありそれぞれ下記の位置に挿入する

```html
<!-- beforebegin の位置 -->
<ul class="chapter08_list">
  <!-- afterbegin の位置 -->
  <li id="chapter08_item01" class="chapter08_item">item01</li>
  <li id="chapter08_item02" class="chapter08_item">item02</li>
  <li id="chapter08_item03" class="chapter08_item">item03</li>
  <li id="chapter08_item04" class="chapter08_item">item04</li>
  <li id="chapter08_item05" class="chapter08_item">item05</li>
  <!-- beforeend の位置 -->
</ul>
<!-- afterend の位置 -->
```

### 146 要素を動的に削除したい

```javascript
setTimeout(() => {
  const item146_parent = document.querySelector('.chapter08_list');
  const item146_child = document.querySelector('#chapter08_item01');
  // #chapter08_item01 要素を取り除く
  item146_parent.removeChild(item146_child);
}, 3000);
```

### 147 自分自身の要素を削除したい

```javascript
setTimeout(() => {
  const item147_child = document.querySelector('#chapter08_item05');
  // #chapter08_item05 要素を取り除く
  item147_child.remove();
}, 3000);
```

### 148 要素を生成したい

```javascript
// div要素を生成する
const item148_divElement = document.createElement('div');
// innerHTMLで内容を生成する
item148_divElement.innerHTML = 'これは動的に生成された要素です';
// body 要素の末尾に追加する
document.body.appendChild(item148_divElement);
```

### 149 要素を複製したい

引数に `true` を渡すと、子ノードも複製します。

```javascript
setTimeout(() => {
  const item149_cloneBox = document.querySelector('#chapter08_item02').cloneNode(true);
  document.querySelector('.chapter08_list').appendChild(item149_cloneBox);
}, 3000);
```

