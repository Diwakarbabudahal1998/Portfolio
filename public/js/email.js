
$("#email-alert").hide();
$("#message-alert").hide();
$("#success-alert").hide();
function sendEmail() {
    var x = document.getElementById("Email").value;
    var y = document.getElementById("Message").value;
    if (x == "") {
        $("#email-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#email-alert").slideUp(500);
        });
    }
    else if (y == "") {
        $("#message-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#message-alert").slideUp(500);
        });
    }
    else {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "diwakardahal66@gmail.com",
            Password: "bugojnkhkbsapspu",
            To: 'diwakardahal66@gmail.com',
            From: x,
            Subject: "Contact",
            Body: y,
        }).then(
            message => $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(500);
            })
        );
    }

}