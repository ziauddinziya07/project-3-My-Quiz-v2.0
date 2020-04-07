var cs = false, noncs = false;
var present = 1;
var queid = "#q";
var presentQ = "";
var res = [false, false, false, false, false, false, false, false, false, false];
var check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var count = 0;
var name = "";
var t = 600;

if ( window.innerHeight > 1200 )
{
      document.body.style.overflow = "hidden";
} 

// Function for Ink Transition
function fun()
{     
      window.scrollTo(0,0);
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("#demo").style.display = "block";    
      document.querySelector("#demo").setAttribute("class", "forward");
      setTimeout(function(){document.querySelector("#demo").setAttribute("class", "reverse");}, 900);  
      setTimeout(function() {
            document.querySelector("#demo").style.display = "none";
            if ( window.innerHeight < 1200 ) document.querySelector("body").style.overflow = "auto";
      }, 1700);
}

// Functions for Wrappers
function fun1()
{
      name = document.querySelector("#name").value;
      if ( name.length )
      {
            document.querySelector(".cont1").style.display = "none";
            if ( window.innerHeight >= 1200 )
            {
                  document.querySelector(".cont2").style.display = "block";
                  document.querySelector("#par").innerHTML = name;
            }
            else{document.querySelector(".cont3").style.display = "block";}
      }
      else
      {
            document.querySelector("#warn").innerHTML = "Note: Please Enter your Name....!";
      }
}
function con()
{
      document.querySelector(".cont2").style.display = "none";
      document.querySelector(".cont3").style.display = "block";
}
function fun2()
{
      cs = document.querySelector("#cs").checked;
      noncs = document.querySelector("#noncs").checked;

      if ( cs || noncs )
      {
            fun();
            setTimeout(function(){document.querySelector(".wrapper").style.display = "none";}, 1000);
            document.querySelector(".main").removeAttribute("style");
            if ( cs )
            {
                  queid = "#csq";
                  document.querySelector("#csq1").setAttribute("style", "display: block");
                  document.querySelector("#btn1").setAttribute("class", "btn active");
                  presentQ = ("#csq1");
            }
            else
            {
                  document.querySelector("#q1").setAttribute("style", "display: block");
                  document.querySelector("#btn1").setAttribute("class", "btn active");                  
                  presentQ = ("#q1");    
            }
            
            var temp = setInterval(function() {
                  if ( t == 60 ) { document.querySelector("#time").setAttribute("style", "animation: time 1s infinite;"); }
                  if ( t -- ) { document.querySelector("#time").innerHTML = (( t < 600 ) ? "0" + parseInt(t / 60) : parseInt(t / 60)) + " : " + (( t % 60 < 10 ) ? "0"  + t % 60 : t % 60); }
                  else { result(); clearTimeout(temp); }
            }, 1000);
            document.querySelector(".timer #name").innerHTML += name;
      }
      else{document.querySelector("#lab").innerHTML = "Note: Please select atleast one option...!!";}

}

// Navigating from one question to another...
function jump(no)
{
      let temp;
      var btn = "#btn" + no.toString();
      
      for ( let i = 1; i <= 4; i ++ )
      {
            if ( document.querySelector(presentQ + " .opt" + i.toString() ).checked )
            {
                  check[present - 1] = i;
                  break;
            }
      }
      switch ( present )
      {
            case 1: temp = 1; break;
            case 2: temp = 2; break;
            case 3: temp = 4; break;
            case 4: temp = 3; break;
            case 5: temp = 3; break;
            case 6: temp = 2; break;
            case 7: temp = 4; break;
            case 8: temp = 1; break;
            case 9: temp = 4; break;
            case 10: temp = 3; break;
      }
      res[present - 1] = document.querySelector(presentQ + " .opt" + temp.toString() ).checked;



                 
      present = no;
      document.querySelector(".active").setAttribute("class", "btn");
      document.querySelector(btn).setAttribute("class", "btn active");
      document.querySelector(presentQ).style.display = "none";
      presentQ = queid + no.toString();
      document.querySelector(presentQ).style.display = "block";            
      if ( check[present - 1] )
      {
            document.querySelector(presentQ + " .opt" + check[present - 1].toString() ).checked = true;
      }

}

function next()
{
      if ( present < 10 )
            jump(present + 1);
      else
            jump(1);
}

// Calculating Result
function result()
{
      switch ( present )
      {
            case 1: temp = 1; break;
            case 2: temp = 2; break;
            case 3: temp = 4; break;
            case 4: temp = 3; break;
            case 5: temp = 3; break;
            case 6: temp = 2; break;
            case 7: temp = 4; break;
            case 8: temp = 1; break;
            case 9: temp = 4; break;
            case 10: temp = 3; break;
      }
      res[present - 1] = document.querySelector(presentQ + " .opt" + temp.toString() ).checked;

      for ( let i = 0; i < 10; i ++ )
      {
            if ( res[i] )
                  count ++;
      }
      fun();      
      document.querySelector("body").style.overflow = "hidden";
      setTimeout(function(){
            document.querySelector(".main").style.display = "none"; 
            document.querySelector(".result").style.display = "block";
            document.querySelector(".result #name").innerHTML = name
            document.querySelector(".decoration").style.display = "block"; 
            if ( count < 10 )
                  document.querySelector(".score").innerHTML = "0" + count + " / 10";
            else
                  document.querySelector(".score").innerHTML = count + " / 10"; 
      }, 1000);
}