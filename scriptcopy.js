window.onload = function (){
    blocksCreate();
    linesCreate();
    
    
  
    
    


}

function blocksCreate(){
var yokoNum = 14;
var tateNum=14;
var  hen = 30;
blocks = document.getElementById("blocks");
blocks.style.width = yokoNum*hen +"px";
blocks.style.height = tateNum*hen + "px";
blocks.style.position = "relative";
for (var i =0;i<yokoNum;i++){
    for(var j=0;j<tateNum;j++){
    var div = document.createElement("div");
    div.id= "sqDiv:" +i+","+j;
   
    var rc1 = Math.random()*255;
    var rc2 = Math.random()*255;
    var rc3 = Math.random()*255;
    var color = "rgb("+rc1+","+rc2+","+rc3+")";
    var x =  i*hen;
    var y = j*hen;


    div.style.width = hen +"px";
    div.style.height = hen + "px";
    div.style.backgroundColor = color;
    div.style.position = "absolute";
    div.style.left = x + "px";
    div.style.top = y + "px";
    blocks.appendChild(div);
    
    }

}


}

var jiko=document.getElementById("go");
    jiko.addEventListenr("click",blocksCreate);




function linesCreate(){
    
    var cbHeight = 1.5;//カラーバーの高さ
    var height = 500;
    var cbWidth = 1400;//カラーバーの幅
    var colorbar = document.getElementById('color');
    colorbar.style.width = cbWidth +"px";
    colorbar.style.height = height + "px";
    colorbar.style.position = "relative";
    

    ////音とボタンの組み合わせをランダムに設定
    
    

for (var i = 0; i < height/cbHeight ; i++) {
  // HSLカラーを算出
   var rc1 = Math.random()*255;
   var rc2 = Math.random()*255;
   var rc3 = Math.random()*255;
   var color = "rgb("+rc1+","+rc2+","+rc3+")";
   var x =  0;
   var y = i*cbHeight;

    // シェイプを作成
    var cDiv = "div" + i; 
    var div = document.createElement("div");
    div.id = cDiv;
    div.style.width = cbWidth +"px";
    div.style.height = cbHeight + "px";
    div.style.backgroundColor = color;
    div.style.position = "absolute";
    div.style.left = x + "px";
    div.style.top = y + "px";
    colorbar.appendChild(div);

    

    
};
}





///////////////////////////////////////////////////////////////////



  