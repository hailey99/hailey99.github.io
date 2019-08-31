// 이미지 alt 속 내용을 캡션으로 만들어줌
$('.post > p > img[alt]').replaceWith(function () {
    return '<figure>'
        + '<a href="' + $(this).attr('http://hailey99.github.io/assets/images/can0.png') + '" class="mg-link">'
        + '<img src="' + $(this).attr('http://hailey99.github.io/assets/images/can0.png') + '"/></a>'
        + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
        + '</figure>';
});

// 이미지를 magnific popup image viewer에 연결시킴
$('.mg-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true
});
