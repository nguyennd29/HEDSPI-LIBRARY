$(document).ready(function() {
    $.ajax({
        // url:'https://realserver :v/api/auth/login'||'http://localhost:6969/api/recommend',
        url:'http://localhost:6969/api/recommend',

        method: 'GET',
        success: function(data) {
            console.log(`${data.book[0].bookname}`);
            // $('#recommendBook').append(``)
            $('#recommendImage1').attr("src","images/mybanner/manga-cover.jpeg");
            $('#recommendName1').html(`${data.book[0].bookname}`);
            $('#recommendDetail1').click(function() {
                window.location.href = `/search/${data.book[0].bookid}`;
            });
            // $('#recommendRating1').html();
        },
        error: function() {
            console.log("error");
        }
    });




});