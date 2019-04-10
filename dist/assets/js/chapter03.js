/**********
* 045 配列を定義したい
**********/
// new Array() を用いて配列を作成する例
const item45_array7 = new Array('鈴木', '高橋');
console.log(item45_array7[0]); // 結果: "鈴木"

/**********
* 047 配列の各要素に対して処理を行いたい①
**********/
const item47_array = ['いちご', 'みかん', 'りんご'];
item47_array.forEach((value, index) => {
  // インデックスと値を順に出力
  console.log(index, value); // 結果: 0 "いちご", 1 "みかん", 2 "りんご" が順に出力
});

// API等から出力するユーザーデータの配列
const item47_userList = [
  { id: 1, name: '田中', address: '東京' },
  { id: 2, name: '鈴木', address: '宮城' },
  { id: 3, name: '高橋', address: '福岡' }
];

// コンテナー
const item47_container = document.querySelector('.item47_container');

// userListの配列の各要素についてループ
item47_userList.forEach((userData) => {
  // 各要素を書き出す
  item47_container.innerHTML += `
    <div class="card">
      <p>name: ${userData.name}</p>
      <p>address: ${userData.address}</p>
    </div>
  `;
});

/**********
* 048 配列の各要素に対して処理を行いたい②
**********/
const item48_array = ['いちご', 'みかん', 'りんご'];

// 配列の各要素についてループ
for (const value of item48_array) {
  console.log(value); // 結果:"いちご", "みかん", "りんご" が順に出力
}

/**********
* 049 配列の各要素に対して処理を行いたい③
**********/
const item49_array = ['いちご', 'みかん', 'りんご'];

// 配列の長さを取得する
const item49_arrayLength = item49_array.length;

// 配列の各値について処理
for (let i = 0; i < item49_arrayLength; i++) {
  // インデックス i の要素を出力
  console.log(item49_array[i]); // 結果:"いちご", "みかん", "りんご" が順に出力
}

/**********
* 050 要素を追加したい
**********/
// 先頭に要素を追加する
const item50_array1 = ['りんご', 'みかん'];
item50_array1.unshift('バナナ');
console.log(item50_array1); // 結果: ["バナナ", "りんご", "みかん"]

// 末尾に要素を追加する
const item50_array2 = ['りんご', 'みかん'];
item50_array2.push('バナナ', 'いちご');
console.log(item50_array2); // 結果: ["りんご", "みかん", "バナナ", "いちご"]

/**********
* 051 要素を削除したい
**********/
// 先頭の要素を取り除く
const item51_array1 = ["りんご", "みかん", "バナナ"];
const shiftedValue = item51_array1.shift();
console.log(shiftedValue);  // 結果: "りんご"（取り除かれた要素）
console.log(item51_array1); // 結果: ["みかん", "バナナ"]（操作後の配列）
// 末尾の要素を取り除く
const item51_array2 = ["りんご", "みかん", "バナナ"];
const poppedValue2 = item51_array2.pop();
console.log(poppedValue2);  // 結果: "バナナ"（取り除かれた要素）
console.log(item51_array2); // 結果: ["りんご", "みかん"]（操作後の配列）
// 削除可能な要素がない場合、 undefinedが返る（エラーは発生しない）
const item51_array3 = [];
const poppedValue3 = item51_array3.pop();
console.log(poppedValue3); // 結果: undefined
