

var min=0;
var sec=0;
var milisec=0;


var getMin=document.getElementById('min');
var getSec=document.getElementById('sec');
var getMsec=document.getElementById('milisec');

function timer()
{
    milisec++;
    getMsec.innerHTML=milisec;

    if(milisec >= 100)
    {
        sec++;
        getSec.innerHTML=sec;
        milisec = 0;
    }
    else  if(sec >= 60)
    {
        min++;
        getMin.innerHTML=min;
        sec = 0;
        
    }
    
}


function start()
{   
      interval = setInterval(timer,10);
      document.getElementById('strt').disabled=true;
}


function stop()
{   
    clearInterval(interval);
    document.getElementById('strt').disabled=false;

}

function reset()
{   
    min=0;
    sec=0;
    milisec=0;
    getMin.innerHTML=min;
    getSec.innerHTML=sec;
    getMsec.innerHTML=milisec;
    stop();
    document.getElementById('strt').disabled=false;

}