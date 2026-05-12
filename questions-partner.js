const partnerQuestions = [
    // ========== 维度一：对他沉默的解读方式 ==========
    { id: 1, text: "我们之间突然安静下来，我第一反应是：是不是我又做错什么了。", dimension: 1, reverse: false },
    { id: 2, text: "我能感觉到，他有时候不说话，是在心里组织语言，不是在对我冷暴力。", dimension: 1, reverse: false },
    { id: 3, text: "他沉默超过十分钟，我心里就会冒出一个声音催我去问问他到底怎么了。", dimension: 1, reverse: false },
    { id: 4, text: "他跟兄弟在一起有说有笑，一回到我身边话就少了，这让我心里有点发酸。", dimension: 1, reverse: false },
    { id: 5, text: "事后冷静下来想想，我经常把他的沉默想得太严重了，他可能真的只是累了。", dimension: 1, reverse: false },
    { id: 6, text: "小时候家里有人生气就不说话，那种安静让我到现在都有点紧张。", dimension: 1, reverse: false },
    { id: 7, text: "他一沉默，我就会想到之前那些还没解开的疙瘩，觉得他是不是还在为那些事不高兴。", dimension: 1, reverse: false },
    { id: 8, text: "他说'没什么'的时候，我下意识觉得他其实有事，只是不愿意跟我讲。", dimension: 1, reverse: false },
    { id: 9, text: "我能分辨出他那种'在想事情'的安静，和那种'在回避'的安静，周围空气的味道都不一样。", dimension: 1, reverse: false },
    { id: 10, text: "他超过半小时没回我消息，我会反复点开手机，脑子里忍不住编出各种剧情。", dimension: 1, reverse: false },

    // ========== 维度二：表达需求的清晰度 ==========
    { id: 11, text: "我嘴上说'没事'，其实心里悄悄希望他能听出来我有事。", dimension: 2, reverse: false },
    { id: 12, text: "当我直接把需求说清楚，他其实是很愿意去做的。", dimension: 2, reverse: false },
    { id: 13, text: "我需要他做什么时，会跟他讲得很具体：什么时间、在哪儿、需要他干嘛。", dimension: 2, reverse: false },
    { id: 14, text: "我有时候会把好几件不舒服的事攒在心里，最后挑一件最安全的讲出来。", dimension: 2, reverse: false },
    { id: 15, text: "我觉得如果他真的在乎我，有些事不用我开口他也应该能注意到。", dimension: 2, reverse: false },
    { id: 16, text: "身体不舒服或者心情很差的时候，反而更开不了口说'我需要你帮我'。", dimension: 2, reverse: false },
    { id: 17, text: "吵起来的时候，我会忍不住说'你从来不……''你总是……'这种话。", dimension: 2, reverse: false },
    { id: 18, text: "在外面跟朋友同事我能说会道，但回到家对着他，有些话反而堵在嗓子眼。", dimension: 2, reverse: false },
    { id: 19, text: "我经常在心里把要说的话排练好几遍，真见了他又咽回去了。", dimension: 2, reverse: false },
    { id: 20, text: "当我开始为一件事发牢骚，其实真正想说的是另一件更重的事，只是还没准备好开口。", dimension: 2, reverse: false },

    // ========== 维度三：对'被爱'的感知通道 ==========
    { id: 21, text: "他下班回来顺手给我带一杯爱喝的，比一句'我爱你'更让我觉得被惦记。", dimension: 3, reverse: false },
    { id: 22, text: "我需要他认认真真听我说话，而不是一边刷手机一边嗯嗯地敷衍。", dimension: 3, reverse: false },
    { id: 23, text: "他能记住我不经意说过的小事，这让我觉得自己在他心里有个特别的位置。", dimension: 3, reverse: false },
    { id: 24, text: "他踏踏实实为家挣钱，嘴上不说甜话，我也能感觉到了他的在乎。", dimension: 3, reverse: false },
    { id: 25, text: "我需要他偶尔什么都不为，就安安静静抱我一会儿。", dimension: 3, reverse: false },
    { id: 26, text: "我情绪崩了的时候，他不用帮我解决什么，在旁边安静陪着就好。", dimension: 3, reverse: false },
    { id: 27, text: "两个人能坐下来好好聊一次天，对我来说是关系里很重要的事。", dimension: 3, reverse: false },
    { id: 28, text: "他主动去洗碗拖地的时候，我觉得他在用他的方式说爱我。", dimension: 3, reverse: false },
    { id: 29, text: "我希望他能偶尔给我写几句话，哪怕就贴在冰箱上。", dimension: 3, reverse: false },
    { id: 30, text: "想一想小时候，爱在你家里是怎么被表达的？——那种方式，现在你还期待吗？", dimension: 3, reverse: false },

    // ========== 维度四：冲突后的修复意愿与模式 ==========
    { id: 31, text: "吵完架我通常会先哭一场，哭完会想去找他，或者等他来找我。", dimension: 4, reverse: false },
    { id: 32, text: "他说翻篇就翻篇了，但我心里那口气还没顺过来。", dimension: 4, reverse: false },
    { id: 33, text: "我能感觉到，他有时候也想和好，只是拉不下脸先开口。", dimension: 4, reverse: false },
    { id: 34, text: "吵完架我一个人躺着，脑子里会把当时说的话重放好几遍，越想越难受。", dimension: 4, reverse: false },
    { id: 35, text: "只要能说开，吵一架其实没什么，总比两个人都憋着装没事好。", dimension: 4, reverse: false },
    { id: 36, text: "和好之后，我需要他做点什么让我确定我们真的好了，比如拉一下我的手，或者带我出去吃顿好的。", dimension: 4, reverse: false },
    { id: 37, text: "我有时候故意不先开口，就想看看他会不会主动来找我。", dimension: 4, reverse: false },
    { id: 38, text: "吵完架我会把整个过程都跟闺蜜讲一遍，讲完心里能松快一大截。", dimension: 4, reverse: false },
    { id: 39, text: "最受不了的是，刚吵完架他转身就能呼呼大睡，留我一个人瞪着天花板。", dimension: 4, reverse: false },
    { id: 40, text: "上次闹别扭，最后是谁先破的冰？——这种事在我们之间发生的次数，记不清了。", dimension: 4, reverse: false }
];