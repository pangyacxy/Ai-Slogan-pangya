// 能力数据模型
const ABILITIES_DATA = {
    "口述表达": {
        name: "口述表达",
        type: "软实力",
        icon: "🗣️",
        totalDays: 21,
        description: "让你用1分钟说清3个重点，不再被打断",
        chapters: [
            {
                chapterNum: 1,
                chapterName: "第1章：开口不再尴尬",
                days: 7,
                goal: "能完整说出1分钟自我介绍",
                dailyTasks: [
                    "录制30秒自我介绍语音，包含：姓名、背景、一个特点",
                    "用'我是...我做过...我擅长...'的结构再录一次",
                    "录制时保持微笑，感受语气的变化",
                    "模仿一段你喜欢的演讲者的开场白",
                    "给3个朋友做自我介绍，记录他们的反馈",
                    "录制1分钟完整自我介绍，不停顿不卡壳",
                    "复习本周录音，写下你的进步"
                ],
                exam: "录制1分钟自我介绍视频，AI评分≥80分通过"
            },
            {
                chapterNum: 2,
                chapterName: "第2章：逻辑清晰表达",
                days: 7,
                goal: "能用PREP结构表达观点",
                dailyTasks: [
                    "学习PREP结构：观点-理由-例子-重申，写下3个例子",
                    "用PREP结构表达：'我为什么选择这份工作'",
                    "用PREP结构表达：'今天最重要的3件事'",
                    "录音：用PREP讲述你的一次成功经历",
                    "练习在30秒内说清一个复杂问题",
                    "模拟工作汇报：3分钟讲清一个项目进展",
                    "总结本周，找出你最常用的表达漏洞"
                ],
                exam: "用PREP结构讲述'我为什么适合这个岗位'，AI评分≥85分"
            },
            {
                chapterNum: 3,
                chapterName: "第3章：感染力提升",
                days: 7,
                goal: "语音语调有感染力",
                dailyTasks: [
                    "找一段激励演讲，模仿其中的停顿和语调",
                    "练习用不同语气说同一句话（兴奋/冷静/坚定）",
                    "录制一段带情感的故事讲述（2分钟）",
                    "对着镜子练习，观察表情和肢体语言",
                    "给朋友讲一个能让他笑的故事",
                    "模拟一次团队激励演讲（3分钟）",
                    "制作你的'表达力成长总结'视频"
                ],
                exam: "模拟激励团队演讲，AI评分≥90分，社区点赞≥10个"
            }
        ]
    },
    
    "归纳总结": {
        name: "归纳总结",
        type: "软实力",
        icon: "📝",
        totalDays: 21,
        description: "把复杂问题浓缩成3句话，让别人秒懂",
        chapters: [
            {
                chapterNum: 1,
                chapterName: "第1章：抓住核心信息",
                days: 7,
                goal: "能从长文中提炼3个关键点",
                dailyTasks: [
                    "读一篇文章，用3句话总结核心内容",
                    "看一个10分钟视频，写100字总结",
                    "总结今天的工作，列出3件最重要的事",
                    "用金字塔原理整理一个项目方案",
                    "练习画思维导图：把一本书浓缩成一张图",
                    "帮同事总结一次会议记录",
                    "复盘本周：哪些信息是噪音，哪些是核心"
                ],
                exam: "5分钟总结一篇3000字文章，AI评分≥80分"
            },
            {
                chapterNum: 2,
                chapterName: "第2章：结构化思维",
                days: 7,
                goal: "能用框架组织信息",
                dailyTasks: [
                    "学习MECE原则，练习分类一个问题",
                    "用5W2H分析一个工作任务",
                    "制作一个项目汇报PPT（只用5页）",
                    "写日报：用'完成-进行-计划'结构",
                    "练习电梯演讲：30秒讲清一个项目",
                    "帮朋友梳理一个复杂问题的解决方案",
                    "总结本周学到的3个结构化工具"
                ],
                exam: "用MECE拆解一个复杂问题，AI评分≥85分"
            },
            {
                chapterNum: 3,
                chapterName: "第3章：高效输出",
                days: 7,
                goal: "快速产出高质量总结",
                dailyTasks: [
                    "10分钟写出一份会议纪要",
                    "快速制作一个项目复盘报告",
                    "用便签法总结一本书的核心方法",
                    "练习即兴总结：随机话题3分钟归纳",
                    "制作个人知识库索引",
                    "帮团队整理季度总结",
                    "输出你的'归纳总结方法论'文档"
                ],
                exam: "30分钟完成项目复盘报告，AI评分≥90分"
            }
        ]
    },

    "时间管理": {
        name: "时间管理",
        type: "软实力",
        icon: "⏰",
        totalDays: 21,
        description: "告别拖延，每天多出2小时",
        chapters: [
            {
                chapterNum: 1,
                chapterName: "第1章：认识你的时间",
                days: 7,
                goal: "清楚知道时间都去哪了",
                dailyTasks: [
                    "记录今天每小时的时间分配",
                    "分析时间日志，找出3个'时间黑洞'",
                    "计算你的'有效工作时间'占比",
                    "识别你的高效时段（早晨/下午/晚上）",
                    "列出5个最浪费时间的习惯",
                    "制作你的时间饼图",
                    "设定下周的3个时间优化目标"
                ],
                exam: "提交7天时间日志分析，AI评分≥80分"
            },
            {
                chapterNum: 2,
                chapterName: "第2章：优先级管理",
                days: 7,
                goal: "先做重要的事",
                dailyTasks: [
                    "学习四象限法则，分类今天的任务",
                    "每天只做3件最重要的事",
                    "练习说'不'：拒绝2个不重要的请求",
                    "用番茄工作法完成一个专注任务",
                    "制定你的'不做清单'",
                    "每晚规划明天的Top 3任务",
                    "总结本周：完成了多少重要任务"
                ],
                exam: "用四象限法规划一周任务，AI评分≥85分"
            },
            {
                chapterNum: 3,
                chapterName: "第3章：高效执行",
                days: 7,
                goal: "提升执行力，告别拖延",
                dailyTasks: [
                    "用2分钟法则处理小任务",
                    "为大任务制定里程碑计划",
                    "消除一个干扰源（关闭通知/整理桌面）",
                    "建立你的晨间仪式",
                    "用Deadline驱动完成一个任务",
                    "复盘一次拖延：找出根本原因",
                    "制作你的时间管理工具箱"
                ],
                exam: "展示21天时间管理成果对比，AI评分≥90分"
            }
        ]
    },

    "Python基础": {
        name: "Python基础",
        type: "硬实力",
        icon: "🐍",
        totalDays: 21,
        description: "从零开始，21天写出第一个自动化脚本",
        chapters: [
            {
                chapterNum: 1,
                chapterName: "第1章：Python入门",
                days: 7,
                goal: "掌握基础语法，能写简单程序",
                dailyTasks: [
                    "安装Python和VS Code，运行Hello World",
                    "学习变量和数据类型，写5个练习",
                    "掌握条件语句：写一个猜数字游戏",
                    "学习循环：打印九九乘法表",
                    "练习列表操作：管理你的待办事项",
                    "学习字典：制作通讯录程序",
                    "综合练习：写一个简单计算器"
                ],
                exam: "独立完成一个小程序，AI评分≥80分"
            },
            {
                chapterNum: 2,
                chapterName: "第2章：函数与模块",
                days: 7,
                goal: "会用函数组织代码",
                dailyTasks: [
                    "学习函数定义和调用",
                    "写5个实用函数（字符串/数字处理）",
                    "理解参数传递和返回值",
                    "使用内置函数处理数据",
                    "导入和使用标准库（datetime/random）",
                    "写一个文件处理脚本",
                    "重构之前的代码：用函数优化"
                ],
                exam: "写一个模块化程序，AI评分≥85分"
            },
            {
                chapterNum: 3,
                chapterName: "第3章：实战项目",
                days: 7,
                goal: "完成一个自动化项目",
                dailyTasks: [
                    "学习文件读写：批量处理文本",
                    "学习requests库：获取网页数据",
                    "数据处理：用Pandas整理Excel",
                    "制作数据可视化图表",
                    "写一个自动发邮件脚本",
                    "完成你的第一个实战项目",
                    "整理代码，写README文档"
                ],
                exam: "提交一个完整项目，AI评分≥90分"
            }
        ]
    },

    "Excel数据分析": {
        name: "Excel数据分析",
        type: "硬实力",
        icon: "📊",
        totalDays: 21,
        description: "掌握数据透视表和公式，秒变数据分析师",
        chapters: [
            {
                chapterNum: 1,
                chapterName: "第1章：Excel基础进阶",
                days: 7,
                goal: "掌握核心公式和技巧",
                dailyTasks: [
                    "学习VLOOKUP，完成数据匹配练习",
                    "掌握IF函数嵌套，处理条件逻辑",
                    "使用SUMIF/COUNTIF做数据统计",
                    "学习文本函数：拆分和合并数据",
                    "掌握日期函数：计算工龄和账龄",
                    "练习数组公式：批量处理数据",
                    "综合练习：制作员工工资表"
                ],
                exam: "完成综合数据处理任务，AI评分≥80分"
            },
            {
                chapterNum: 2,
                chapterName: "第2章：数据透视与可视化",
                days: 7,
                goal: "会用透视表分析数据",
                dailyTasks: [
                    "创建数据透视表：销售数据分析",
                    "学习切片器和时间线",
                    "制作动态图表仪表盘",
                    "掌握条件格式：数据可视化",
                    "学习迷你图：趋势分析",
                    "制作交互式报表",
                    "综合练习：业务数据分析报告"
                ],
                exam: "制作数据分析仪表盘，AI评分≥85分"
            },
            {
                chapterNum: 3,
                chapterName: "第3章：高级技巧与自动化",
                days: 7,
                goal: "提升效率，实现自动化",
                dailyTasks: [
                    "学习Power Query：数据清洗",
                    "使用Power Pivot：多表关联",
                    "录制简单宏：自动化重复任务",
                    "学习VBA基础：写第一个脚本",
                    "制作自动化报表模板",
                    "数据验证和保护技巧",
                    "完成实战项目：自动化月报"
                ],
                exam: "提交自动化报表项目，AI评分≥90分"
            }
        ]
    }
};

// 获取能力数据
function getAbilityData(abilityName) {
    return ABILITIES_DATA[abilityName] || null;
}

// 获取所有能力列表
function getAllAbilities() {
    return Object.keys(ABILITIES_DATA).map(key => ({
        name: ABILITIES_DATA[key].name,
        type: ABILITIES_DATA[key].type,
        icon: ABILITIES_DATA[key].icon,
        description: ABILITIES_DATA[key].description
    }));
}

// 获取特定天的任务
function getDayTask(abilityName, day) {
    const ability = ABILITIES_DATA[abilityName];
    if (!ability) return null;
    
    let currentDay = 0;
    for (const chapter of ability.chapters) {
        if (day <= currentDay + chapter.days) {
            const dayInChapter = day - currentDay - 1;
            return {
                chapter: chapter,
                task: chapter.dailyTasks[dayInChapter],
                isExamDay: dayInChapter === chapter.days - 1
            };
        }
        currentDay += chapter.days;
    }
    return null;
}


