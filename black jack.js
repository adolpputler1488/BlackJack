function getRandomInt() {
return Math.floor(Math.random() ;
}

function getCard(){
    var cards = ["2","3","4","5", "6","7","8","9","10","J","Q","K","A"];
    return cards {getRandomInt()} 
}
function Sum(arr){
    var Sum =0;
    for(var=i;i<arr;i++){
        if(arr[i]!="A") {
 	if (arr[i]=="J" || arr[i]=="Q" || arr[i]=="K") arr[i]=10;
 	if(arr[i]=="A") arr[i]=11;
 	else arr[i]=parseInt(arr[i]); 
 	Sum+=arr[i];
        
    }
} 
    function getStatus(){
        return "diller:"+ diller.join('')+" player:"+player.join('');
    }
var diller=[getCard(),getCard];
var player=[getCard(),getCard];
var answer="";
while{if(getSum(player)==21 || getSum(player)>21)
break;
}
    answer = prompt(getStatus() + " - Хотите еще карту? 1 - да, иначе любая клавиша");
// сдаем карту игроку или прекращаем игру
if (answer == "1") player.push(getCard());
} while(answer =="1");

/*alert(getStatus());
if (getSum(player)==21) alert("Набрано 21 очко. Вы выиграли!");
else if (getSum(player)>21) alert("Перебор! Набрано " + getSum(player) + " очков.");
else if (getSum(player)<21 && getSum(player)>getSum(diller)) alert("Набрано! " + getSum(player) + " очков. Вы выиграли!");
else if (getSum(player)<21 && getSum(player)<getSum(diller)) alert("Набрано! " + getSum(player) + " очков. Вы проиграли!");
else alert("Набрано! " + getSum(player) + " очков. Ничья!");
</script>
*/
    Function result();
    var result=0;
    if(getSum (player)==21 ||getSum(player)=<21&&getSum(player)>getSum(diller));
    result =++;
    else if (getSum(player)>21) alert("перебор,Вы проиграли")
    result=--;
  if(getSum (diller)==21 ||getSum(diller)=<21&&getSum(player)<getSum(diller));
    result=--;
     else if (getSum(diller)>21) alert("перебор,Игрок победил")
    result=++;
    return result;
    
    
   
 





