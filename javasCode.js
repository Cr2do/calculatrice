var Areplaying=true;
var score;
var Tvalue;
var c;


// if we click on the start/reset button
document.getElementById("start").onclick=function()
{
    //if c''est ppas en couurs
    if(Areplaying===false){
        //reload the page
        location.reload();
    }      
    //if c'est en cours
    if(Areplaying===true){
        //set score to zero
        score=0;
        document.getElementById("scorevalue").innerHTML=score;


        //show countdown box
        document.getElementById("time").style.display="block";
        
        //change mode
        Areplaying=false;

        //hide game over box
        document.getElementById("gameOver").style.display="none";
        
        //generate new Q&A
        generateNQA() ;
       
        
        //change button to reset  
        document.getElementById("start").innerHTML="Reset Game";

        //reduce time by 1 sec in loops
       Tvalue=60;
       document.getElementById("timevalue").innerHTML=Tvalue;
       countdown();
    }       
}
  

for(i=1;i<=4;i++)
{//if we click on box
document.getElementById("div"+i).onclick=function (){
    if(Areplaying==false)//if we are playing 
    {
        if(this.innerHTML==c)//correct?//yes
        {
            score++;//increase the score by one
            document.getElementById("scorevalue").innerHTML=score;
            document.getElementById("correct").style.display="block";
            //document.getElementById("try").style.display="none";
            setTimeout(function (){
                document.getElementById("correct").style.display="none";
            }, 1000);//show the correct box for 1 sec
            generateNQA();//Generate new Q&A 
        }else //no
        {
            document.getElementById("correct").style.display="none";
            document.getElementById("try").style.display="block";
           
            setTimeout(function (){
                document.getElementById("try").style.display="none";
            }, 1000);//show try again box for one sec
        }
    }
}
}       
        

/**
 *
 * Les  fonctions que jai frrequeenmmment utillisé
 * 
 * 
 * 
 */




function generateNQA()
    {
        var a=1+ Math.round(Math.random()*9);
        var b=1+Math.round(Math.random()*9);
        var numb=1+Math.round(Math.random()*3);
        c=a*b;
        document.getElementById("quiz").innerHTML=a+"x"+b;
        document.getElementById("div"+numb).innerHTML=c;
        var doublon =[c];
        for(i=1;i<=4;i++)
        {
            if(i!=numb)
            {
                var fal;
                do
                {
                    fal=(1+ Math.round(Math.random()*9))*(1+ Math.round(Math.random()*9));
                }while(doublon.indexOf(fal)>-1);
                doublon.push(fal);
                document.getElementById("div"+i).innerHTML=fal;
            }
        }    
    }

   function  countdown(){
    var loop=setInterval(function (){
        
        Tvalue-=1;
        document.getElementById("timevalue").innerHTML=Tvalue;
      //time left?
        //yes->continue
        //no->gameOver
        if(Tvalue==0)
        {
            clearInterval(loop);
            document.getElementById("gameOver").style.display="block";
            document.getElementById("gameOver").innerHTML="<p>game over!</p> <p>your score is "+ score +".</p>";
            document.getElementById("time").style.display="none";
            document.getElementById("start").innerHTML="Start Game"
            Areplaying=true;           
        }
    },1000); 
   } 

