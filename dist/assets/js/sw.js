/**********
* 242 バックグランドでサービスワーカーを実行させたい
* sw.js
**********/

self.addEventListener('fetch', (event) => {
  console.log('通信が発生', event.request);
});
