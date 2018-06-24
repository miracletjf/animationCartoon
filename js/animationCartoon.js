function DrawAnimation(code){
  this.code = code;
  this.styleWrap = document.querySelector('#styleWrap');
  this.codeWrap = document.querySelector('#codeWrap');
  this.$buttons = $('.buttons button');
  this.speed = 50;
  this.timer;
  this.n = 0;
}

DrawAnimation.prototype = {
  constructor: DrawAnimation,
  init: function(){
    this.$buttons.eq(1).addClass('active');
    this.execCodeingAnimation();
    this.bindEvents();
  },
  execCodeingAnimation: function(){
    this.timer = setTimeout(function run(){
      this.n++;
      let codeNow = this.code.slice(0,this.n);
      this.codeWrap.innerHTML = codeNow;
      this.styleWrap.innerHTML = codeNow;
      this.codeWrap.scrollTop = this.codeWrap.scrollHeight;
      if(this.n<this.code.length){
        setTimeout(run.bind(this),this.speed);
      }
    }.bind(this),this.speed)
  },
  bindEvents: function(){
    let _this = this;
    this.$buttons.on('click',function(e){ 
      let type = $(this).text();
      $(this).addClass('active').siblings().removeClass('active');
      _this.controlSpeed(type);
    })
  },
  controlSpeed: function(type){
    switch (type){
      case 'slow': 
        this.speed = 80;
        break;
      case 'default':
        this.speed = 40;
        break;
      case 'fast':
        this.speed = 20;
        break;
    }
  }
  
}


