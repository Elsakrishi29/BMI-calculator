function calculation(){
    let yweight=parseInt(document.getElementById("weight").value);
    let yheight=parseInt(document.getElementById("height").value);
    let convertheight_m=yheight/100;
    let bmi= yweight/(convertheight_m*convertheight_m);
    if(bmi<18){
          document.getElementById('output').style.color="yellow"
          document.getElementById('output').innerText="Your Weight Under Weight: " + bmi;

    }
    else if(bmi>18 && bmi<25){
          document.getElementById('output').style.color="green"
          document.getElementById('output').innerText="Your Weight Correct Weight: " + bmi;
    }
    else if(bmi>25){
          document.getElementById('output').style.color="red"
          document.getElementById('output').innerText="Your Weight Over Weight: " + bmi;
    } 

}

