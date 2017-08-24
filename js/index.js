/**
 * Created by ZhangGong on 2017/7/7.
 */
window.onscroll = function () {
    var t = getScrollTop();
    if (t > 0) {
        document.querySelector('#top-nav').className = 'nav-fixed';
    } else {
        document.querySelector('#top-nav').className = '';
    }
}

function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}

//路由判断
function judgePage() {
    var href = document.location.href,
        reg = /\/[a-zA-Z]+\./g,
        page = href.match(reg);
    page = page[0].substring(1, page[0].length - 1);
    switch(page){
        case 'index':changeNavClass(0);break;
        case 'news':changeNavClass(1);break;
        case 'tickets':changeNavClass(2);break;
        case 'about':changeNavClass(3);break;
        case 'view':changeNavClass(4);break;
    }
}
judgePage();
function changeNavClass(w){
    var navs=document.querySelectorAll('.p-li');
    if(w===4){
        document.querySelector('.p-li-hide a').className='on';
        for(var i = 0;i<navs.length;i++){
            navs[i].querySelector('a').className = ''
        }
    }else{
        for(i = 0;i<navs.length;i++){
            if(i!==w){
                navs[i].querySelector('a').className = ''
            }else{
                navs[i].querySelector('a').className = 'on'
            }
        }
    }

}