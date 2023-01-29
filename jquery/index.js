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
$(".append-btn").click(function () {
  $("ul").append("<li>Option3</li>");
});
// const appendBtn = document.querySelector('.append-btn');
// const ulTag = document.getElementsByTagName('ul');
// appendBtn.addEventListener('click', () => {
//   const addchildEl = document.createElement('li')
//   addchildEl.innerHTML = 'Option3';
//   console.log(ulTag[0].appendChild(addchildEl));
// })

// text()
const pText = $("p").text();
console.log(pText);

// textの出力
$(".over-write-btn").click(function () {
  $(".over-write").text("テキストを上書きしました。");
});
// const overWriteBtn = document.querySelector('.over-write-btn');
// const overWriteText = document.querySelector('.over-write');
// overWriteBtn.addEventListener('click', () => {
//   overWriteText.innerHTML = 'テキストを上書きしました。';
// })

// addClass
$(".add-btn").click(function () {
  $(".add-btn").addClass("add-class");
});
// const addBtn = document.querySelector('.add-btn');
// addBtn.addEventListener('click', () => {
//   addBtn.classList.add('add-class');
// })


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
function showHello() {
  console.log("hello");
}
showHello();

function showHelloName(name) {
  console.log(`${name} さん、こんにちは`);
}
showHelloName("yamada");
showHelloName("tanaka");

function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(1, 2);

function sum2(num1, num2) {
  return num1 + num2;
}
console.log(sum2(2, 5));

function sum3(num1, num2) {
  return num1 + num2;
}
const sumResult = sum3(2, 7);
console.log(sumResult);

const helloName = function (name) {
  return `${name}さん, こんにちは`;
};
console.log(helloName("tanaka"));

// arrow function, 無名関数を使うほうが意図しない動きを防げる

// arrow functionは先に関数を定義にしないとエラーに。
// sample1();
// const sample1 = () => console.log("sample1");

// こちらは定義する前に呼び出してもエラーにならない.
sample2();
function sample2() {
  console.log("sample2");
}

// 無名関数
// sample3();
// const sample3 = function () {
//   console.log("sample3");
// };

