$(".sample-btn").click(function () {
  // $("h1").html("jQueryの練習です。");
  // $("h1").addClass("red");

  $("h1").html("jQueryの練習です。").addClass("red");
});

//////////////////////////////////////////
/////////////    変数宣言   //////////////
//////////////////////////////////////////
const sampleText = "Sample Text";
const sampleNumber = 12;
console.log(sampleText);
console.log(sampleNumber);

//////////////////////////////////////////
//////////////    Method   ///////////////
//////////////////////////////////////////

const result = $(".underline").html();
console.log(result);

// .html()
// $(".method-btn").click(function () {
//   $("ul").html("<li>Option3</li>");
// });

// append() method
$(".method-btn").click(function () {
  $("ul").append("<li>Option3</li>");
});

// text()
const pText = $("p").text();
console.log(pText);

// textの出力
$(".method-btn").click(function () {
  $("p").text("テキストを上書きしました。");
});

// addClass
$(".method-btn").click(function () {
  $(".underline").addClass("add-class");
});

// removeClass
$(".remove-class").click(function () {
  $(".remove-text").removeClass("red");
});

// toggleClass
$(".toggle-class").click(function () {
  $(".toggle-text").toggleClass("red");
});

// hide/show method
$(".hide").click(function () {
  $(".hide-img").hide();
});
$(".show").click(function () {
  $(".show-img").show();
});

// fadeout/fadein
$(".fadeout").click(function () {
  $(".fadeout-img").fadeOut();
});
$(".fadein").click(function () {
  $(".fadein-img").fadeIn();
});

// slideup/slidedown
$(".slideup").click(function () {
  $(".slideup-img").slideUp();
});
$(".slidedown").click(function () {
  $(".slidedown-img").slideDown();
});

// slidetoggle
$(".slide-toggle").click(function () {
  $(".slide-toggle-img").slideToggle();
});


//////////////////////////////////////////
/////////////    Function   //////////////
//////////////////////////////////////////