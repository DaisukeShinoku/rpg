"use strict";

// 使用フォント
const FONT = "48px monospace";

// 仮想画面サイズ
const HEIGHT = 120;
const WIDTH = 128;

// 仮想画面
let gScreen;

// 内部カウンタ
let gFrame = 0;
// マップ画像
let gImgMap;

function DrawMain(){
  
  const g = gScreen.getContext("2d");

  for(let y= 0; y < 32; y++){
    for(let x = 0; x < 64; x++){
      g.drawImage(gImgMap, x * 32, y * 32);
    }
  }

  // 文字フォントを設定
  g.font = FONT;
  g.fillText("Hello World" + gFrame, gFrame / 10, 64);
}

function WmPaint(){

  DrawMain();

  // mainキャンバス要素を取得
  const ca = document.getElementById("main");
  // 2D描画オブジェクトを取得
  const g = ca.getContext("2d");

  g.drawImage(gScreen, 0, 0, gScreen.width, gScreen.height, 0, 0, ca.width, ca.height);
}

function WmSize(){
  // mainキャンバス要素を取得
  const ca = document.getElementById("main");
  // キャンバスの幅をブラウザの幅へ合わせる
  ca.width = window.innerWidth;
  // キャンバスの幅をブラウザの幅へ合わせる
  ca.height = window.innerHeight;
}

// タイマーイベント発生時の処理
function WmTimer(){
  // 内部カウンタを加算
  gFrame++;
  WmPaint();
}

// ブラウザ起動イベント
window.onload = function(){
  // マップ画像読み込み
  gImgMap = new Image(); gImgMap.src = "img/map.png"

  // 仮想画面を作成
  gScreen = document.createElement("canvas");
  gScreen.width =  WIDTH;
  gScreen.height =  HEIGHT;

  WmSize();
  window.addEventListener("resize", function() { WnSize()});
  // 33ms間隔でWmTimer()を呼び出す様に指示（約30.0fps）
  setInterval(function(){ WmTimer()}, 33);
}