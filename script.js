
 var container=document.createElement("div");
 container.setAttribute("class","container");
 
 var row= document.createElement("div");
 row.setAttribute("class","row");

 var column2= document.createElement("div");
 column2.setAttribute("class", "col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 ");
 var rowb= document.createElement("div");
 rowb.setAttribute("class","row");
 var columnb= document.createElement("div");
 columnb.setAttribute("class", "col-12 p-3");
 //columnb.innerHTML='click any of below pages';
 var columnc= document.createElement("div");
 columnc.setAttribute("class", "col-12 p-3");
 //columnc.innerHTML='click any of below pages';
 
 var column3= document.createElement("div");
 column3.setAttribute("class","col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 ");
 var rowc= document.createElement("div");
 rowc.setAttribute("class","row");
 var columnd= document.createElement("div");
 columnd.setAttribute("class", "col-12 p-3");
 columnd.innerHTML='press "get it" & click any of below buttons';

 var column4= document.createElement("div");
 column4.setAttribute("class","col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 ");
 var rowd= document.createElement("div");
 rowd.setAttribute("class","row");
 var columne= document.createElement("div");
 columne.setAttribute("class", "col-12 p-3");
 //columne.innerHTML='click any of below pages';
 var columnf= document.createElement("div");
 columnf.setAttribute("class", "col-12 p-3");
 //columnf.innerHTML='click any of below pages';

 column2.append(rowb,columnb,columnc);
 column3.append(rowc,columnd);
 column4.append(rowd,columne,columnf);
 
 row.append(column2,column3,column4);

 container.append(row);
 
 document.body.append(container);
 var b=[];
  
 for(var i=1;i<=5;i++){
  var a=document.createElement('button');
  a.setAttribute("class","btn btn-primary");
  a.innerHTML=i;
  b.push(a);
  document.body.appendChild(b[b.length-1]);
}

function add_img() { 
	var img = document.createElement('img'); 
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
	document.getElementById('body').appendChild(img);
}

 var calculateLength=function(){
  var a=document.getElementById('myLength').value;
  
  var request=new XMLHttpRequest();
request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=QVTocnSJbfJ9rxhSuNgLP2N4iRIV46L0&q='+a+'&limit=25&offset=0&rating=g&lang=en', true)
request.send();
request.onload = function(){
var data = JSON.parse(this.response);
console.log(data);
var arr=[columnb,columnc,columnd,columne,columnf];
var arr1=[];
for(var i=0;i<25;i++){
  arr1.push(data.data[i].images.fixed_width.url);
  
}
function print(x){
  
  for(var i=0;i<=4;i++){
  if(x==1){
  var img = document.createElement('img'); 
    img.src = arr1[i*x]; 
    
  arr[i].innerHTML=img;
  arr[i].appendChild(img);}
  
  if(x==2 || x==3){
  var img = document.createElement('img'); 
    img.src = arr1[i+(x*x+1)]; 
  arr[i].innerHTML=img;
  arr[i].appendChild(img);}
  
  
  if(x==4){
    var img = document.createElement('img'); 
      img.src = arr1[i+15]; 
    arr[i].innerHTML=img;
    arr[i].appendChild(img);}

  if(x==5){
    var img = document.createElement('img'); 
      img.src = arr1[i+20]; 
    arr[i].innerHTML=img;
    arr[i].appendChild(img);}

}}
b.forEach(element => {element.onclick=()=>print(element.innerHTML);                                                      
});

}
}









 







