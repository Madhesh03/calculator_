let truedisplay= document.getElementById("result");
let a=null;
let b=null;
let operator='';
let res="";

const allNumbers= Array.from(document.querySelectorAll("#a"));
const operators=Array.from(document.querySelectorAll("#operator"));
allNumbers.forEach(item => item.addEventListener('click',hi));
operators.forEach(item =>item.addEventListener('click',op));
document.getElementById('equals').addEventListener('click',po);

function po(){
    truedisplay.textContent= operation(a,operator,b);
    a=truedisplay.textContent;
    b=null;
    operator="";
}
function op(){
   truedisplay.textContent = this.textContent;
   operator=truedisplay.textContent;
}
function hi() {
         
         if(a== null){
            truedisplay.textContent = this.textContent;
             a=truedisplay.textContent;
        }
        else if(a!=null && operator!= "" && b ==null) {
            truedisplay.textContent=this.textContent;
            b= truedisplay.textContent;
        } else if(a!=null && operator == "") {
            truedisplay.textContent =truedisplay.textContent +this.textContent;
            a = truedisplay.textContent;
        } else if(a!=null && operator != "" && b!=null){
            truedisplay.textContent=truedisplay.textContent +this.textContent;
            b=truedisplay.textContent;
        }
     

}

   function operation(){


if(operator == '+'){
    res= parseFloat(a)+parseFloat(b);
}

else if (operator == "-"){
    res= parseFloat(a)-parseFloat(b);
}

else if (operator== "/"){
   res= parseFloat(a)/parseFloat(b);
}

else if (operator== "*"){
    res= parseFloat(a)*parseFloat(b);
}
  return res;

}

//function vari(numb)
document.getElementById('clear').addEventListener('click', clear)
 
function clear(){
    truedisplay.textContent   = '0';
    a=null;
    b=null;
    operator=""

   
}

function display(){
    return truedisplay;
}
//document.getElementById(
   


