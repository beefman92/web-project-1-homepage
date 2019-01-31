var triggeredOnce = false;
const keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;

$(document).ready(function() {
    // According to the value in cookies, showing different page to user.
    var hiddenModeOn = Cookies.get("hiddenModeOn");
    if (hiddenModeOn === undefined || hiddenModeOn === "false") {
        Cookies.set("hiddenModeOn", "false");

        // listen to submit action
        $("#special-id-form").submit(function(object) {
            object.preventDefault();
            let id = $(this).serializeArray()[0].value;
            $.get("hidden-mode/validate", {id: id}, function(data, textStatus, jqXHR) {
                if (data === true) {
                    $("#submit-button").popover("hide");
                    $("#state-display").html("");
                    Cookies.set("hiddenModeOn", "true");
                    Cookies.set("specialId", id);
                    $("#state-display").append("Welcome, <span id='specialIdInState'>" + id + "</span>");
                    $("#state-display").attr({
                        "class": "text-light"
                    });
                    $("#nav-item-list").append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"leave-messages.html\">Leave Messages</a></li>")
                } else {
                    $("#submit-button").popover("show");
                }
            });
        });

        // listen to key press down
        console.log("Try to sequentially enter these keys ↑ ↑ ↓ ↓ ← → ← → B A");
        $(document).on("keydown", function(eventObject) {
            if (!triggeredOnce) {
                if (keys[index] === eventObject.which) {
                    index += 1;
                    if (index === 10) {
                        triggeredOnce = true;
                        index = 0;
                        $.get("hidden-mode/get-new-id", {}, function(data, textStatus, jqXHR ) {
                            $("#special-id").append(data);
                            $("#secretBulletin").modal('show');
                            $("#state-display").html("");
                            Cookies.set("hiddenModeOn", "true");
                            Cookies.set("specialId", data);
                            $("#state-display").append("Welcome, <span id='specialIdInState'>" + data + "</span>");
                            $("#state-display").attr({
                                "class": "text-light"
                            });
                            $("#nav-item-list").append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"leave-messages.html\">Leave Messages</a></li>");
                        });
                    }
                } else {
                    index = 0;
                }
            }
        });
    } else {
        // Read specialId from cookies, remove login form, display welcome information and add navigation item.
        var specialId = Cookies.get("specialId");
        triggeredOnce = true;
        $("#state-display").html("");
        $("#state-display").append("Welcome, <span id='specialIdInState'>" + specialId + "</span>");
        $("#state-display").attr({
            "class": "text-light"
        });
        $("#nav-item-list").append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"leave-messages.html\">Leave Messages</a></li>")
    }
});



