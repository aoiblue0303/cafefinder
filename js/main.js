// ハンバーガーメニューで2本線を×にする動き
$('.openbtn').click(function () {
  $(this).toggleClass('active');
  $(".header_nav_menu_sp").toggleClass('panelactive');
});

$(".header_nav_menu_item a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $(".header_nav_menu_sp").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
