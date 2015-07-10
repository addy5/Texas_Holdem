$s1 = {suite: "s",value: 1, image: "spade/sa.png"};
$sa = {suite: "s",value: 14, image: "spade/sa.png"};
$s2 = {suite: "s",value: 2, image: "spade/s2.png"};
$s3 = {suite: "s",value: 3, image: "spade/s3.png"};
$s4 = {suite: "s",value: 4, image: "spade/s4.png"};
$s5 = {suite: "s",value: 5, image: "spade/s5.png"};
$s6 = {suite: "s",value: 6, image: "spade/s6.png"};

$h2 = {suite: "h",value: 2, image: "hearts/h2.png"};
$h3 = {suite: "h",value: 3, image: "hearts/h3.png"};
$h4 = {suite: "h",value: 4, image: "hearts/h4.png"};
var p2BestHand="";
var p2final=[];
var dealerCard1 = $s2;
var dealerCard2 = $s3;
var dealerCard3 = $s5;
var dealerCard4 = $s4;
var dealerCard5 = $h4;
var player2Card1 = $sa;
var player2Card2 = $h2;


//check for flush evaluations
//take p2 total cards   *********
  var p2suiteHand = [dealerCard1,dealerCard2,dealerCard3,dealerCard4,dealerCard5,player2Card1,player2Card2];
  //sort p1 total cards by suite  *********
      p2suiteHand.sort(function(a, b){
          if(a.suite < b.suite) return -1;
          if(a.suite > b.suite) return 1;
          return 0;
      });
//check for p2 flush and store winning suite  *********
      var p2flushSuit="";

      for (i = p2suiteHand.length-1; i > 3 ; i-=1){
        if(p2suiteHand[i].suite === p2suiteHand[i-1].suite && p2suiteHand[i].suite === p2suiteHand[i-2].suite && p2suiteHand[i].suite === p2suiteHand[i-3].suite && p2suiteHand[i].suite === p2suiteHand[i-4].suite){
          console.log("flush");
          p2BestHand = "flush";
          p2flushSuit = p2suiteHand[i].suite;
        }
        }
//take out any non winning suite cards *********
        var jp = 0;
        while(jp < p2suiteHand.length){
          if(p2suiteHand[jp].suite === p2flushSuit){
            jp++;
          } else {
            p2suiteHand.splice(jp,1);
          }
        }

//sort all like suite cards by value  *********
        p2suiteHand.sort(function(a, b){
            if(a.value < b.value) return -1;
            if(a.value > b.value) return 1;
            return 0;
        });
          if(p2BestHand === "flush"){
            p2final = [p2suiteHand[p2suiteHand.length-5].value, p2suiteHand[p2suiteHand.length-4].value, p2suiteHand[p2suiteHand.length-3].value, p2suiteHand[p2suiteHand.length-2].value, p2suiteHand[p2suiteHand.length-1].value];
            }

      //check for straight flush for p2
      if(p2flushSuit !==""){

        if(p2suiteHand[p2suiteHand.length-1].value === 14){
          if(p2flushSuit === "s"){
            p2suiteHand.unshift($s1);
          } else if(p2flushSuit === "h"){
            p2suiteHand.unshift($h1);
          } else if( p2flushSuit === "c"){
            p2suiteHand.unshift($c1);
          } else if( p1flushSuit === "d"){
            p2suiteHand.unshift($d1);
          }
        }

          var str9 = false;
          for (f = p2suiteHand.length-1; f > 3; f-=1){

            if(
              p2suiteHand[f].value-1 === p2suiteHand[f-1].value && p2suiteHand[f].value-2 === p2suiteHand[f-2].value && p2suiteHand[f].value-3 === p2suiteHand[f-3].value && p2suiteHand[f].value-4 === p2suiteHand[f-4].value && str9 === false){
                p2BestHand = "straightFlush";
                p2final = [p2suiteHand[f-4].value, p2suiteHand[f-3].value, p2suiteHand[f-2].value, p2suiteHand[f-1].value, p2suiteHand[f].value];
                str9 = true;
              }
            }
        }


console.log(p2BestHand);
console.log(p2final);
console.log(p2suiteHand);
console.log(p2suiteHand[p2suiteHand.length-1].value);
