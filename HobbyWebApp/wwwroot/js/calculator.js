$(document).ready(function () {
    $("#btnCalculate").click(function () {
        var hours = $("#hours").val();
        var rate = 150.00;

        // Validation
        if (hours <= 0 || hours == "") {
            alert("System Error: Input must be a positive integer.");
            $("#total").val("");
            return;
        }

        var total = parseFloat(hours) * rate;
        $("#total").val("$" + total.toFixed(2));
    });
});