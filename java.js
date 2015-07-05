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
  $('.playerContainer.player2').hide(2000);
  $('.playerContainer.player1').hide(2000);
  $('.playerContainer.hide').hide(2000);

  $sa = {suite: "s",value: 14, image: "spade/sa.png"};
  $s2 = {suite: "s",value: 2, image: "spade/s2.png"};
  $s3 = {suite: "s",value: 3, image: "spade/s3.png"};
  $s4 = {suite: "s",value: 4, image: "spade/s4.png"};
  $s5 = {suite: "s",value: 5, image: "spade/s5.png"};
  $s6 = {suite: "s",value: 6, image: "spade/s6.png"};
  $s7 = {suite: "s",value: 7, image: "spade/s7.png"};
  $s8 = {suite: "s",value: 8, image: "spade/s8.png"};
  $s9 = {suite: "s",value: 9, image: "spade/s9.png"};
  $s10 = {suite: "s",value: 10, image: "spade/s10.png"};
  $sj = {suite: "s",value: 11, image: "spade/sj.png"};
  $sq = {suite: "s",value: 12, image: "spade/sq.png"};
  $sk = {suite: "s",value: 13, image: "spade/sk.png"};

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
    var dealerCard4 = deck[draw()];
    var dealerCard5 = deck[draw()];

    var player1Card1 = deck[draw()];
    var player1Card2 = deck[draw()];

    var player2Card1 = deck[draw()];
    var player2Card2 = deck[draw()];


  $('.next').on('click',function(){

    $('#cardA').attr('src',dealerCard1.image);
    $('#cardB').attr('src',dealerCard2.image);
    $('#cardC').attr('src',dealerCard3.image);

    $('#cardP1C1').attr('src',player1Card1.image);
    $('#cardP1C2').attr('src',player1Card2.image);

    $('#cardP2C1').attr('src',player2Card1.image);
    $('#cardP2C2').attr('src',player2Card2.image);


        var player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player1Card1.value, player1Card2.value];
        player1hand = player1hand.sort(function(a, b){return a-b;});

        console.log("P1 Hand: "+player1hand);

        var player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player2Card1.value, player2Card2.value];
        player2hand = player2hand.sort(function(a, b){return a-b;});

        console.log("P2 Hand: "+player2hand);
  });


//highlight  player1 tab when selected *************************
    $(".player1tab").on('click',function(){
    $('.playerContainer.active').slideUp(500, function(){
          $('.playerContainer.player1').slideDown(800);
    });
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.player1').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".player1tab").addClass('highlight');

  });

//highlight  player2 tab when selected *************************
  $(".player2tab").on('click',function(){
    $('.playerContainer.active').slideUp(500, function(){
          $('.playerContainer.player2').slideDown(800);
    });
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.player2').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".player2tab").addClass('highlight');

  });

//clear both tabs when selected  *************************
  $(".playerHide").on('click',function(){
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.player2').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".playerHide").addClass('highlight');
    $('.playerContainer.player2').slideUp(500);
    $('.playerContainer.player1').slideUp(500);
  });


//move fourth card code *************************
  var topp = 20;
  var right = 50;

  var moveCard4 = function(){
    console.log("works");
    if(topp < 46 || right < 325){
    topp = topp + 0.591;
    right = right + 6;
    $('#card').css('top',topp);
    $('#card').css('right',right);
    }else{
      $('#card').attr('src',dealerCard4.image);
      $('#cardD').hide();
      clearInterval();
    }
  };


  var addMove4 = function(){
    setInterval(moveCard4,15);
    var player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player1Card1.value, player1Card2.value, dealerCard4.value];

    player1hand = player1hand.sort(function(a, b){return a-b;});


    console.log("P1 Hand: "+player1hand);

    var player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player2Card1.value, player2Card2.value, dealerCard4.value];
    player2hand = player2hand.sort(function(a, b){return a-b;});

    console.log("P2 Hand: "+player2hand);
  };

$('#card').on('click',addMove4);


//move river card code *************************
  var top1 = 18;
  var right1 = 48;

  var moveCard5 = function(){
    console.log("works");
    if(top1 < 46 || right1 < 167){
    top1 = top1 + 2;
    right1 = right1 + 15;
    $('#card1').css('top',top1);
    $('#card1').css('right',right1);
    }else{
      $('#card1').attr('src',dealerCard5.image);
      // $('#cardE').hide();
      clearInterval(addMove5);
    }
  };


  var addMove5 = function(){
    setInterval(moveCard5,15);
    var player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player1Card1.value, player1Card2.value, dealerCard4.value, dealerCard5.value];

    player1hand = player1hand.sort(function(a, b){return a-b;});


    console.log("P1 Hand: "+player1hand);

    var player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player2Card1.value, player2Card2.value, dealerCard4.value, dealerCard5.value];
    player2hand = player2hand.sort(function(a, b){return a-b;});

    console.log("P2 Hand: "+player2hand);
  };

$('#card1').on('click',addMove5);


});
