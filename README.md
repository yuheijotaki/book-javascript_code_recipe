## Chapter 4 データについて深く知る

データ ＝ 主に型について、種類や調べ方が中心でした。

### 076 データの型を調べたい

`typeof` を用いて調べる

```javascript
console.log(typeof true);                    // 結果: 'boolean'
console.log(typeof 10);                      // 結果: 'number'
console.log(typeof '鈴木');                   // 結果: 'string'
console.log(typeof null);                    // 結果: 'symbol'
console.log(typeof undefined);               // 結果: 'undefined'
console.log(typeof Symbol());                // 結果: 'symbol'
console.log(typeof [1, 2, 3]);               // 結果: 'object'
console.log(typeof { id: 10, name: '田中' }); // 結果: 'object'
console.log(
  typeof function() {
    console.log('test');
  }
); // 結果: 'function'
console.log(typeof class myClass { }); // 結果: 'function'
```

### 079 型を変換したい

| メソッド                | 意味                                   | 戻り値 |
| ----------------------- | -------------------------------------- | ------ |
| `Boolean` （値）        | 値を真偽値に変換する                   | 真偽値 |
| `String` （値）         | 値を文字列に変換する                   | 文字列 |
| `Number` （値）         | 値を数値型に変換する                   | 数値   |
| `parseInt` （値）       | 文字列を数値型（整数）に変換する       | 数値   |
| `parseFloat` （文字列） | 文字列を数値型（浮動小数点）に変換する | 数値   |

```javascript
const item79_result = 100 + Number('200');
console.log(item79_result); // 結果: 300
```

> `Boolean()` や `String()` などを用いて値の型を明示的に変更することを、「明示的な型変換」といいます。

```javascript
console.log(Boolean(1));     // 結果: true
console.log(Boolean(0));     // 結果: false
console.log(Boolean('鈴木')); // 結果: true
console.log(Boolean(''));    // 結果: false

console.log(String(1)); // 結果: "1"

console.log(Number('1'));   // 結果: 1
console.log(Number(''));    // 結果: 0
console.log(Number('鈴木')); // 結果: NaN
console.log(Number(true));  // 結果: 1
console.log(Number(false)); // 結果: 0
```

逆に「暗黙の型変換」というのもある

```javascript
console.log(100 + '200'); // 結果: '100200'
console.log('200' - 100); // 結果: 100
```

上記のように数値型と文字列型を + で組み合わせた場合でも、どちらが前後にきているかで結果が変わる。  
この性質を覚える必要はなく、異なる肩をひとつの式で扱う際は「明示的な型変換」を行うべき、とのこと。

---

このあたりは暗記しているわけではないけど、初見のようなことも見当たらなかったのでサクッと終わります。