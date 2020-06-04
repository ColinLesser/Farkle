function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");
    var display = document.getElementById("display");

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var d6 = Math.floor(Math.random() * 6) + 1;
    var displayTotal = 0;
    var rollAmount = [d1,d2,d3,d4,d5,d6];
    var i,j,k;
    var count = 0;;
    var num1 = 0;

    for(i = 0; i < rollAmount.length; i++)
    {
        if(rollAmount[i] == 1)
        {
            rollAmount[i] = 100;
            num1++;
            if(num1 == 3)
            {
                rollAmount[i] = 1000;
            }
        }
        if(rollAmount[i] == 5)
        {
            rollAmount[i] = 50;
        }
        for(j = i+1; j < rollAmount.length; j++)
        {
            if(rollAmount[i] == rollAmount[j])
                {
                    count++;
                }
            for(k = j+1; k < rollAmount.length; k++)
            {
                
                if(rollAmount[j] == rollAmount[k])
                {
                    count++;
                    if(count ==3)
                    {
                        rollAmount[i*100];
                        displayTotal= displayTotal + rollAmount[i];
                    }
                    
                }
            }
        }
    }
    
    
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;

   
   
    display.innerHTML = "You rolled "+ displayTotal;


}
function bankScore(diceTotal){
    var bank = diceTotal;
    displayBank.innerHTML = "Banked total is "+ bank;
}