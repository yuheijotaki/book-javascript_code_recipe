## Chapter 5 日付や時間の取り扱い

### 085 曜日を取得したい

`getDay()` メソッドは曜日を数値で返す。戻り値が `0` のときは日曜日、`6` のときは土曜日に対応する。  
こんなおしゃれな書き方ができるんですね。

```javascript
const item85_date    = new Date();
const item85_day     = item85_date.getDay();
const item85_dayList = ['日', '月', '火', '水', '木', '金', '土'];
const item85_label   = item85_dayList[item85_day];

console.log(`今日は${item85_label}曜日です`); // 結果: '今日は金曜日です'
```

### 093 アナログ時計を表示したい

今度使うかもしれないのでやってみた。  

```html
<!-- HTML -->
<div class="clock">
  <div class="line lineHour"></div>
  <div class="line lineMin"></div>
  <div class="line lineSec"></div>
</div>
```

```css
/* CSS */
.clock {
  margin-top: 20px;
  width: 400px;
  height: 400px;
  background: rgba(0,0,0,.1);
  border-radius: 50%;
  border: #000 3px solid;
  position: relative;
}
.line {
  position: absolute;
  transform-origin: bottom;
  border-radius: 9999px;
}
.lineHour {
  width: 10px;
  height: 150px;
  top: calc(50% - 150px);
  left: calc(50% - 5px);
  background: #000;
}
.lineMin {
  width: 4px;
  height: 200px;
  top: calc(50% - 200px);
  left: calc(50% - 2px);
  background: #000;
}
.lineSec {
  width: 2px;
  height: 200px;
  top: calc(50% - 200px);
  left: calc(50% - 1px);
  background: #aaa;
}
```

```javascript
// JavaScript
setInterval(() => {
  // 現在時刻を取得
  const now = new Date();

  // 時間の数値を取得
  const h = now.getHours();   // 時間（0〜23）
  const m = now.getMinutes(); // 分（0〜59）
  const s = now.getSeconds(); // 秒（0〜59）

  // 針の角度に反映する

  // 短針（時間だけでなく分も角度に考慮する）
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  // 分針
  const degM = m * (360 / 60);
  // 秒針
  const degS = s * (360 / 60);

  const elementH = document.querySelector('.lineHour');
  const elementM = document.querySelector('.lineMin');
  const elementS = document.querySelector('.lineSec');

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);
```

---

日付関連のほかは

- 西暦/日付/時刻を取得する
- 日本式の表記の時刻を取得する
- 日付文字列からタイムスタンプ値を取得する
- Dateインスタンスに別の日時を設定する
- 日付・時刻値を加算・減算する
- 日付・時刻の差分を計算する
- 経過時間を調べる
- カウントダウン処理をする

ですが全部暗記は難しそうなのでできること知っておいて、あとで引っ張り出せればよいかなと思いました。