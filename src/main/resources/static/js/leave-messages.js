function changeFormState() {
    var hiddenModeOn = Cookies.get("hiddenModeOn");
    if (hiddenModeOn === undefined || hiddenModeOn === "false") {
        // disable leaving message function
        $("#title").prop("disabled", true);
        $("#email").prop("disabled", true);
        $("#message").prop("disabled", true);
        $("#submitFormButton").prop("disabled", true);
    } else {
        // enable it.
        $("#title").prop("disabled", false);
        $("#email").prop("disabled", false);
        $("#message").prop("disabled", false);
        $("#submitFormButton").prop("disabled", false);
    }
}

$(document).ready(function() {
    changeFormState();
    $("#state-display").bind('DOMNodeInserted', function(e) {
        changeFormState();
    });

    // listen to submit action
    $("#leaveMessagesForm").submit(function(object) {
        // submit message to backend server and clear form
        object.preventDefault();
        let values = $(this).serializeArray();
        let content = {
            "title": values[0].value,
            "email": values[1].value,
            "message": values[2].value,
            "timestamp": Date.now(),
            "id": $("#specialIdInState").text()
        };
        $.post("hidden-mode/leave-message", content, function(data, textStatus, jqXHR) {
            if (data === true) {
                $("#submitSucceededInfo").modal('show');
                $("#leaveMessagesForm")[0].reset();
            } else {
                $("#submitFailedInfo").popover("show");
            }
        });
    });
})