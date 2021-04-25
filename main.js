"use strict";

// 使用フォント
const FONT = "48px monospace";

// 内部カウンタ
let gFrame = 0;
// マップ画像
let gImgMap;

// タイマーイベント発生時の処理
function WmTimer(){
  // 内部カウンタを加算
  gFrame++;

  // mainキャンバス要素を取得
  const ca = document.getElementById("main");
  // 2D描画オブジェクトを取得
  const g = ca.getContext("2d");

  for(let y= 0; y < 16; y++){
    for(let x = 0; x < 16; x++){
      g.drawImage(gImgMap, x * 32, y * 32);
    }
  }
  
  // 文字フォントを設定
  g.font = FONT;
  g.fillText("Hello World" + gFrame, gFrame / 10, 64);
}

// ブラウザ起動イベント
window.onload = function(){
  // マップ画像読み込み
  gImgMap = new Image(); gImgMap.src = "img/map.png"
  // 33ms間隔でWmTimer()を呼び出す様に指示（約30.0fps）
  setInterval(function(){ WmTimer()}, 33);
}