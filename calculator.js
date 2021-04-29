
var Input=document.getElementById("inputArea");
var Result=document.getElementById("ResultArea");
var num1=null;
var num2="";
var oper="";

var Btn=[];
for(let i=0;i<16;i++){
    Btn[i]=document.getElementById(`${i}`);
    Btn[i].addEventListener('click',()=>{
        var txt=Input.value;
        Input.focus();
        if(Btn[i].innerHTML>=0&&Btn[i].innerHTML<=9){
            txt+=Btn[i].innerHTML;
            Input.value=txt;
            Result.value+=Btn[i].innerHTML;
        }
        else if(Btn[i].innerHTML=='+'){
            if(txt.toString()!=""){
                num1=parseInt(txt);
                txt="";
                Input.value=txt;
                Result.value+=Btn[i].innerHTML;
                oper='+';
            }
        }
        else if(Btn[i].innerHTML=='-'){
            if(txt.toString()!=""){
                num1=parseInt(txt);
                txt="";
                Input.value=txt;
                Result.value+=Btn[i].innerHTML;
                oper='-';
            }
        }
        else if(Btn[i].innerHTML=='*'){
            if(txt.toString()!=""){
                num1=parseInt(txt);
                txt="";
                Input.value=txt;
                Result.value+=Btn[i].innerHTML;
                oper='*';
            }
        }
        else if(Btn[i].innerHTML=='/'){
            if(txt.toString()!=""){
                num1=parseInt(txt);
                txt="";
                Input.value=txt;
                Result.value+=Btn[i].innerHTML;
                oper='/';
            }
        }
        else if(Btn[i].innerHTML=='C'){
            if(txt.toString()!=""){
                txt="";
                Input.value=txt;
                Result.value="";
                oper="";
                num1=null;
                num2="";
            }
        }
        else if(Btn[i].innerHTML=='='&&num1!=null&&txt.toString()!=""){
            Result.value+=Btn[i].innerHTML;
            
            if(num1=="") num1=0;
            num2=parseInt(txt);
            /* console.log(num1);
            console.log(num2); */
            
            if(oper=='+'){
                Input.value=num1+num2;
                Result.value+=num1+num2;
            }
            else if(oper=='-'){
                Input.value=num1-num2;
                Result.value+=num1-num2;
            }
            else if(oper=='*'){
                Input.value=num1*num2;
                Result.value+=num1*num2;
            }
            else if(oper=='/'){
                Input.value=num1/num2;
                Result.value+=num1/num2;
            }
            num1=null;
            num2="";
            oper="";
        }   
       
    });

}


