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

  var player1Total = 195;
  var player2Total = 190;
  var player1Bet = 5;
  var player2Bet = 10;

  //callCount must be > 1 in a round to proceed
  var player2Moved = false;
  // if currentRound = 1 (next fourth); if currentRound = 2 (river)
  var currentRound = 1;


$( document ).ready(function() {

  console.log("ready");

  $('.p1total').text("$"+player1Total);
  $('.p2total').text("$"+player2Total);
  $('.p1bet').text("$"+player1Bet);
  $('.p2bet').text("$"+player2Bet);


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
    moveDC1();
    setTimeout(moveDC2,1000);
    setTimeout(moveDC3,2000);
    $('.playerContainer.player2').slideDown(300);
    $('.playerContainer.player1').slideDown(300);
    $('.playerContainer.player2').hide(2000, function(){
      $('.playerContainer.player1').hide(2000, function(){
        $('.playerContainer.hide').hide(200, flopDelay);
      });
    });


    var flopDelay = function(){
      setTimeout(displayFlop,500);
    };

    var displayFlop = function(){
      $('#cardA').attr('src',dealerCard1.image);
      $('#cardB').attr('src',dealerCard2.image);
      $('#cardC').attr('src',dealerCard3.image);
      $('#cardP1C1').attr('src',player1Card1.image);
      $('#cardP1C1').css('opacity',1);
      $('#cardP1C2').attr('src',player1Card2.image);
      $('#cardP1C2').css('opacity',1);
      $('#cardP2C1').attr('src',player2Card1.image);
      $('#cardP2C1').css('opacity',1);
      $('#cardP2C2').attr('src',player2Card2.image);
      $('#cardP2C2').css('opacity',1);
    };


        var player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player1Card1.value, player1Card2.value];
        player1hand = player1hand.sort(function(a, b){return a-b;});

        var player1suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, player1Card1.suite, player1Card2.suite];
        player1suites = player1suites.sort();


        console.log("P1 Hand: "+ player1hand + " "+player1suites);

        var player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player2Card1.value, player2Card2.value];
        player2hand = player2hand.sort(function(a, b){return a-b;});

        var player2suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, player2Card1.suite, player2Card2.suite];
        player2suites = player2suites.sort();

        console.log("P2 Hand: "+player2hand + " "+player2suites);
  });

  // var addMovep1c1 = function(){
  //   var tops = 20;
  //   var right = 50;
  //
  //   var cardmove = setInterval(function(){
  //     console.log("works");
  //     if(tops < 330 && right < 620){
  //     tops = tops + 14.31;
  //     right = right + 26.5;
  //     $('#cardX1').css('top',tops);
  //     $('#cardX1').css('right',right);
  //     }else{
  //       clearInterval(cardmove);
  //     }
  //
  //   },20);
  // };

  var moveDC1 = function(){
    var tops = 20;
    var right = 50;

    var cardmove = setInterval(function(){
      console.log("works");
      if(tops < 46 && right < 642){
      tops = tops + 1.13;
      right = right + 26.28;
      $('#cardA').css('top',tops);
      $('#cardA').css('right',right);
      }else{
        clearInterval(cardmove);
      }

    },40);
  };

  var moveDC2 = function(){
    var tops = 20;
    var right = 50;

    var cardmove = setInterval(function(){
      console.log("works");
      if(tops < 46 && right < 540){
      tops = tops + 1.27;
      right = right + 24.8;
      $('#cardB').css('top',tops);
      $('#cardB').css('right',right);
      }else{
        clearInterval(cardmove);
      }

    },40);
  };

  var moveDC3 = function(){
    var tops = 20;
    var right = 50;

    var cardmove = setInterval(function(){
      console.log("works");
      if(tops < 46 && right < 430){
      tops = tops + 1.1;
      right = right + 16.05;
      $('#cardC').css('top',tops);
      $('#cardC').css('right',right);
      }else{
        clearInterval(cardmove);
      }

    },40);
  };


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

  var addMove4 = function(){
    var topp = 20;
    var right = 50;

    var card4move = setInterval(function(){
      console.log("works");
      if(topp < 46 || right < 325){
      topp = topp + 0.591;
      right = right + 6;
      $('#card').css('top',topp);
      $('#card').css('right',right);
      }else{
        $('#card').attr('src',dealerCard4.image);
        $('#cardD').hide();
        player2Moved = false;
        currentRound++;
        clearInterval(card4move);
      }

    },18);

    player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, dealerCard4.value, player1Card1.value, player1Card2.value];
    player1hand = player1hand.sort(function(a, b){return a-b;});

    player1suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, player1Card1.suite, player1Card2.suite];
    player1suites = player1suites.sort();


    console.log("P1 Hand: "+ player1hand + " "+player1suites);

    player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, dealerCard4.value, player2Card1.value, player2Card2.value];
    player2hand = player2hand.sort(function(a, b){return a-b;});

    player2suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, player2Card1.suite, player2Card2.suite];
    player2suites = player2suites.sort();

    console.log("P2 Hand: "+player2hand + " "+player2suites);
  };

$('#card').on('click',addMove4);


//move river card code *************************


  var addMove5 = function(){
    var top1 = 18;
    var right1 = 48;
    var card5move = setInterval(function(){
      console.log("works");
      if(top1 < 46 || right1 < 167){
      top1 = top1 + 0.71;
      right1 = right1 + 4.23;
      $('#card1').css('top',top1);
      $('#card1').css('right',right1);
      }else{
        $('#card1').attr('src',dealerCard5.image);
        $('#cardE').hide();
        player2Moved = false;
        currentRound++;
        clearInterval(card5move);
      }
    },18);

    player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player1Card1.value, player1Card2.value, dealerCard4.value, dealerCard5.value];
    player1hand = player1hand.sort(function(a, b){return a-b;});

    player1suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, dealerCard5.suite, player1Card1.suite, player1Card2.suite];
    player1suites = player1suites.sort();

    console.log("P1 Hand: "+ player1hand + " "+player1suites);

    player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player2Card1.value, player2Card2.value, dealerCard4.value, dealerCard5.value];
    player2hand = player2hand.sort(function(a, b){return a-b;});

    player2suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, dealerCard5.suite, player2Card1.suite, player2Card2.suite];
    player2suites = player2suites.sort();

    console.log("P2 Hand: "+player2hand + " "+player2suites);
  };

$('#card1').on('click',addMove5);

//Player 1 raise  bid ********************************
  var raisep1 = function(){
    if (player1Total === 0 || player1Bet >= (player2Bet + player2Total)){
      return null;
    } else{
        player1Bet = player1Bet + 5;
        player1Total = player1Total - 5;
        $('.p1bet').text('$'+player1Bet);
        $('.p1total').text('$'+player1Total);
      }
  };
$('#p1raise').on('click',raisep1);

//Player 2 raise  bid ********************************
  var raisep2 = function(){
    if (player2Total === 0 || player2Bet >= (player1Bet + player1Total)){
      return null;
    } else{
        player2Bet = player2Bet + 5;
        player2Total = player2Total - 5;
        $('.p2bet').text('$'+player2Bet);
        $('.p2total').text('$'+player2Total);
        player2Moved = true;
      }
  };
$('#p2raise').on('click',raisep2);

//Player 1 fold   ********************************
  var foldp1 = function(){
    var oldP2Bet = player2Bet;
    player2Bet = 10;
    player2Total = player2Total + player1Bet + oldP2Bet - player2Bet;
    player1Bet = 5;
    player1Total = player1Total - player1Bet;
    $('.p1bet').text('$'+player1Bet);
    $('.p1total').text('$'+player1Total);

    $('.p2bet').text('$'+player2Bet);
    $('.p2total').text('$'+player2Total);

    //hide player containers
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.player2').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".playerHide").addClass('highlight');
    $('.playerContainer.player2').slideUp(500);
    $('.playerContainer.player1').slideUp(500);
    currentRound = 0;
  };

$('#p1fold').on('click',foldp1);

//Player 2 fold   ********************************
  var foldp2 = function(){
    var oldP1Bet = player1Bet;
    player1Bet = 5;
    player1Total = player1Total + player2Bet + oldP1Bet - player1Bet;
    player2Bet = 10;
    player2Total = player2Total - player2Bet;
    $('.p2bet').text('$'+player2Bet);
    $('.p2total').text('$'+player2Total);

    $('.p1bet').text('$'+player1Bet);
    $('.p1total').text('$'+player1Total);

    //hide player containers
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.player2').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".playerHide").addClass('highlight');
    $('.playerContainer.player2').slideUp(500);
    $('.playerContainer.player1').slideUp(500);
    player2Moved = true;
    currentRound = 1;

  };

$('#p2fold').on('click',foldp2);

//Player 1 Call   ********************************
  var callp1 = function(){

    if (player1Bet > player2Bet){
      return null;
    } else {
      var oldP1Bet = player1Bet;
      player1Bet = player1Bet + (player2Bet - player1Bet);
      player1Total = player1Total - player1Bet + oldP1Bet;

      $('.p1bet').text('$'+player1Bet);
      $('.p1total').text('$'+player1Total);
      $('.p2bet').text('$'+player2Bet);
      $('.p2total').text('$'+player2Total);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.player2').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);
    }

    if(player1Bet === player2Bet && currentRound === 1 && player2Moved === true){
      setTimeout(addMove4,3000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.player2').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

    if(player1Bet === player2Bet && currentRound === 2 && player2Moved === true){
      setTimeout(addMove5,3000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.player2').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

  };

$('#p1call').on('click',callp1);

//Player 2 Call   ********************************
  var callp2 = function(){

    if (player2Bet > player1Bet){
      return null;
    } else {
      var oldP2Bet = player2Bet;
      player2Bet = player2Bet + (player1Bet - player2Bet);
      player2Total = player2Total - player2Bet + oldP2Bet;

      $('.p1bet').text('$'+player1Bet);
      $('.p1total').text('$'+player1Total);
      $('.p2bet').text('$'+player2Bet);
      $('.p2total').text('$'+player2Total);
      player2Moved = true;

    }

    if(player1Bet === player2Bet && currentRound === 1){
      setTimeout(addMove4,3000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.player2').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);


    }

    if(player1Bet === player2Bet && currentRound === 2){
      setTimeout(addMove5,3000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.player2').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

  };

$('#p2call').on('click',callp2);


// winner evaluation *************************************

//player1hand   player1suites

var winna = function() {
  for (i = 0; i < 3; i++){
    if(player1suites[i] === player1suites[i+1] && player1suites[i] === player1suites[i+2] && player1suites[i] === player1suites[i+3]  && player1suites[i] === player1suites[i+4]){
    console.log('flush player 1 alert');
    }
  }

  for (i = 0; i < 3; i++){
    if(player2suites[i] === player2suites[i+1] && player2suites[i] === player2suites[i+2] && player2suites[i] === player2suites[i+3]  && player2suites[i] === player2suites[i+4]){
    console.log('flush player 2 alert');
    }
  }

  for (i = 0; i < 3; i++){
    if(player1hand[i] === player1hand[i+1] && player1hand[i] === player1hand[i+2] && player1hand[i] === player1hand[i+3]  && player1hand[i] === player1hand[i+4]){
    console.log('flush player 1 alert');
    }
  }

  for (i = 0; i < 3; i++){
    if(player2hand[i] === player2hand[i+1] && player2hand[i] === player2hand[i+2] && player2hand[i] === player2hand[i+3]  && player2hand[i] === player2hand[i+4]){
    console.log('flush player 2 alert');
    }
  }
};


});
