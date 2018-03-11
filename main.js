// $(document).ready(function(){
//  alert('読み込まれているか実験')
// });
//
// $(document).ready(function(){
//  alert('読み込まれているか実験')
// });
//
// $(document).ready(function(){
//  var box ='変数の中身のテスト';
//  alert('読み込まれているか実験');
//  console.log(1);
// });

$(document).ready(function(){
  $('.box').on('click', function(){
  alert("押されたよ");
  console.log("押されたよ");
});

$('#js').on('click',function(){
　var elem = '<a href="#">次ページ</a>';
  $("#js").html(elem);
  // $("#js").text(elem);
  // $("#js").css("color","#ff0");
  $("#js").show(4000); //hide
  // $("#js").prepend(elem); //要素の先頭にHTML要素を追加
  // $("#js").append(elem);  //要素の最後にHTML要素を追加
  // $("#js").empty(); //子要素を全て削除
  // $("#js").remove(); //要素を全て削除
});


// 演習1ここから
// var count = "0";
//
// $('#hide').on('click',function(){
//   $('#ex').hide(2000);
// });
// $('#show').on('click',function(){
//   $('#ex').show(2000);
//   count++;
//   $("#ex").html(count);
//   $("#ex").css("border",count +"px solid");
// });
// 演習1ここまで

// 演習2ここから
var p1 = "<p>かきくけこ</p>";
var p2 = "<p>あいうえお</p>";
var p3 = "<p>さしすせそ</p>";

$('#ex').hide().fadeIn(4000);
$('#ex').html(p1);
$('#ex').prepend(p2);
$('#ex').append(p3);
//

$('#ex').css("color","#fff");
$('#ex').css("background-color","#000");
$('#ex>:odd').css("background-color","#fff");

// http://www.searchlight8.com/jquery-background-color-change/
});
