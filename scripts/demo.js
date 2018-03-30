const measure = new PatternLockMeasure();
const lock = new PatternLock("#patternContainer",{
  margin:35,
  radius:40,
  onDraw:function(pattern){
    //finish write pattern.
    pageCtr.onDraw();
  },
  onMove:function(pattern){
    //when add a node to stack.
    pageCtr.onMove(pattern);
    //window.navigator.vibrate(50);
  }
});

const pageCtr = (function(){
  var isConfirm = 0;
  var isforget = 0;
  var rank,tmpPattern,pattern,val;

  return {
    onDraw:()=>{
          
    },
    onMove:(pattern)=>{
      tmpPattern = pattern.join("");
      rank = measure.getRank(pattern);
      val = measure.getStrength(pattern);

      viewCtr.showRank(rank,val);
      viewCtr.setCursol(val);
    },
    reset:()=>{
      viewCtr.setMsg("端末認証で設定したい\nパターンを入力してね");
      lock.reset();
      viewCtr.removeFunc();
    }
  }
}());

const viewCtr = (function(){
  var value = document.getElementById("value");
  var desc = document.getElementById("desc");
  var myCursol = document.getElementById("myCursol");

  return {
    showRank:(rank,val)=>{
      console.log(val);
      switch(rank){
        case 0:
          value.innerText = "none";
          value.style.color = "#666";
          break;
        case 1:
          value.innerText = `Weak(${val.toFixed(2)})`;
          value.style.color = "red";
          break;
        case 2:
          value.innerText = `Medium(${val.toFixed(2)})`;
          value.style.color = "yellow";
          break;
        case 3:
          value.innerText = `Strong(${val.toFixed(2)})`;
          value.style.color = "blue";
          break;
        case 4:
          value.innerText = `Very Strong(${val.toFixed(2)})`;
          value.style.color = "blue";
          break;
      }
    },
    setCursol:(val)=>{
      myCursol.style.left = (100*val).toFixed(0)+'%';
    },
    setMsg:(msg)=>{
      desc.innerText = `${msg}`;
    },
    isConfirm:()=>{
      return isConfirm;
    }
  }
}());