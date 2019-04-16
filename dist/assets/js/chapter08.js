/**********
* 136 セレクター名に一致する要素をひとつ取得したい
**********/
const item136_item01 = document.querySelector('.chapter08_item');
console.log(item136_item01); // 結果: <li id="chapter08_item01" class="chapter08_item">item01</li>

const item136_item02 = document.querySelector('.chapter08_item:nth-child(2)');
console.log(item136_item02); // 結果: <li id="chapter08_item02" class="chapter08_item">item02</li>

/**********
* 137 ID名に一致する要素を取得したい
**********/
const item137_item01 = document.getElementById('chapter08_item01');
console.log(item137_item01); // 結果: <li id="chapter08_item01" class="chapter08_item">item01</li>

/**********
* 138 セレクター名に該当する要素をまとめて取得したい
**********/
const item138_nodeList = document.querySelectorAll('.chapter08_item');
console.log(item138_nodeList);
/* 結果: NodeList(5) [li#chapter08_item01.chapter08_item, li#chapter08_item02.chapter08_item, li#chapter08_item03.chapter08_item, li#chapter08_item04.chapter08_item, li#chapter08_item05.chapter08_item] */

// forEach を使う場合
item138_nodeList.forEach((targetList) => {
  console.log(targetList.innerHTML); // 結果: item01, item02, item03, item04, item05
});

/**********
* 139 クラス名に一致する要素をすべて取得したい
**********/
const item139_item01 = document.getElementsByClassName('chapter08_item');
console.log(item139_item01);
/* 結果: HTMLCollection(5) [li#chapter08_item01.chapter08_item, li#chapter08_item02.chapter08_item, li#chapter08_item03.chapter08_item, li#chapter08_item04.chapter08_item, li#chapter08_item05.chapter08_item, chapter08_item01: li#chapter08_item01.chapter08_item, chapter08_item02: li#chapter08_item02.chapter08_item, chapter08_item03: li#chapter08_item03.chapter08_item, chapter08_item04: li#chapter08_item04.chapter08_item, chapter08_item05: li#chapter08_item05.chapter08_item] */

// 各要素を処理する場合にはfor文を使う
const item139_itemList = document.getElementsByClassName('chapter08_item');
const item139_itemLength = item139_itemList.length;

for (let item139_index = 0; item139_index < item139_itemLength; item139_index++) {
  console.log(item139_itemList[item139_index]); // 結果: <li id="chapter08_item01" class="chapter08_item">item01</li> ...
}

/**********
* 140 `<html>`要素や`<body>`要素を取得したい
**********/

/**********
* 141 子要素・前後要素・親要素を取得したい
**********/
const item141_parentElement = document.querySelector('.chapter08_list');
console.log(item141_parentElement.children);
/* 結果: HTMLCollection(5) [li#chapter08_item01.chapter08_item,... */

const item141_firstElementChild = item141_parentElement.firstElementChild;
console.log(item141_firstElementChild); // #chapter08_item01
console.log(item141_firstElementChild.nextElementSibling); // #chapter08_item02
console.log(item141_firstElementChild.parentNode); // .chapter08_list

/**********
* 142 親要素の末尾に要素を追加したい
* 143 指定要素の直前に要素を追加したい
* 144 要素の前後に別の要素を追加したい
**********/

/**********
* 145 HTMLコードを要素として挿入したい
**********/
const item145_container = document.querySelector('.chapter08_list');
// 挿入する .new-element 要素
const item145_newElement = `<div class="new-element">.new-element要素</div>`;

setTimeout(() => {
  // .chapter08_list 要素内先頭に .new-element を挿入する
  item145_container.insertAdjacentHTML('afterbegin', item145_newElement);
}, 1000);

/**********
* 146 要素を動的に削除したい
**********/
setTimeout(() => {
  const item146_parent = document.querySelector('.chapter08_list');
  const item146_child = document.querySelector('#chapter08_item01');
  // #chapter08_item01 要素を取り除く
  item146_parent.removeChild(item146_child);
}, 3000);

/**********
* 147 自分自身の要素を削除したい
**********/
setTimeout(() => {
  const item147_child = document.querySelector('#chapter08_item05');
  // #chapter08_item05 要素を取り除く
  item147_child.remove();
}, 3000);

/**********
* 148 要素を生成したい
**********/
// div要素を生成する
const item148_divElement = document.createElement('div');
// innerHTMLで内容を生成する
item148_divElement.innerHTML = 'これは動的に生成された要素です';
// body 要素の末尾に追加する
document.body.appendChild(item148_divElement);

/**********
* 149 要素を複製したい
**********/
setTimeout(() => {
  const item149_cloneBox = document.querySelector('#chapter08_item02').cloneNode(true);
  document.querySelector('.chapter08_list').appendChild(item149_cloneBox);
}, 3000);

/**********
* 152 要素内のテキストを取得したり、書き換えたりしたい
**********/
const item152_text = document.querySelector('.item152_text');
console.log(item152_text.textContent); // 結果: テキストです。テキストです。

// 書き換え
setTimeout(() => {
  item152_text.textContent = 'テキストが書き換えされました。';
}, 2000);

/**********
* 153 要素内のHTMLを取得したり、書き換えたりしたい
**********/
const item153_html = document.querySelector('.item153_html');
console.log(item153_html.innerHTML); // 結果: <p>テキストです。テキストです。</p>

// 書き換え
setTimeout(() => {
  item153_html.innerHTML = '<p><b>HTMLが書き換えされました。</b></p>';
}, 2000);

/**********
* 154 要素（自分自身を含む）のHTMLを取得したり、書き換えたりしたい
**********/
const item154_html = document.querySelector('.item154_html');
console.log(item154_html.outerHTML);
/* 結果:
<div class="item154_html">
  <p>テキストです。テキストです。</p>
</div>
*/

// 書き換え
setTimeout(() => {
  item154_html.outerHTML = `<div class="item154_html"><p><b>HTMLが書き換えされました。</b></p></div>`;
}, 2000);

/**********
* 155 要素の属性を取得したり、書き換えたりしたい
**********/
const item155_link = document.querySelector('.item155_link');
console.log(item155_link.getAttribute('href')); // 結果: example.com
console.log(item155_link.hasAttribute('href')); // 結果: true

const item155_image = document.querySelector('.item155_image');
// img要素のsrcをbar.pngに書き換える
item155_image.setAttribute('src', 'bar.png');

/**********
* 157 要素のクラス属性の追加や削除をしたい
**********/
const item157_item = document.querySelector('#chapter08_item03');
item157_item.classList.add('chapter08_item--extend'); // chapter08_item--extend クラスを追加
item157_item.classList.remove('chapter08_item'); // chapter08_item クラスを削除

item157_item.classList.add('hoge', 'fuga', 'piyo');
item157_item.classList.remove('fuga', 'piyo');

// 特定のクラスが追加されているかを調べる
console.log(item157_item.classList.contains('hoge')); // 結果: true
console.log(item157_item.classList.contains('fuga')); // 結果: false

/**********
* 158 要素のクラスの有無を切り替えたい
**********/
const item158_item = document.querySelector('#chapter08_item03');
// 1秒ごとにクラスを入れ替える
setInterval(() => {
  item158_item.classList.toggle('chapter08_item--toggle');
}, 2000);

/**********
* 159 スタイルを変更したい
**********/

/**********
* 160 スタイルを取得したい
**********/
