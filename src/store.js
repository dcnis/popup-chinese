import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lessons: [
      {
        id: 1,
        thumbnail: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Let me do it, myself',
        level: 'Intermediate',
        lastTimeWatched: '2019-06-02T10:00:00Z',
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!',
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      },
      {
        id: 2,
        thumbnail: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: '10 signs you may have an asshole for a husband',
        level: 'Absolute Beginners',
        lastTimeWatched: '2019-06-02T12:00:00Z',
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!'
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      },
      {
        id: 3,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "The Public Security Alarm",
        level: 'Elementary',
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!'
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      },
      {
        id: 4,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Assault, Battery and the Future",
        level: "Elementary",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!'
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      },
      {
        id: 5,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "The Art of Email",
        level: "Absolute Beginners",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!'
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      },
      {
        id: 6,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "The Art of Email",
        level: "Absolute Beginners",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!'
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      },
      {
        id: 7,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "A good Scrubbing",
        level: "Advanced",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!'
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      },
      {
        id: 8,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "A Fair Deal",
        level: "Advanced",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
        transcript: [
          {
            line: 1,
            speaker: '安吉',
            chinese: '你好!',
            pinyin: 'Nǐ hǎo',
            english: 'Hello!'
          },
          {
            line: 2,
            speaker: 'Shuo sun',
            chinese: '这是谁?',
            pinyin: 'Zhè shì shéi',
            english: 'Who is it?'
          },
          {
            line: 3,
            speaker: '安吉',
            chinese: '你的姥姥来了',
            pinyin: 'Nǐ de lǎolao láile',
            english: 'Your grandmom is it'
          },
          {
            line: 4,
            speaker: 'Shuo sun',
            chinese: '他妈的!',
            pinyin: 'Tā mā de',
            english: 'Damn!'
          }
        ],
        vocabulary: [
          {
            id: 1,
            chinese: '泰坦尼克号',
            pinyin: 'Tàitǎnníkè hào',
            english: 'Titanic',
            type: 'noun'
          },
          {
            id: 2,
            chinese: '咱们',
            pinyin: 'zánmen',
            english: 'we',
            type: 'pronoun'
          },
          {
            id: 3,
            chinese: '海水',
            pinyin: 'hǎishuǐ',
            english: 'seawater',
            type: 'noun'
          },
          {
            id: 4,
            chinese: '冰川',
            pinyin: 'bīngchuān',
            english: 'glacier (colloquially iceberg as well)',
            type: 'noun'
          },
          {
            id: 5,
            chinese: '冰山',
            pinyin: 'bīngshān',
            english: 'iceberg',
            type: 'noun'
          },
          {
            id: 6,
            chinese: '座',
            pinyin: 'zuò',
            english: 'large geographic objects',
            type: 'measure word'
          },
          {
            id: 7,
            chinese: '逃生',
            pinyin: 'táoshēng',
            english: "to escape with one's life",
            type: 'verb'
          },
          {
            id: 8,
            chinese: '头等舱',
            pinyin: 'tóuděngcāng',
            english: 'first class',
            type: 'noun'
          },
          {
            id: 9,
            chinese: '救生艇',
            pinyin: 'jiùshēngtǐng',
            english: 'lifeboat',
            type: 'noun'
          },
          {
            id: 10,
            chinese: '怪',
            pinyin: 'guài',
            english: 'to blame',
            type: 'verb'
          },
          {
            id: 11,
            chinese: '三等舱',
            pinyin: 'sānděngcāng',
            english: 'third class cabin',
            type: 'noun'
          },
          {
            id: 12,
            chinese: '抢',
            pinyin: 'qiǎng',
            english: 'to rob',
            type: 'verb'
          },
          {
            id: 13,
            chinese: '渗水',
            pinyin: 'shènshuǐ',
            english: 'to sink under water',
            type: 'verb'
          },
          {
            id: 14,
            chinese: '次',
            pinyin: 'cì',
            english: 'poor quality',
            type: 'adjective'
          }
        ]
      }
    ]
  },
  mutations: {
    updateTimestamp(state, lessonId){
      state.lessons
      .filter(item => item.id == lessonId)
      .map(lesson => lesson.lastTimeWatched = new Date().toISOString());
    }
  },
  actions: {
    updateTimestamp(context, lessonId) {
      context.commit('updateTimestamp', lessonId);
    }
  }
})
