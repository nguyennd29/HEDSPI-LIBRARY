$(document).ready(function() {
    $('.logout-nav').hide();
    $.ajax({
        url: `http://localhost:6969/api/user/`,
        method: 'GET',
        success: function (data) {
            if (data.success == 1) {                 //session existed
                $('.current-user').html(`Hello ${data.user[0].username} !`);
                $('.login-nav').hide();
                $('.logout-nav').show();
            }
            else {                                //no session existed

            }
        },
        error: function () {
            console.log("error");
        }
    });
});

