$(document).ready(function () {
  $("#cbx_chkAll").click(function () {
    if ($("#cbx_chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
    else $("input[name=chk]").prop("checked", false);
  });

  $("input[name=chk]").click(function () {
    var total = $("input[name=chk]").length;
    var checked = $("input[name=chk]:checked").length;

    if (total != checked) $("#cbx_chkAll").prop("checked", false);
    else $("#cbx_chkAll").prop("checked", true);
  });

  $(".check_email").click(function () {
    alert("인증메일이 발송되었습니다.");
    $(this).text("재인증");
    setTimeout(function () {
      $(".check_email").css({ background: "url(../img/inzung.png)no-repeat right 16px center", fontSize: 0, top: 55 });
    }, 2000)
  });

});