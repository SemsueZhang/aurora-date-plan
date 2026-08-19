// ===== CupidLink 多语言字典（中 / 英 / 日）=====
const I18N = {
  zh: {
    // 通用
    navHome: '首页',
    navGuide: '使用指南',
    navAbout: '关于',
    backLink: '← 返回首页',
    // index
    pageTitle: 'CupidLink · 约会计划卡片',
    subtitle: '一起来规划属于我们的约会吧',
    stepOf: '第 {n} / 5 步',
    doneLabel: '清单已生成 ✨',
    dotTime: '约会时间段',
    dotActivity: '打算做什么',
    dotFood: '吃什么',
    dotTravel: '出行范围',
    dotMood: '我此刻的心情',
    s1Title: '约会时间段',
    startLabel: '开始',
    endLabel: '结束',
    s2Title: '打算做什么（可多选）',
    s3Title: '吃什么（可多选）',
    s4Title: '出行范围',
    s5Title: '我此刻的心情',
    s5Hint: '约会前、发出邀约时的心情（可多选）',
    s6Title: '约会清单（可复制）',
    radioLocal: '本市',
    radioCross: '跨市出行',
    meetLabel: '见面地点',
    meetPh: '输入见面地点，如：万象城 / 人民公园',
    meetConfirmed: '✅ 已确认：',
    confirm: '确定',
    copyBtn: '复制清单',
    resetBtn: '重新填写',
    prev: '← 上一项',
    next: '下一项 →',
    generate: '生成约会清单 ✨',
    backEdit: '← 返回修改',
    copySuccess: '✅复制成功！可以粘贴发给对方啦',
    copyFallback: '✅已复制',
    notSet: '未设置',
    none: '暂未选择',
    meetDefault: '待定',
    // 预设标签
    act1: '🎬 看电影', act2: '🌳 散步逛公园', act3: '📸 探店打卡', act4: '🖼️ 看展',
    act5: '🎤 KTV', act6: '⚽ 运动游玩', act7: '🎮 打游戏', act8: '🛍️ 逛街购物',
    act9: '🧶 手工DIY', act10: '♨️ 泡温泉', act11: '🏕️ 露营', act12: '🎶 看演出',
    act13: '🏔️ 爬山', act14: '📷 街拍',
    food1: '🍲 火锅', food2: '🍖 烤肉', food3: '🍝 西餐', food4: '🍢 小吃夜市',
    food5: '🧋 奶茶甜品', food6: '🥗 简餐轻食', food7: '🌶️ 川菜', food8: '🍣 日料',
    food9: '🍗 韩式炸鸡', food10: '🦞 小龙虾', food11: '☕ 咖啡小坐', food12: '🍜 面馆',
    food13: '🦐 海鲜大餐', food14: '🥟 早茶点心',
    mood1: '🥰 想你啦', mood2: '🤩 好期待见面', mood3: '😊 心情超好',
    mood4: '😅 有点小紧张', mood5: '😌 轻松自在', mood6: '🥳 兴奋到不行',
    actPh: '其他活动，输入后点确定或回车添加',
    foodPh: '其他美食，输入后点确定或回车添加',
    // 生成文案
    gen: {
      title: '💌约会计划',
      divider: '——————————',
      time: '⏰约会时间段：',
      travel: '📍出行范围：',
      meet: '🗺️见面地点：',
      activity: '🎯打算做什么：',
      food: '🍜吃什么：',
      mood: '💖我此刻的心情：',
      sep: '、',
      endings: [
        '希望有一次美好的约会✨',
        '好期待和你见面呀💕',
        '一想到能见到你就开心🥰',
        '想你啦，快见面吧🌷',
        '准备了一点点小心思，等你来哦🎁',
        '和你在一起的每一刻都值得期待💗',
        '这次约会，一定会留下甜甜的回忆🍬',
        '倒计时开始，等你哦⏳💖'
      ]
    },
    // guide
    guidePageTitle: 'CupidLink · 使用指南',
    guideH1: '📖 使用指南',
    guideH3a: '如何使用约会计划生成器',
    g1: '按步骤逐项填写：时间段 → 做什么 → 吃什么 → 出行范围 → 心情',
    g2: '点击标签多选活动、美食；输入文字后点【确定】或按回车可自定义选项',
    g3: '出行范围一步可以填写见面地点，点【确定】确认',
    g4: '心情指你发出邀约前、此刻的心情',
    g5: '用【上一项 / 下一项】按钮切换步骤，顶部圆点可直接跳转',
    g6: '最后一步点击【生成约会清单】，结尾会随机带一句甜甜的祝福',
    g7: '点击【复制清单】，直接粘贴发给你的约会对象',
    guideH3b: '提示',
    tip1: '🔸全部数据保存在浏览器本地，不会上传任何服务器',
    tip2: '🔸支持手机、电脑访问',
    tip3: '🔸标签可以重复点击取消选中',
    // about
    aboutPageTitle: 'CupidLink · 关于项目',
    aboutH1: '💘 关于 CupidLink',
    aboutP1: 'CupidLink 是一个简单的静态网页工具，用来快速生成约会计划清单。',
    aboutP2: '全部运行在浏览器，无后端，所有数据不会外传。适合情侣之间沟通约会安排。',
    aboutGit: '项目开源托管于 GitHub Pages。',
    aboutName: '项目名含义：CupidLink，Cupid（丘比特）与 Link（连线）的结合，寓意由爱神牵线的浪漫赴约。',
    // 404
    e404Title: '404 · 页面找不到',
    e404Msg: '页面不存在，或许链接出错啦',
    e404Back: '回到首页'
  },

  en: {
    // 通用
    navHome: 'Home',
    navGuide: 'Guide',
    navAbout: 'About',
    backLink: '← Back to home',
    // index
    pageTitle: 'CupidLink · Date Plan Card',
    subtitle: "Let's plan our date together",
    stepOf: 'Step {n} / 5',
    doneLabel: 'Your plan is ready ✨',
    dotTime: 'Date & time',
    dotActivity: 'Activities',
    dotFood: 'Food',
    dotTravel: 'Travel range',
    dotMood: 'My mood',
    s1Title: 'Date & Time',
    startLabel: 'Start',
    endLabel: 'End',
    s2Title: 'What to do (multi-select)',
    s3Title: 'What to eat (multi-select)',
    s4Title: 'Travel Range',
    s5Title: 'My Mood Right Now',
    s5Hint: 'How you feel before sending the invitation (multi-select)',
    s6Title: 'Date Plan (copyable)',
    radioLocal: 'In town',
    radioCross: 'Cross-city',
    meetLabel: 'Meeting place',
    meetPh: 'Enter meeting place, e.g. Mall / Park',
    meetConfirmed: '✅ Confirmed: ',
    confirm: 'OK',
    copyBtn: 'Copy plan',
    resetBtn: 'Start over',
    prev: '← Back',
    next: 'Next →',
    generate: 'Generate date plan ✨',
    backEdit: '← Edit',
    copySuccess: '✅ Copied! Now paste and send it',
    copyFallback: '✅ Copied',
    notSet: 'Not set',
    none: 'Not selected',
    meetDefault: 'TBD',
    // 预设标签
    act1: '🎬 Watch a movie', act2: '🌳 Stroll in the park', act3: '📸 Try new spots', act4: '🖼️ Art exhibit',
    act5: '🎤 KTV', act6: '⚽ Sports & games', act7: '🎮 Gaming', act8: '🛍️ Shopping',
    act9: '🧶 DIY crafts', act10: '♨️ Hot spring', act11: '🏕️ Camping', act12: '🎶 Live show',
    act13: '🏔️ Hiking', act14: '📷 Street photos',
    food1: '🍲 Hotpot', food2: '🍖 BBQ', food3: '🍝 Western', food4: '🍢 Night market',
    food5: '🧋 Milk tea & dessert', food6: '🥗 Light meal', food7: '🌶️ Sichuan', food8: '🍣 Japanese',
    food9: '🍗 Korean fried chicken', food10: '🦞 Crayfish', food11: '☕ Coffee break', food12: '🍜 Noodles',
    food13: '🦐 Seafood feast', food14: '🥟 Dim sum',
    mood1: '🥰 Missing you', mood2: "🤩 Can't wait to meet", mood3: '😊 Feeling great',
    mood4: '😅 A bit nervous', mood5: '😌 Relaxed', mood6: '🥳 Super excited',
    actPh: 'Other activities — type then press OK or Enter',
    foodPh: 'Other food — type then press OK or Enter',
    // 生成文案
    gen: {
      title: '💌Date Plan',
      divider: '——————————',
      time: '⏰Time: ',
      travel: '📍Travel range: ',
      meet: '🗺️Meeting place: ',
      activity: '🎯Activities: ',
      food: '🍜Food: ',
      mood: '💖My mood: ',
      sep: ', ',
      endings: [
        'Hope we have a wonderful date ✨',
        "Can't wait to see you 💕",
        'Just thinking about you makes me smile 🥰',
        'Missing you — see you soon 🌷',
        'I have a little surprise ready for you 🎁',
        'Every moment with you is worth looking forward to 💗',
        'This date will leave sweet memories 🍬',
        'Countdown begins — waiting for you ⏳💖'
      ]
    },
    // guide
    guidePageTitle: 'CupidLink · Guide',
    guideH1: '📖 Guide',
    guideH3a: 'How to use the date plan generator',
    g1: 'Fill in step by step: time → activities → food → travel → mood',
    g2: 'Tap tags to select activities and food; type text then press【OK】or Enter for custom options',
    g3: 'In the travel step, enter a meeting place and confirm with【OK】',
    g4: 'Mood means how you feel before sending the invitation',
    g5: 'Use【Back / Next】to switch steps; tap the dots on top to jump',
    g6: 'On the last step tap【Generate date plan】; the ending has a random sweet message',
    g7: 'Tap【Copy plan】and paste it to your date',
    guideH3b: 'Tips',
    tip1: '🔸 All data stays in your browser — nothing is uploaded to any server',
    tip2: '🔸 Works on phone and computer',
    tip3: '🔸 Tap a tag again to deselect it',
    // about
    aboutPageTitle: 'CupidLink · About',
    aboutH1: '💘 About CupidLink',
    aboutP1: 'CupidLink is a simple static web tool that quickly generates a date plan.',
    aboutP2: 'Everything runs in your browser — no backend, no data leaves your device. Great for couples planning dates.',
    aboutGit: 'Open-sourced and hosted on GitHub Pages.',
    aboutName: 'Name meaning: CupidLink — Cupid + Link, a romantic date arranged by the god of love.',
    // 404
    e404Title: '404 · Page Not Found',
    e404Msg: "The page doesn't exist — maybe a broken link",
    e404Back: 'Back to home'
  },

  ja: {
    // 通用
    navHome: 'ホーム',
    navGuide: '使い方',
    navAbout: 'このアプリについて',
    backLink: '← ホームへ戻る',
    // index
    pageTitle: 'CupidLink · デートプランカード',
    subtitle: '一緒にデートを計画しよう',
    stepOf: 'ステップ {n} / 5',
    doneLabel: 'プラン完成 ✨',
    dotTime: '日時',
    dotActivity: 'やりたいこと',
    dotFood: 'ごはん',
    dotTravel: '移動範囲',
    dotMood: '今の気持ち',
    s1Title: '日時',
    startLabel: '開始',
    endLabel: '終了',
    s2Title: 'やりたいこと（複数選択可）',
    s3Title: '何を食べるか（複数選択可）',
    s4Title: '移動範囲',
    s5Title: '今の気持ち',
    s5Hint: 'デート前・誘うときの気持ち（複数選択可）',
    s6Title: 'デートプラン（コピー可）',
    radioLocal: '市内',
    radioCross: '他都市',
    meetLabel: '待ち合わせ場所',
    meetPh: '待ち合わせ場所を入力（例：駅前、公園）',
    meetConfirmed: '✅ 確定：',
    confirm: '確定',
    copyBtn: 'コピー',
    resetBtn: 'やり直す',
    prev: '← 戻る',
    next: '次へ →',
    generate: 'デートプランを生成 ✨',
    backEdit: '← 修正に戻る',
    copySuccess: '✅ コピーしました！相手に送ってね',
    copyFallback: '✅ コピーしました',
    notSet: '未設定',
    none: '未選択',
    meetDefault: '未定',
    // 预设标签
    act1: '🎬 映画を見る', act2: '🌳 公園を散歩', act3: '📸 新しいお店巡り', act4: '🖼️ 展覧会',
    act5: '🎤 カラオケ', act6: '⚽ スポーツ', act7: '🎮 ゲーム', act8: '🛍️ ショッピング',
    act9: '🧶 DIY', act10: '♨️ 温泉', act11: '🏕️ キャンプ', act12: '🎶 ライブ',
    act13: '🏔️ ハイキング', act14: '📷 街歩き写真',
    food1: '🍲 火鍋', food2: '🍖 焼肉', food3: '🍝 洋食', food4: '🍢 屋台夜市',
    food5: '🧋 タピオカ＆スイーツ', food6: '🥗 軽食', food7: '🌶️ 四川料理', food8: '🍣 日本料理',
    food9: '🍗 韓国チキン', food10: '🦞 小龍蝦', food11: '☕ カフェ', food12: '🍜 ラーメン',
    food13: '🦐 海鮮料理', food14: '🥟 点心',
    mood1: '🥰 会いたい', mood2: '🤩 会うのが楽しみ', mood3: '😊 すごく嬉しい',
    mood4: '😅 ちょっと緊張', mood5: '😌 リラックス', mood6: '🥳 超ワクワク',
    actPh: '他のアクティビティ（入力して確定またはEnter）',
    foodPh: '他の食べ物（入力して確定またはEnter）',
    // 生成文案
    gen: {
      title: '💌デートプラン',
      divider: '——————————',
      time: '⏰日時：',
      travel: '📍移動範囲：',
      meet: '🗺️待ち合わせ場所：',
      activity: '🎯やりたいこと：',
      food: '🍜ごはん：',
      mood: '💖今の気持ち：',
      sep: '、',
      endings: [
        '素敵なデートになりますように✨',
        '早く会いたいな💕',
        'あなたに会えると思うだけで嬉しい🥰',
        '会いたいよ、すぐに会おう🌷',
        'ちょっとしたサプライズを用意したよ🎁',
        'あなたといる時間は全部楽しみ💗',
        '今回のデート、甘い思い出になるね🍬',
        'カウントダウン開始、待ってるよ⏳💖'
      ]
    },
    // guide
    guidePageTitle: 'CupidLink · 使い方',
    guideH1: '📖 使い方',
    guideH3a: 'デートプラン生成の使い方',
    g1: 'ステップ順に：日時 → やりたいこと → ごはん → 移動 → 気持ち',
    g2: 'タグをクリックして複数選択。入力後【確定】またはEnterでカスタム追加',
    g3: '移動のステップで待ち合わせ場所を入力し、【確定】で確定',
    g4: '気持ちは、デート前に誘う側の今の気持ち',
    g5: '【戻る / 次へ】でステップを切り替え、上部の丸でジャンプ',
    g6: '最後のステップで【デートプランを生成】、末尾に甘いメッセージがランダム',
    g7: '【コピー】でコピーして、相手に送る',
    guideH3b: 'ヒント',
    tip1: '🔸 データはすべてブラウザ内。サーバーに送信されません',
    tip2: '🔸 スマホ・PC対応',
    tip3: '🔸 タグをもう一度タップで選択解除',
    // about
    aboutPageTitle: 'CupidLink · このアプリについて',
    aboutH1: '💘 CupidLinkについて',
    aboutP1: 'CupidLinkは、デートプランをすばやく作れるシンプルな静的ウェブツールです。',
    aboutP2: 'すべてブラウザ上で動作し、バックエンドなし。データは外に送信されません。カップルでデートを計画するのにぴったりです。',
    aboutGit: 'GitHub Pagesで公開しています。',
    aboutName: '名前の由来：CupidLink = Cupid（キューピッド）+ Link（つなぐ）。愛の神がつなぐロマンチックなデートの意味。',
    // 404
    e404Title: '404 · ページが見つかりません',
    e404Msg: 'ページが存在しません。リンクが間違っているかも',
    e404Back: 'ホームへ戻る'
  },

  'zh-TW': {
    // 通用
    navHome: '首頁',
    navGuide: '使用指南',
    navAbout: '關於',
    backLink: '← 回到首頁',
    // index
    pageTitle: 'CupidLink · 約會計劃卡片',
    subtitle: '一起來規劃屬於我們的約會吧',
    stepOf: '第 {n} / 5 步',
    doneLabel: '清單已產生 ✨',
    dotTime: '約會時間',
    dotActivity: '打算做什麼',
    dotFood: '吃什麼',
    dotTravel: '出行範圍',
    dotMood: '我此刻的心情',
    s1Title: '約會時間',
    startLabel: '開始',
    endLabel: '結束',
    s2Title: '打算做什麼（可複選）',
    s3Title: '吃什麼（可複選）',
    s4Title: '出行範圍',
    s5Title: '我此刻的心情',
    s5Hint: '約會前、發出邀約時的心情（可複選）',
    s6Title: '約會清單（可複製）',
    radioLocal: '本市',
    radioCross: '跨市出行',
    meetLabel: '見面地點',
    meetPh: '輸入見面地點，如：萬象城 / 人民公園',
    meetConfirmed: '✅ 已確認：',
    confirm: '確定',
    copyBtn: '複製清單',
    resetBtn: '重新填寫',
    prev: '← 上一項',
    next: '下一項 →',
    generate: '產生約會清單 ✨',
    backEdit: '← 返回修改',
    copySuccess: '✅複製成功！可以貼上發給對方啦',
    copyFallback: '✅已複製',
    notSet: '未設定',
    none: '暫未選擇',
    meetDefault: '待定',
    // 预设标签
    act1: '🎬 看電影', act2: '🌳 散步逛公園', act3: '📸 探店打卡', act4: '🖼️ 看展',
    act5: '🎤 KTV', act6: '⚽ 運動遊玩', act7: '🎮 打電動', act8: '🛍️ 逛街購物',
    act9: '🧶 手工DIY', act10: '♨️ 泡溫泉', act11: '🏕️ 露營', act12: '🎶 看演出',
    act13: '🏔️ 爬山', act14: '📷 街拍',
    food1: '🍲 火鍋', food2: '🍖 烤肉', food3: '🍝 西餐', food4: '🍢 小吃夜市',
    food5: '🧋 奶茶甜點', food6: '🥗 簡餐輕食', food7: '🌶️ 川菜', food8: '🍣 日料',
    food9: '🍗 韓式炸雞', food10: '🦞 小龍蝦', food11: '☕ 咖啡小坐', food12: '🍜 麵館',
    food13: '🦐 海鮮大餐', food14: '🥟 早茶點心',
    mood1: '🥰 想你啦', mood2: '🤩 好期待見面', mood3: '😊 心情超好',
    mood4: '😅 有點小緊張', mood5: '😌 輕鬆自在', mood6: '🥳 興奮到不行',
    actPh: '其他活動，輸入後點確定或按 Enter 新增',
    foodPh: '其他美食，輸入後點確定或按 Enter 新增',
    // 生成文案
    gen: {
      title: '💌約會計劃',
      divider: '——————————',
      time: '⏰約會時間：',
      travel: '📍出行範圍：',
      meet: '🗺️見面地點：',
      activity: '🎯打算做什麼：',
      food: '🍜吃什麼：',
      mood: '💖我此刻的心情：',
      sep: '、',
      endings: [
        '希望有一場美好的約會✨',
        '好期待和你見面呀💕',
        '一想到能見到你就很開心🥰',
        '想你啦，快見面吧🌷',
        '準備了一點點小心思，等你來喔🎁',
        '和你在一起的每一刻都值得期待💗',
        '這次約會，一定會留下甜甜的回憶🍬',
        '倒數計時開始，等你喔⏳💖'
      ]
    },
    // guide
    guidePageTitle: 'CupidLink · 使用指南',
    guideH1: '使用指南',
    guideH3a: '如何使用約會計劃產生器',
    g1: '按步驟逐項填寫：時間 → 做什麼 → 吃什麼 → 出行範圍 → 心情',
    g2: '點擊標籤複選活動、美食；輸入文字後點【確定】或按 Enter 可自訂選項',
    g3: '出行範圍這一步可以填寫見面地點，點【確定】確認',
    g4: '心情是指你發出邀約前、此刻的心情',
    g5: '用【上一項 / 下一項】按鈕切換步驟，頂部圓點可直接跳轉',
    g6: '最後一步點擊【產生約會清單】，結尾會隨機附上一句甜甜的祝福',
    g7: '點擊【複製清單】，直接貼上發給你的約會對象',
    guideH3b: '提示',
    tip1: '🔸所有資料都儲存在瀏覽器本機，不會上傳到任何伺服器',
    tip2: '🔸支援手機、電腦存取',
    tip3: '🔸標籤可重複點擊取消選取',
    // about
    aboutPageTitle: 'CupidLink · 關於專案',
    aboutH1: '關於 CupidLink',
    aboutP1: 'CupidLink 是一個簡單的靜態網頁工具，用來快速產生約會計劃清單。',
    aboutP2: '完全在瀏覽器執行，無後端，所有資料不會外流。適合情侶之間溝通約會安排。',
    aboutGit: '專案以開放原始碼託管於 GitHub Pages。',
    aboutName: '專案名稱含義：CupidLink，Cupid（邱比特）與 Link（連線）的結合，寓意由愛神牽線的浪漫赴約。',
    // 404
    e404Title: '404 · 頁面找不到',
    e404Msg: '頁面不存在，或許連結出錯了',
    e404Back: '回到首頁'
  }
};

// ===== 语言状态与切换 =====
let currentLang = 'zh';
try {
  currentLang = localStorage.getItem('cupidlink_lang') || 'zh';
} catch (e) { /* localStorage 不可用时回退默认 */ }

function t(key) {
  const langObj = I18N[currentLang] || I18N.zh;
  if (key in langObj) return langObj[key];
  return (I18N.zh[key] !== undefined) ? I18N.zh[key] : key;
}

function applyLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('cupidlink_lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  const titleEl = document.querySelector('title');
  document.title = t(titleEl && titleEl.dataset.i18n || 'pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  if (window.onLangChange) window.onLangChange();
}

// 初始化：绑定语言按钮 + 应用已保存语言
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});
applyLang(currentLang);
