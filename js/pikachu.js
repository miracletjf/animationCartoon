let code = `/* 我们来画一个皮卡丘 */
/* 首先给画布添加背景色 */
.preview {
  background-color: #ffe600;
}
/* 确定一个中心区域 */
.picture {
  position: relative;
  height: 180px;
}
/* 开始画鼻子 */
.nose {
  position: absolute;
  top: 27px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 13px 0;
  border-color: #000 transparent transparent;
  border-radius: 13px 13px 0 0/10px 10px 0 0;
  transform: translateX(-50%);
}
/* 开始画眼睛 */
.eyes {
  position: absolute;
  top: 1px;
  width: 48px;
  height: 48px;
  border: solid 2px #000;
  background-color: #2e2e2e;
  border-radius: 50%;
}
/* 画眼眸 */
.eyes::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 6px;
  width: 20px;
  height: 20px;
  border: solid 1px #000;
  background-color: #fff;
  border-radius: 50%;
}
/* 左眼位置 */
.eyes.left {
  right: 50%;
  margin-right:  60px; 
}
/* 右眼位置 */
.eyes.right {
  left: 50%;
  margin-left: 60px;
}
/* 画脸蛋 */
.cheek {
  position: absolute;
  top: 85px;
  width: 67px;
  height: 67px;
  border: solid 2px #000;
  background-color: #ff0000;
  border-radius: 50%;
}
/* 左脸蛋位置 */
.cheek.left {
  right: 50%;
  margin-right: 92px;
}
/* 右脸蛋位置 */
.cheek.right {
  left: 50%;
  margin-left: 92px;
}
/* 画嘴巴 */
.mouth {
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -66px;
  width: 132px;
  height: 132px;
  overflow: hidden;  
}
/* 画上嘴唇 */
.mouth .upperLip {
  position: absolute;
  top: -10px;
  width: 60px;
  height: 25px;
  border: solid 2px #000;
  background-color: #ffe600;
  z-index: 1;
}
/* 上嘴唇，左边 */
.mouth .upperLip.left {
  right: 50%;
  margin-right: 1px;
  border-top: none;
  border-right: none;
  transform: rotateZ(-25deg);
  border-bottom-left-radius: 72px 36px;
}
/* 上嘴唇，右边 */
.mouth .upperLip.right {
  left: 50%;
  margin-left: 1px;
  border-top: none;
  border-left: none;
  transform: rotateZ(25deg);
  border-bottom-right-radius: 72px 36px;
}
/* 下嘴唇 */
.mouth .lowerLip {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -110px;
  width: 220px;
  height: 2000px;
  border-radius: 110px/1000px;
  border: solid 2px #000;
  background-color: #9b000a;
  overflow: hidden;
}
/* 画舌头 */
.mouth .lowerLip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -90px;
  margin-top: -110px;
  width: 180px;
  height: 300px;
  border-radius: 50%/46%;
  background-color: #ff485f;
  z-index: 3;
}
/* 隐藏当前区域 */
.code-wrap {
  display: none;
} 
.preview {
  height: 100vh;
}
/* 好了，一只皮卡丘画好了 */
/* 送给你~ */`;

let pikachu = new DrawAnimation(code);
console.log(pikachu);
pikachu.init();