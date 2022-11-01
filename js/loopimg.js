
var imgList = [
    {
        id : 1,
        imgsURL:"/img/1.jpg",
    },
    {
        id : 2,
        imgsURL:"/img/2.jpg",
    },
    {
        id : 3,
        imgsURL:"/img/3.jpg",
    },
    {
        id : 4,
        imgsURL:"/img/4.jpg",
    },
    {
        id : 5,
        imgsURL:"/img/5.jpg",
    },
    {
        id : 6,
        imgsURL:"/img/6.jpg",
    },
    {
        id : 7,
        imgsURL:"/img/7.jpg",
    },
    {
        id : 8,
        imgsURL:"/img/8.png",
    },
    {
        id : 9,
        imgsURL:"/img/9.jpg",
    },
    {
        id : 10,
        imgsURL:"/img/10.jpg",
    },
    {
        id : 10,
        imgsURL:"/img/11.jpg",
    },
    {
        id : 10,
        imgsURL:"/img/12.jpg",
    },
    {
        id : 10,
        imgsURL:"/img/13.png",
    },
    {
        id : 10,
        imgsURL:"/img/14.png",
    },
    {
        id : 10,
        imgsURL:"/img/15.jpg",
    },
    {
        id : 10,
        imgsURL:"/img/16.png",
    },
];

// 更改背景图片
var bd = $("#loopbox");
var index = 0;
setInterval(function () {
    console.log(imgList[index].imgsURL)
    bd.css({
        "background": "url(" + imgList[index].imgsURL + ")",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "background-attachment": "fixed",
    })
    index++;
    if (index == imgList.length) {
        index = 0;
    }
}, 10000)
//向左切换图片
var changeImgLeft = function () {
    if (index == 0) {
        index = imgList.length - 1;
    } else {
        index--;
    }
    bd.css({
        "background": "url(" + imgList[index].imgsURL + ")",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "background-attachment": "fixed",
    })
}
//向右切换图片
var changeImgRight = function () {
    if (index == imgList.length) {
        index = 0;
    } else {
        index++;
    }
    bd.css({
        "background": "url(" + imgList[index].imgsURL + ")",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "background-attachment": "fixed",
    })
}