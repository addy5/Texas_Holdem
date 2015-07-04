  var played = [];

  var draw = function(){
    var i=0;
    while (i < 1){
    var random = Math.round((Math.random()-0.49)*100);
    if (random > -1 && played.indexOf(random) < 0){
      console.log(random);
      i++;
      played.push(random);
      return random;}
    }
  };


$( document ).ready(function() {

  console.log("ready");

  $sa = {suite: "S",value: 14, image: "spade/sa.png"};
  $s2 = {suite: "S",value: 2, image: "spade/s2.png"};
  $s3 = {suite: "S",value: 3, image: "spade/s3.png"};
  $s4 = {suite: "S",value: 4, image: "spade/s4.png"};
  $s5 = {suite: "S",value: 5, image: "spade/s5.png"};
  $s6 = {suite: "S",value: 6, image: "spade/s6.png"};
  $s7 = {suite: "S",value: 7, image: "spade/s7.png"};
  $s8 = {suite: "S",value: 8, image: "spade/s8.png"};
  $s9 = {suite: "S",value: 9, image: "spade/s9.png"};
  $s10 = {suite: "S",value: 10, image: "spade/s10.png"};
  $sj = {suite: "S",value: 11, image: "spade/sj.png"};
  $sq = {suite: "S",value: 12, image: "spade/sq.png"};
  $sk = {suite: "S",value: 13, image: "spade/sk.png"};

  $ha = {suite: "h",value: 14, image: "hearts/ha.png"};
  $h2 = {suite: "h",value: 2, image: "hearts/h2.png"};
  $h3 = {suite: "h",value: 3, image: "hearts/h3.png"};
  $h4 = {suite: "h",value: 4, image: "hearts/h4.png"};
  $h5 = {suite: "h",value: 5, image: "hearts/h5.png"};
  $h6 = {suite: "h",value: 6, image: "hearts/h6.png"};
  $h7 = {suite: "h",value: 7, image: "hearts/h7.png"};
  $h8 = {suite: "h",value: 8, image: "hearts/h8.png"};
  $h9 = {suite: "h",value: 9, image: "hearts/h9.png"};
  $h10 = {suite: "h",value: 10, image: "hearts/h10.png"};
  $hj = {suite: "h",value: 11, image: "hearts/hj.png"};
  $hq = {suite: "h",value: 12, image: "hearts/hq.png"};
  $hk = {suite: "h",value: 13, image: "hearts/hk.png"};


  $ca = {suite: "c",value: 14, image: "clover/ca.png"};
  $c2 = {suite: "c",value: 2, image: "clover/c2.png"};
  $c3 = {suite: "c",value: 3, image: "clover/c3.png"};
  $c4 = {suite: "c",value: 4, image: "clover/c4.png"};
  $c5 = {suite: "c",value: 5, image: "clover/c5.png"};
  $c6 = {suite: "c",value: 6, image: "clover/c6.png"};
  $c7 = {suite: "c",value: 7, image: "clover/c7.png"};
  $c8 = {suite: "c",value: 8, image: "clover/c8.png"};
  $c9 = {suite: "c",value: 9, image: "clover/c9.png"};
  $c10 = {suite: "c",value: 10, image: "clover/c10.png"};
  $cj = {suite: "c",value: 11, image: "clover/cj.png"};
  $cq = {suite: "c",value: 12, image: "clover/cq.png"};
  $ck = {suite: "c",value: 13, image: "clover/ck.png"};

  $da = {suite: "d",value: 14, image: "diamond/da.png"};
  $d2 = {suite: "d",value: 2, image: "diamond/d2.png"};
  $d3 = {suite: "d",value: 3, image: "diamond/d3.png"};
  $d4 = {suite: "d",value: 4, image: "diamond/d4.png"};
  $d5 = {suite: "d",value: 5, image: "diamond/d5.png"};
  $d6 = {suite: "d",value: 6, image: "diamond/d6.png"};
  $d7 = {suite: "d",value: 7, image: "diamond/d7.png"};
  $d8 = {suite: "d",value: 8, image: "diamond/d8.png"};
  $d9 = {suite: "d",value: 9, image: "diamond/d9.png"};
  $d10 = {suite: "d",value: 10, image: "diamond/d10.png"};
  $dj = {suite: "d",value: 11, image: "diamond/dj.png"};
  $dq = {suite: "d",value: 12, image: "diamond/dq.png"};
  $dk = {suite: "d",value: 13, image: "diamond/dk.png"};

  var deck =  [$sa,$s2,$s3,$s4,$s5,$s6,$s7,$s8,$s9,$s10,$sj,$sq,$sk,
      $ha,$h2,$h3,$h4,$h5,$h6,$h7,$h8,$h9,$h10,$hj,$hq,$hk,
      $ca,$c2,$c3,$c4,$c5,$c6,$c7,$c8,$c9,$c10,$cj,$cq,$ck,
      $da,$d2,$d3,$d4,$d5,$d6,$d7,$d8,$d9,$d10,$dj,$dq,$dk];

    var dealerCard1 = deck[draw()];
    var dealerCard2 = deck[draw()];
    var dealerCard3 = deck[draw()];


    var player1Card1 = deck[draw()];
    var player1Card2 = deck[draw()];

    var player2Card1 = deck[draw()];
    var player2Card2 = deck[draw()];


  $('button').on('click',function(){
    $('#cardA').attr('src',dealerCard1.image);
    $('#cardB').attr('src',dealerCard2.image);
    $('#cardC').attr('src',dealerCard3.image);

    $('#cardP1C1').attr('src',player1Card1.image);
    $('#cardP1C2').attr('src',player1Card2.image);

    $('#cardP2C1').attr('src',player2Card1.image);
    $('#cardP2C2').attr('src',player2Card2.image);

  });



});
