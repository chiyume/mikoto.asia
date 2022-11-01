var color = [
    "pink", "#b1c6ff", "#ff8b46", "#ffc71d", "#d4f00f", "#b1c6ff", "#dcb5ff",
    "#ff9fab", "#eae489", "#acf0dc", "#f9dba7", "#a9d6f6", "#b5e8a4", "#ffb7a5"
]
var roleList = [
    {
        url: "/images/UiharuKazari.png"
    },
    {
        url: "/images/MisakaMikoto3.jpg"
    },
    {
        url: "/images/kuroko.png"
    },
    {
        url: "/images/kuroko.jpg"
    },
    {
        url: "/images/SatenRuiko2.png"
    },
    {
        url: "/images/MisakaMikoto.jpg"
    },
    {
        url: "/images/MisakaMikoto2.png"
    },
    {
        url: "/images/SatenRuiko.jpg"
    },
    {
        url: "/images/UiharuKazari2.jpg"
    },
    
]
// 导航栏切换

var ischangenav = false;
var colorIndex = 1;
var changenav = function () {
    if (ischangenav) {
        // $(this).css({"display": "none"})
        ischangenav = false;
        $("#asidenav").css({
            "left": "-200px",
        });
        $("#navbtn").html($('<i class="glyphicon glyphicon-triangle-right"></i>'));
        $("#navbtn").css({
            "left": "0px",
            "border-radius": "0px 5px 5px 0px",
            "background": color[colorIndex],
        })
    } else {
        // 打开导航时随机切换人物卡片
        // 生成随机数
        var roleIndex = Math.ceil(Math.random() * (roleList.length - 1)) - 1;
        if (roleIndex == -1) {
            roleIndex = roleList.length - 1;
        }
        $("#role").attr("src", roleList[roleIndex].url)
        // $(this).css({"disply":"block"})
        ischangenav = true;
        $("#asidenav").css({
            "left": "0",
        });
        $("#navbtn").html($('<i class="glyphicon glyphicon-triangle-left"></i>'));
        $("#navbtn").css({
            "left": "174px",
            "border-radius": "5px 0px 0px 5px",
            "background": color[colorIndex],
        })
    }
    colorIndex++;
    if (colorIndex == color.length) {
        colorIndex = 0;
    }
}
