$(document).ready(function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            $('#nav').slideDown();
        }
        else {
            $('#nav').slideUp();
        }
    }, false);
    $('#email-start').click(function () {
        $('#form').fadeIn('fast');
        emailStatus = "Email Support ";
    });
    $('#one-on-one').click(function () {
        $('#form').fadeIn('fast');
        emailStatus = "One on One ";
    });
    //for email and one on one
    $('#form-send').click(function () {
        var name = document.getElementsByName('form-name')[0].value;
        var email = document.getElementsByName('form-email')[0].value;
        var message = document.getElementsByName('form-content')[0].value;
        $.ajax({
            type: "POST",
            url: 'https://www.readmybluebutton.com/sjcc/email.php',
            data: {name: name, email: email, message: message, type: emailStatus},
            success: function (response) {
                if (response == "error") {
                    $('#form').fadeOut('fast');
                }
                $('#form').fadeOut('fast');

            },
            error: function (xhr, status, error) {
                $('#form').fadeOut('fast');
            }
        });
    });
    //for feedback
    $('#submit').click(function () {
        var emailStatus1 = "Feedback ";
        var name1 = document.getElementsByName('name')[0].value;
        var email1 = document.getElementsByName('email')[0].value;
        var message1 = document.getElementsByName('message')[0].value;
        $.ajax({
            type: "POST",
            url: 'https://www.readmybluebutton.com/sjcc/email.php',
            data: {name: name1, email: email1, message: message1, type: emailStatus1},
            success: function (response) {
                if (response == "error") {
                    //$('#form').fadeOut('fast');
                }
                //$('#task-summary').html(response);
                //$('#form').fadeOut('fast');
            },
            error: function (xhr, status, error) {
                //$('#form').fadeOut('fast');
            }
        });
    });
    $('#cancel').click(function () {
        $('#form').fadeOut('fast');
        //document.getElementById("#form-name")[0].reset();
    });
});