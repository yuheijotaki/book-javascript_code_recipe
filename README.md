## Chapter13 処理の実行タイミングを制御する

Chapter12 の「SVGやcanvas要素を取り扱う」はいまいま実用ではなさそうだったので読んで終わりにします。

### 219 一定時間後に処理を行いたい

> 第一引数には関数を、第二引数にミリ秒を数値で指定します。

> `setTimeout()` メソッドと `function` を使うと `this` のスコープが変わる場合もあるため、プロパティーの参照がうまくいかないこともあるでしょう。`this` のスコープがはずれないアロー関数と組み合わせて使うといいでしょう。

```javascript
setTimeout(() => {
  // 任意の処理
  console.log(this); // このオブジェクト
}, 1000);
```

### 220 一定時間後の処理を解除したい

> キャンセルしたいタイミングで `clearTimeout()` メソッドにタイマーを渡すことで、`setTimeout()` メソッドの呼び出しを解除できます。

```javascript
const item220_timerId = setTimeout(item220_timer, 1000); // 1000ミリ秒後に実行
function item220_timer() {
  // 任意の処理
  console.log('clearTimeout()で解除するため出力されません');
}

clearTimeout(item220_timerId); // 解除
```

### 221 一定時間ごとに処理を行いたい

> スコープが変わるため、アロー関数と組み合わせて使うといいでしょう。

```javascript
setInterval(() => {
  // 任意の処理
  console.log(`1000ミリ秒毎に出力されます`);
}, 1000);
```

### 222 一定時間ごとの処理を解除したい

> `setInterval()` メソッドの戻り値は数値となります。この数値を変数に保存しておき、キャンセルしたいタイミングで `clearInterval()` メソッドにその数値を渡します。

```javascript
const item222_interlvalID = setInterval(item222_timer, 1000); // 1000ミリ秒ごとに実行
function item222_timer() {
  // 任意の処理
  console.log('clearInterval()で解除するため出力されません');
}

clearInterval(item222_interlvalID); // 解除
```

### 223 非同期処理を行えるPromiseを使いたい

> `Promise` オブジェクトは非同期処理を扱える機能です。`Promise` を使うと非同期処理を扱いやすくなるため、コードの可読性が向上します。

> `Promise` のコンストラクター引数には非同期処理を行う関数を指定します。この関数のなかでは、非同期処理の完了としての `resolve()` メソッドが呼ばれるのを待機します。`Promise` インスタンスの `then()` メソッドを使うと、`resolve()` メソッドが実行された後に続けたい処理を記述できます。

```javascript
const item223_promise = new Promise((resolve) => {
  setTimeout(() => {
    // resolve()を呼び出すとPrimiseの処理が完了
    resolve('orange');
  }, 1000);
});

// then() メソッドで続く処理を記述できる
item223_promise.then((value) => {
  console.log(value); // 一秒後に実行される 結果: 'orange'
});
```

### 224 Promiseで処理の成功時・失敗時の処理を行いたい

> `Promise` で失敗時の処理を行いたいときは、コンストラクターの引数に `reject` を含む関数を指定します。`reject` は処理が失敗したことを示す処理を割り当てます。`reject` が実行された場合には、`catch()` メソッドが呼ばれます。

```javascript
let item224_flag01 = false;
const item224_promise01 = new Promise((resolve, reject) => {
  if (item224_flag01 === true) {
    resolve('orange');
  } else {
    reject('apple');
  }
});

item224_promise01.then((value) => {
  console.log(value); // 結果: 'orange'
});
item224_promise01.catch((value) => {
  console.log(value); // 結果: 'apple' // item224_flag01 が false なのでこちらが出力される
});
```

```javascript
// メソッドチェーンとして記述できる
let item224_flag02 = true;
new Promise((resolve, reject) => {
  if (item224_flag02 === true) {
    resolve('orange');
  } else {
    reject('apple');
  }
})
  .then((value) => {
    console.log(value); // 結果: 'orange' // item224_flag02 が true なのでこちらが出力される
  })
  .catch((value) => {
    console.log(value); // 結果: 'apple'
  });
```

---

`setTimeout()` や `setInterval()` はいいにしてもほかがむずかしい  
`promise` / `resolve` / `then` / `reject` / `catch` など用語は見たことあっても今までコピペだったので実際に手を動かして使うのははじめてなのでさぐりさぐりやってます。

- 225 Promiseで並列処理をしたい
- 226 Promiseで直列処理をしたい
- 227 Promiseで動的に直列処理をしたい

はスキップ