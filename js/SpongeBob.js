let code = `/* 我们来画一只海绵宝宝 */
/* 首先准备一张背景 */
.preview {
  background-color: #f1db5f;
}
/* 确定绘画的中心区域，方便定位 */
.pricture {
  position: relative;
  width: 300px;
  height: 220px;
}
/* 画眼睛 */
.eyes {
  position: absolute;
  top: 33px;
  width: 106px;
  height: 106px;
  background-color: #fff;
  border: solid 3px #000;
  border-radius: 50%;
}
/* 眼睫毛 */
.eyes .eyewinker {
  position: absolute;
  left: 50%;
  margin-left: -3px;
  bottom: 100%;
  width: 5px;
  height: 20px;
  background-color: #000;
  transform-origin: 3px 73px;
}
.eyes .eyewinker:nth-child(2) {
  transform: rotateZ(-36deg);
}
.eyes .eyewinker:nth-child(3) {
  transform: rotateZ(36deg);
}
/* 瞳孔 */
.eyes .pupil {
  position: absolute;
  top: 24px;

  width: 54px;
  height: 54px;
  background-color: #44aaff;
  border: solid 2px #000;
  border-radius: 50%;
}
/* 瞳仁 */
.eyes .pupil::after {
  content: '';
  display: block;
  position: absolute;
  top: 12px;
  right: 9px;
  width: 28px;
  height: 28px;
  background-color: #000;
  border-radius: 50%;
}

/* 左眼 */
.eyes.left {
  right: 50%;
  margin-right: 1px;
}
.eyes.left .pupil {
  right: 5px;
}
.eyes.left .pupil::after {
  right: 7px;
}

/* 右眼 */
.eyes.right {
  left: 50%;
  margin-left: 1px;
}
.eyes.right .pupil {
  left: 5px;
}
.eyes.right .pupil::after {
  left: 7px;
}

/* 画鼻子 */
.nose {
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -20px;
  width: 41px;
  height: 60px;
  background: #000;
  border-radius: 50%;
  transform: rotate(10deg);
}
.nose::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 2px;
  display: block;
  width: 36px;
  height: 60px;
  border-radius: 50%;
  transform: rotate(4deg);
  background-color: #f1db5f;
}
/* 画嘴巴 */
.mouth {
  position: absolute;
  left: 50%;
  top: 160px;
  margin-left: -121px;
  width: 260px;
  height: 30px;
  border: solid 3px #000;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  transform: rotate(-2deg);
}
.mouth::after {
  content: '';
  top: -12px;
  left: -10px;
  display: block;
  position: absolute;
  width: 280px;
  height: 28px;
  background-color: #f1db5f;
  border-radius: 50%;
}
/* 画牙齿 */
.tooth {
  position: absolute;
  top: 100%;
  margin-top: 1px;
  width: 28px;
  height: 30px;
  border: solid 2px #000;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
}
.tooth.left {
  right: 50%;
  margin-right: 3px;
  transform: rotate(1deg);
}
.tooth.right {
  left: 50%;
  margin-left: 3px;
  transform: rotate(-2deg);
}
/* 把代码区域隐藏起来 */
.code-wrap {
  display: none;
}
/* 全屏展示 */
.preview {
  height: 100vh;
}
/* 好了，海绵宝宝画好了 */
/* 送给你 */`

let spongeBob = new DrawAnimation(code);
console.log(spongeBob);
spongeBob.init();