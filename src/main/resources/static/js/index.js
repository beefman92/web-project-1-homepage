var triggeredOnce = false;
const keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;

function openings() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var blockWidth = parseInt($("#indexContent").css("width"));
    var blockHeight = parseInt($("#indexContent").css("height"));

    // move it out of window
    $("#indexContent").css({
        "left": (windowWidth + 1) + "px",
        "top": ((windowHeight - blockHeight) / 2) + "px",
        "opacity": 1
    });

    // play music and move content in
    var targetLeft = (windowWidth - blockWidth) / 2;
    $("#indexContent").animate({left: targetLeft}, 5000);
}

function listenToKeyPress() {
    var hiddenModeOn = Cookies.get("hiddenModeOn");
    if (hiddenModeOn === undefined || hiddenModeOn === "false") {
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
                            Cookies.set("hiddenModeOn", "true");
                            Cookies.set("specialId", data);
                        });
                    }
                } else {
                    index = 0;
                }
            }
        });
    } else {
        triggeredOnce = true;
    }
}

$(document).ready(function() {
    listenToKeyPress();
});