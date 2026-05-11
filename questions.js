const questions = [
    // 维度一：自我情绪的识别与接纳
    { id: 1, text: "当我感到烦躁或低落时，我的第一反应是找点事情做（如工作、游戏、刷视频），让自己忙起来不去想它。", dimension: 1, reverse: false },
    { id: 2, text: "情绪发生的当下，我通常只能感觉到一团模糊的东西，说不清具体是生气、委屈还是失望。", dimension: 1, reverse: false },
    { id: 3, text: "当别人问我“你怎么了”，我的第一反应是“没什么”，哪怕我心里其实有事。", dimension: 1, reverse: false },
    { id: 4, text: "如果一天过得不咸不淡，什么大事都没发生，我内心却有种说不清的空虚感，我通常会选择忽略它，告诉自己“早点睡明天就好了”。", dimension: 1, reverse: false },
    { id: 5, text: "和伴侣吵完架，我当下说不清自己怎么了。通常要过很久（几小时甚至几天），才慢慢回过味来，明白自己当时其实是感到（比如受伤、被轻视）。", dimension: 1, reverse: false },
    { id: 6, text: "我内心深处认为，一个大男人整天琢磨自己开不开心，是没出息的表现。", dimension: 1, reverse: false },
    { id: 7, text: "我能够察觉到，我对自己说话的方式，常常比我对待别人要苛刻得多。", dimension: 1, reverse: true },
    { id: 8, text: "当伴侣情绪激动地问我“你到底在想什么”时，我常常大脑一片空白，不是不想说，是真的不知道从何说起。", dimension: 1, reverse: false },
    // 维度二：共情与情感回应的模式
    { id: 9, text: "伴侣情绪不好时，我常常搞不清她到底是想让我帮她解决问题，还是只是想让我听她说说。", dimension: 2, reverse: false },
    { id: 10, text: "伴侣在我面前哭或发脾气时，我的第一反应不是心疼，而是感到烦躁、压力很大，想尽快结束这个场面。", dimension: 2, reverse: false },
    { id: 11, text: "伴侣跟我倾诉烦恼后，我通常会给出我的分析和建议，然后觉得事情已经“处理完了”。", dimension: 2, reverse: false },
    { id: 12, text: "我很难从伴侣的语气、表情或沉默中，判断出她是生气了、难过了、还是只是累了。", dimension: 2, reverse: false },
    { id: 13, text: "当伴侣情绪崩溃时，除了沉默陪伴，我完全不知道该怎么安慰她，常常有种手足无措的无力感。", dimension: 2, reverse: false },
    { id: 14, text: "伴侣跟我分享她的感受时，我不自觉地会提起我自己的类似经历，然后话题就慢慢变成了我在说。", dimension: 2, reverse: false },
    { id: 15, text: "一次不愉快的沟通结束后，我不会再主动提起这件事，觉得过去了就过去了，再翻出来对谁都不好。", dimension: 2, reverse: false },
    // 维度三：爱的动机与内在驱动力
    { id: 16, text: "想到婚姻，我脑海中首先浮现的是责任、养家、别让父母操心、完成人生阶段的任务。", dimension: 3, reverse: false },
    { id: 17, text: "在一段长期关系里，除了提供经济支持和不做出格的事，我很难找到自己更独特的价值。", dimension: 3, reverse: false },
    { id: 18, text: "我追求或维持一段关系，更多是因为年龄到了、身边人都结婚了、该给家里一个交代，而不是发自内心的渴望。", dimension: 3, reverse: false },
    { id: 19, text: "对我来说，“被需要”的感觉很重要，比“我主动想要和她在一起”的感觉更确定、更安全。", dimension: 3, reverse: false },
    { id: 20, text: "我潜意识里觉得，爱情是人生中“不那么实在”的东西。它得有实际功能（一起养家、生育、照顾父母），才值得投入时间和精力。", dimension: 3, reverse: false },
    { id: 21, text: "与其说有“爱的渴望”，不如说我更害怕一个人终老的孤独和尴尬。", dimension: 3, reverse: false },
    { id: 22, text: "我能想象出婚姻中可能出现平淡甚至倦怠，但我对自己是否有能力经营它、让关系保持温度，并没有信心。", dimension: 3, reverse: false }
];