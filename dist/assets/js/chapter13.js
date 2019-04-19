/**********
* 219 一定時間後に処理を行いたい
**********/
setTimeout(() => {
  // 任意の処理
  console.log(this); // このオブジェクト
}, 1000);

/**********
* 220 一定時間後の処理を解除したい
**********/
const item220_timerId = setTimeout(item220_timer, 1000); // 1000ミリ秒後に実行
function item220_timer() {
  // 任意の処理
  console.log('clearTimeout()で解除するため出力されません');
}

clearTimeout(item220_timerId); // 解除

/**********
* 221 一定時間ごとに処理を行いたい
**********/
setInterval(() => {
  // 任意の処理
  console.log(`1000ミリ秒毎に出力されます`);
}, 1000);

/**********
* 222 一定時間ごとの処理を解除したい
**********/
const item222_interlvalID = setInterval(item222_timer, 1000); // 1000ミリ秒ごとに実行
function item222_timer() {
  // 任意の処理
  console.log('clearInterval()で解除するため出力されません');
}

clearInterval(item222_interlvalID); // 解除

/**********
* 223 非同期処理を行えるPromiseを使いたい
**********/
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

/**********
* 224 Promiseで処理の成功時・失敗時の処理を行いたい
**********/
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
