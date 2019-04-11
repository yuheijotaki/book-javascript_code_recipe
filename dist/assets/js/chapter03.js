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

/**********
* 052 要素の一部を置き換えたい
**********/
// 指定位置から要素を取り出しつつ、要素を追加する
const item52_array3 = ["りんご", "みかん"];
item52_array3.splice(1, 0, "バナナ"); // インデックス1の位置で、0個取り除きつつバナナを追加する
console.log(item52_array3); // 結果: ["りんご", "バナナ", "みかん"]

const item52_array4 = ["りんご", "みかん"];
item52_array4.splice(1, 1, "バナナ", "いちご"); // インデックス1の位置で、0個取り除きつつバナナを追加する
console.log(item52_array4); // 結果: ["りんご", "バナナ", "いちご"]

/**********
* 053 配列を連結したい
**********/
// concat() を用いる場合
const item53_array1 = ["鈴木", "佐藤"];
const item53_array2 = ["田中"];
const item53_array3 = item53_array1.concat(item53_array2);
console.log(item53_array3); // 結果:  ["鈴木", "佐藤", "田中"]

// スプレッド演算子を用いる場合
const item53_array5 = ["鈴木", "佐藤"];
const item53_array6 = ["田中"];
const item53_array7 = [...item53_array5, ...item53_array6];
console.log(item53_array7); // 結果:  ["鈴木", "佐藤", "田中"]

/**********
* 054 配列の要素を結合して文字列にしたい
**********/
const item54_array1 = [2, 4, 10];
console.log(item54_array1.join()); // 結果: 2,4,10

const item54_array2 = ['a', 'b', 'c'];
console.log(item54_array2.join('')); // 結果: abc

/**********
* 055 要素を検索したい
**********/
console.log(['りんご', 'バナナ', 'みかん'].indexOf('みかん')); // 結果: 2
console.log([0, 2, 4, 6, 4, 2, 0].lastIndexOf(4));       // 結果: 4

console.log(['りんご', 'バナナ', 'みかん'].includes('みかん')); // 結果: 2
console.log([0, 2, 4, 6, 4, 2, 0].includes(3));           // 結果: 4

/**********
* 056 配列から条件を満たす要素を取得したい
**********/
const item56_array1 = ['鈴木', '田中', '高橋', '後藤'];

// 配列から「田中」を取得
const item56_targetUser = item56_array1.find(element => {
  return element === '田中'
});

console.log(item56_targetUser); // 結果: '田中'

/**********
* 058 配列をソートしたい
**********/
const item58_array1 = [1, 2, 3, 3, 4, 5];

item58_array1.sort((a, b) => {
  // aがbより小さいならば、a,bの順に並べる
  if (a < b) {
    return 1;
  }

  // aとbが等しければ、順番はそのまま
  if (a === b) {
    return 0;
  }

  // aがbより大きければ、b,aの順に並べる
  if (a > b) {
    return -1;
  }
});

console.log(item58_array1); // 結果: [5, 4, 3, 3, 2, 1]

/**********
* 059 オブジェクトを含む配列をソートしたい
**********/
const item59_userDataList = [
  { id: 2, name: '鈴木' },
  { id: 10, name: '田中' },
  { id: 4, name: '佐藤' },
  { id: 29, name: '高橋' },
  { id: 101, name: '小笠原' }
];

// 昇順にソート
function sortByAsc() {
  item59_userDataList.sort((a, b) => {
    return a.id - b.id;
  });
  console.log(item59_userDataList);
}
sortByAsc(); // idの昇順にソート

// 降順にソート
function sortByDesc() {
  item59_userDataList.sort((a, b) => {
    return b.id - a.id;
  });
}
sortByDesc(); // idの降順にソート

/**********
* 061 ある配列から別の配列を作りたい
**********/
const item61_idList1 = [4, 10, 20];

const item61_userIdList1 = item61_idList1.map(value => {
  return `userid_${value}`;
});

console.log(item61_userIdList1); // 結果: ["userid_4", "userid_10", "userid_20"]

// コールバック関数は、要素の他にインデックスや元の配列を受け取る
const item61_idList2 = [3, 8, 12];

const item61_userIdList2 = item61_idList2.map((value, index) =>
  `userid_${index + 1}_${value}`
);

console.log(item61_userIdList2); // 結果: ["userid_1_3", "userid_2_8", "userid_3_12"]

// IDと名前を持つオブジェクトの配列からIDだけの配列を作成するサンプル
const item61_apiResponseData = [
  { id: 10, name: '鈴木' },
  { id: 21, name: '田中' },
  { id: 31, name: '高橋' }
];

const item61_idList3 = item61_apiResponseData.map(value => {
  return value.id;
});

console.log(item61_idList3); // 結果: [10, 21, 31]

/**********
* 062 ある配列から条件を満たす別の配列を作りたい
**********/
const item62_newArray = [10, 20, 30, 40].filter((value) => {
  return value >= 30;
});

console.log(item62_newArray); // 結果: [30, 40]

// 20歳以上、30歳以上、40歳以上というラベルのボタンを作成し、クリックしたボタンに応じてユーザー一覧を出力するサンプル
const item62_userDataList = [
  { name: '鈴木', age: 18 },
  { name: '田中', age: 27 },
  { name: '佐藤', age: 32 },
  { name: '高橋', age: 41 },
  { name: '小笠原', age: 56 }
]

// .button 要素についてイベント設定
document.querySelectorAll('.button').forEach((element) => {
  element.addEventListener('click', (event) => {
    onClickButton(event);
  });
});

// ボタンがクリックされたときの処理
function onClickButton(event) {
  // クリックされたボタン要素
  const button = event.target;
  // ボタン要素から `data-age` の値を取得
  const targetAge = button.dataset.age;
  // targetAge 以上のユーザー配列を生成する
  const filterdList = item62_userDataList.filter((data) => {
    return data.age >= targetAge;
    // 配列を出力する
  });
  updateList(filterdList);
}

// ユーザー配列を出力する
function updateList(filterdList) {
  let listHtml = '';
  for (const data of filterdList) {
    listHtml += `<li>${data.name} : ${data.age}歳</li>`;
  }
  document.querySelector('.item62_user-list').innerHTML = listHtml;
}

/**********
* 063 各要素から単一の値を作りたい
**********/
// 3つの値段を格納した配列
const item63_priceList = [100, 500, 900];

// 合計値を計算
const item63_sum = item63_priceList.reduce((previous, current) => {
  return previous + current;
});

console.log(item63_sum); // 結果: 1500

// 2次元配列を1次元配列にする（フラット化する）というケースでも使えます。
const item63_array = [['バナナ', 'りんご', 'いちご'], ['みかん', 'ぶどう']];

const item63_flattenedArray = item63_array.reduce((previousValue, currentValue) => {
  return previousValue.concat(currentValue);
});

console.log(item63_flattenedArray); // 結果: ["バナナ", "りんご", "いちご", "みかん", "ぶどう"]

/**********
* 064 配列に似たオブジェクトを配列に変換したい
**********/
const item64_allDivElementList = document.querySelectorAll('div');

// 配列に変換する
const item64_elementsArray = [...item64_allDivElementList];

// 配列に変換されたので、配列用メソッド filter() が使える
item64_elementsArray.filter((element) => {
  console.log(element.classList.contains('wrapper')); // 結果: true, false, false...
});

/**********
* 065 複数の値をまとめて代入したい（分割代入）
**********/
let item65_a;
let item65_b;
let item65_c;
[item65_a, item65_b, item65_c] = [1, 2, 3]; // 分割代入
console.log(item65_a, item65_b, item65_c);  // 結果: 1 2 3

/**********
* 066 配列をシャッフルしたい
**********/
const item66_array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const item66_shuffled1 = shuffleArray(item66_array1);
console.log(item66_shuffled1); // 結果（例）: [7, 3, 9, 5, 8, 10, 4, 6, 2, 1]

const item66_array2 = ["田中", "鈴木", "吉田", "後藤", "辻"];
const item66_shuffled2 = shuffleArray(item66_array2);
console.log(item66_shuffled2); // 結果（例）: ["吉田", "辻", "鈴木", "後藤", "田中"]

/**
 * 配列をシャッフルします。
 * 元の配列は変更せず、新しい配列を返します。
 * @param sourceArr 元の配列
 * @returns シャッフルされた配列
 */
function shuffleArray(sourceArr) {
  // 元の配列の複製を作成
  const array = sourceArr.concat();
  // Fisher-Yates のアルゴリズム
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

/**********
* 068 オブジェクトの定義、値の取得、値の更新を行いたい
**********/
const item68_response = {
  result: true,
  list: [
    { id: 1, name: "田中", age: 26 },
    { id: 2, name: "鈴木", age: 32 }
  ]
};

// 値を取得
console.log(item68_response.list[0].name); // 結果: "田中"

// 値を更新
item68_response.list[1].age = 51;
console.log(item68_response.list[1].age); // 結果: 51

/**********
* 069 オブジェクトを複製したい
**********/
// Object.assign(); を用いる場合
const item69_object1 = {
  result: true,
  list: [
    { id: 1, name: "田中", age: 26 },
    { id: 2, name: "鈴木", age: 32 }
  ]
};

// オブジェクトのコピー
const item69_copiedObject1 = Object.assign({}, item69_object1);
console.log(item69_copiedObject1); // 結果: `item69_object1` と同じ内容

// スプレッド演算子（...）を用いる場合
const item69_object2 = {
  result: true,
  list: [
    { id: 1, name: "田中", age: 26 },
    { id: 2, name: "鈴木", age: 32 },
    { id: 3, name: "山田", age: 56 }
  ]
};

// オブジェクトのコピー
const item69_copiedObject2 = { ...item69_object2 };
console.log(item69_copiedObject2); // 結果: `item69_object2` と同じ内容

/**********
* 070 オブジェクトのプロパティがあるかどうかを調べたい
**********/
const item70_userData = {
  id: 1,
  name: "田中",
  age: 26
}

console.log(item70_userData.hasOwnProperty('id'));     // 結果: true
console.log(item70_userData.hasOwnProperty('adress')); // 結果: false
console.log('id' in item70_userData);                  // 結果: true

console.log(item70_userData.id != null);     // 結果: true
console.log(item70_userData.adress != null); // 結果: false

/**********
* 071 オブジェクトの各値について処理をしたい
**********/
const item71_userData = {
  id: 1,
  name: "田中",
  age: 26
}

// キー毎にループ
console.log(Object.keys(item71_userData)); // 結果: ["id", "name", "age"]

// 値毎にループ
console.log(Object.values(item71_userData)); // 結果: [1, "田中", 26]

// プロパティー毎にループ
console.log(Object.entries(item71_userData)); // 結果: [["id", 1], ["name", "田中"], ["age", 26]]

/**********
* 072 複数の変数にまとめて値を代入したい（分割代入）
**********/
const item72_userData = {
  id: 1,
  name: "田中",
  age: 26
};

const { id, name, age } = item72_userData; // 変数の定義順は順不同
console.log(id);   // 結果: 1
console.log(name); // 結果: "田中"
console.log(age);  // 結果: 26

// 変数を別名で指定する場合
const { id: item72_id, name: item72_name, age: item72_age } = item72_userData; // 変数の定義順は順不同
console.log(item72_id);   // 結果: 1
console.log(item72_name); // 結果: "田中"
console.log(item72_age);  // 結果: 26
