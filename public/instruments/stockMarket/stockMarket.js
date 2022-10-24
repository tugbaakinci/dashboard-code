$("input:checkbox").click(function() {
    var bol = $("input:checkbox:checked").length >= 3;     
    $("input:checkbox").not(":checked").attr("disabled",bol);
    });