var pio = new Paul_Pio({
    "mode": "fixed",
    "hidden": true,
    "content": {
        "welcome": ["欢迎来到Misaka Space!", "今天天气不错，一起来玩吧！",
            "你想要观测这个世界吗？"],
        "custom": [
            { "selector": ".comment-form", "text": "欢迎参与本文评论，别发小广告噢~" },
            { "selector": ".home-social a:last-child", "text": "在这里可以了解博主的日常噢~" },
            { "selector": ".post-item a", "type": "read" },
            { "selector": ".post-content a, .page-content a", "type": "link" }
        ]
    },
    "night": "single.night()",
    "model": ["/models/kuroko/kuroko.model.json", "/models/mikoto/mikoto.model.json",
            "/models/uiharu/uiharu.model.json", "/models/saten/saten.model.json"]
});