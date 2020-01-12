$(function(){
    // リンククリック時にフェードアウトしてから、画面遷移する
    $('a').click(function(){
        // URLを取得する
        var url = $(this).attr('href');
    
        // URLが空ではない場合
        if (url != '') {
            // フェードアウトしてから、取得したURLにリンクする
            $('#wrapper').fadeOut(500);
            $('#wrapper').fadeOut(1000);
            setTimeout(function(){
                location.href = url;
            }, 500);
        }
        return false;
    
    });
});
