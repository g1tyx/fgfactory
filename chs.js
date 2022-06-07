/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Continue": "继续",
    "Disable": "禁用",
    "FG Factory": "异星工厂网页版",
    "from scratch. You have nothing but you could mine resources from this planet.": "从头开始。你什么都没有，但你可以从这个星球上开采资源。",
    "in the bottom bar of the screen.": "在屏幕的底部栏中。",
    "Initializing game...": "初始化游戏...",
    "Iron": "铁矿石",
    "Ironwork": "炼铁",
    "Let me teach you the first steps!": "让我教你第一步！",
    "Manual": "手动",
    "Pause": "暂停",
    "Production": "生产",
    "Rocket": "火箭",
    "Support": "支持",
    "This game is still under development so bugs and data lost could happen! Play as your own risks!": "此游戏仍在开发中，因此可能会发生错误和数据丢失！风险自负！",
    "Time Played": "游戏时长",
    "To do that you have to build a": "为此，您必须建造一个",
    "Tutorial": "教程",
    "Weapons": "武器",
    "Welcome": "欢迎",
    "With resources, you build items, machines and perform researches to unlock new items, new machines then discover the recipe to build your": "使用资源，您可以建造物品、机器并进行研究以解锁新物品，新机器然后发现配方来构建您的",
    "You could disable this tutorial. To open it again, click on the button": "您可以禁用本教程。要再次打开它，请点击按钮",
    "You finally woke up after your crash. You are on an hostile planet and you want to leave as soon as possible.": "坠机后你终于醒了。 你在一个充满敌意的星球上，你想尽快离开。",
    "button.": "按钮。",
    "Current Objective": "当前目标",
    "Iron Mining": "开采铁矿石",
    "is the first ore that you could mine manually. To manually mine ore, you just have to click on": "是您可以手动开采的第一种矿石。 要手动开采矿石，您只需点击",
    "Manually mine 5": "手动开采 5",
    "Game paused!": "游戏已暂停！",
    "Game resumed!": "游戏已恢复！",
    "Resume": "返回",
    "About": "关于",
    "and": "和",
    ". To be kept informed about other games and the future of this one, join Discord server and visit our official website.": ". 要随时了解其他游戏和这款游戏的未来，请加入 Discord 服务器并访问我们的官方网站。",
    "(productions, buildings, recipes, techs and etc ...)": "（生产、建筑、配方、技术等......）",
    "Congrats!. You unlock": "恭喜！。 你解锁了",
    "Data": "数据",
    "Discord": "Discord",
    "Export Save": "导出存档",
    "Factorio": "异星工厂",
    "Factorio Offical Site": "异星工厂官方网站",
    "Flaticon": "平面图标",
    "Fontawesome": "Fontawesome",
    "Freddec Games": "Freddec Games",
    "Game saved in local storage!": "游戏保存在本地存储中！",
    "Hard Reset": "硬重置",
    "Icons are provided by": "图标由提供",
    "Import Save": "导入存档",
    "Iron Plate": "铁板",
    "manually. You have to build a": "手动。 你必须建造一个",
    "Masonry": "采石",
    "Options": "选项",
    "Show researched techs": "展示研究的技术",
    "Stone": "石头",
    "Stone Furnace": "石炉",
    "Stone Mining": "开采石头",
    "tab. As you see, you cannot produce": "标签。 如您所见，您无法生产",
    "This game has been designed and developed by": "这个游戏是由设计和开发的",
    "This game is largely inspired by the game": "这个游戏很大程度上是受到游戏的启发",
    "This is still under development with bugs and maybe data lost!": "这仍在开发中，有错误，可能会丢失数据！",
    "to do that. To build a": "要做到这一点。 建立一个",
    "Wipe Local": "硬重置",
    "you have to manually mine": "你必须手动开采",
    ", you could build a": "，你可以建造一个",
    ">Basic Drill": ">基础钻",
    "Automated": "自动化",
    "Automated production": "自动化生产",
    "automatically too. To do that you have to build a": "也自动。 为此，您必须建造一个",
    "automatically, you have to produce": "自动地，你必须生产",
    "automatically. When there is not enought": "自动地。 当没有足够的时候",
    "Basic Drill": "基础钻",
    "Build 1": "建造 1",
    "Building": "建筑",
    "button will appear: this means there is a lack of input resource to produce automatically.": "按钮将出现：这意味着缺少自动生成的输入资源。",
    "button. Now since your": "按钮。 现在自从你的",
    "Congrats! You automated": "恭喜！ 你自动化了",
    "Furnace": "炉",
    "Iron Plate Production": "铁板生产",
    "Iron Production": "铁生产",
    "Mine manually": "手动挖矿",
    "Mining Drill": "采矿钻",
    "None": "无",
    "Now with": "现在有了",
    "production": "生产",
    "production is automated, it is consuming your": "生产是自动化的，它正在消耗你的",
    "production.": "生产。",
    "production. If you want you could stop the production by clicking on": "生产。 如果你愿意，你可以通过点击停止生产",
    "So to continue to produce": "所以要继续生产",
    "the": "",
    "to automate": "自动化",
    "to have enough": "有足够的",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);