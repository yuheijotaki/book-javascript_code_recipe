/**********
* 241 バックグランドでスクリプトを実行させたい
* worker.js
**********/

onmessage = (e) => {
  console.log('[ワーカー] メインスクリプトからメッセージを受信');

  // 足し算を実行
  const item241_result = e.data[0] + e.data[1];

  console.log('[ワーカー] メインスクリプトにメッセージを送信');
  postMessage(item241_result);
}
