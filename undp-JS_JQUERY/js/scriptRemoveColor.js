$('#dugme').click(function () {
    $('#colorSelect option:selected').each(function () {
        $(this).remove();
    });
});
