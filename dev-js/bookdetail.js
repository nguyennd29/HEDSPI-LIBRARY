//half
$(document).ready(function() {
    let url = window.location.href; // or window.location.href for current url
    if((/id=([^&]+)/.exec(url))) {
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let bookid = captured ? captured : 1;
        console.log(bookid);
        $.ajax({
            url: `http://localhost:6969/api/book/${bookid}`,
            method: 'GET',
            success: function (data) {
               console.log(data);


            },
            error: function () {
                console.log("error");
            }
        });
    }


});