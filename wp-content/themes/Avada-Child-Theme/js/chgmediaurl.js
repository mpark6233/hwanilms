( function ( $ ) {
$(document).ready(function() {
    $('.kl-popup img').attr('src',function(index,attr){
        return attr.replace('http://www.hwanil.ms.kr/wp-content/uploads/','http://s3-ap-northeast-2.amazonaws.com/hwanilms/wp-content/uploads');
    });
});
} )( jQuery );
