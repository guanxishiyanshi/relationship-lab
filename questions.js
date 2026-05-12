const questions = [
    // 维度一：自我情绪的识别与接纳
    { id: 1, text: `感到烦躁或低落的时候，我第一反应是给自己找点事做，比如工作、打游戏、刷视频，让自己忙起来不去想它。`, dimension: 1, reverse: false },
    { id: 2, text: `情绪上来的那个当下，我通常只觉得心里乱糟糟的，说不清楚自己到底是生气、委屈还是失望。`, dimension: 1, reverse: false },
    { id: 3, text: `别人问我“你怎么了”，我的第一反应是回一句“没什么”，其实心里是有事的。`, dimension: 1, reverse: false },
    { id: 4, text: `一天过得不咸不淡，什么大事都没发生，心里却有种说不清的空落落。这种感觉我通常不会细想，告诉自己早点睡，明天就好了。`, dimension: 1, reverse: false },
    { id: 5, text: `和伴侣吵完架的当下，我说不清自己到底怎么了。总要过好几个小时，甚至好几天，才慢慢回过味来，原来自己当时是觉得受伤了，或者被忽视了。`, dimension: 1, reverse: false },
    { id: 6, text: `我打心底里觉得，一个大男人老琢磨自己开不开心，挺没出息的。`, dimension: 1, reverse: false },
    { id: 7, text: `我能察觉到，我对自己说话的方式，往往比对别人说话要刻薄得多。`, dimension: 1, reverse: true },
    { id: 8, text: `伴侣情绪一上来，冲我问“你心里到底在想什么”，我脑子常常一下子就空了。不是不想说，是真不知道该从哪儿说起。`, dimension: 1, reverse: false },
    
    // 维度二：共情与情感回应的模式
    { id: 9, text: `伴侣心情不好的时候，我经常摸不准她到底是想让我帮忙出主意，还是就想让我安安静静听她说完。`, dimension: 2, reverse: false },
    { id: 10, text: `伴侣在我面前哭或者发脾气，我第一反应不是心疼，而是心里很烦躁，压力很大，只想赶紧让这个场面结束。`, dimension: 2, reverse: false },
    { id: 11, text: `伴侣跟我倒完苦水，我通常会帮她分析分析，给几条建议，然后就觉得这件事算处理完了。`, dimension: 2, reverse: false },
    { id: 12, text: `我很难单从伴侣说话的语气、脸上的表情或者她的沉默里，判断出她是生气了、难过了，还是单纯累了。`, dimension: 2, reverse: false },
    { id: 13, text: `伴侣情绪崩溃的时候，除了在旁边默默陪着，我完全不知道还能怎么安慰她，常常觉得很无力，手都不知道往哪儿放。`, dimension: 2, reverse: false },
    { id: 14, text: `伴侣跟我聊她的心事，我会不自觉地说起自己类似的经历，聊着聊着，话题就慢慢变成了我在说。`, dimension: 2, reverse: false },
    { id: 15, text: `一次不愉快的谈话结束以后，我不会再主动把这件事翻出来聊，觉得过去了就翻篇了，再提对谁都不好。`, dimension: 2, reverse: false },
    
    // 维度三：爱的动机与内在驱动力
    { id: 16, text: `一想到婚姻，我脑子里最先蹦出来的词是责任、养家、别让父母操心、把这个人生阶段的任务完成好。`, dimension: 3, reverse: false },
    { id: 17, text: `在一段长久的关系里，除了把经济基础打好、不做出格的事，我不太说得出来自己还能提供什么别的价值。`, dimension: 3, reverse: false },
    { id: 18, text: `我追求或者维持一段关系，更多是因为年纪到了、身边人都结了、家里也该有个交代了，而不是自己心里真的有多渴望。`, dimension: 3, reverse: false },
    { id: 19, text: `对我来说，被一个人需要的感觉很踏实，比我主动想和她在一起的那种感觉，更让我确定、更有安全感。`, dimension: 3, reverse: false },
    { id: 20, text: `我心里隐隐觉得，爱情这东西不太实在。它总得有点实际用处——比如一起养家、生孩子、照顾老人——才值得花时间花精力去经营。`, dimension: 3, reverse: false },
    { id: 21, text: `与其说我有多渴望一段感情，不如说我更害怕老了还是一个人，那种孤独和难堪想起来就发慌。`, dimension: 3, reverse: false },
    { id: 22, text: `我能想象婚后日子会慢慢变淡，甚至彼此都有点倦了，但我对自己能不能经营好它、让这个家一直有点温度，心里是没底的。`, dimension: 3, reverse: false }
];