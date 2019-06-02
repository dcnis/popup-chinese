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
      },
      {
        id: 2,
        thumbnail: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: '10 signs you may have an asshole for a husband',
        level: 'Absolute Beginners',
        lastTimeWatched: '2019-06-02T12:00:00Z',
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
      },
      {
        id: 3,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "The Public Security Alarm",
        level: 'Elementary',
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
      },
      {
          id: 4,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Assault, Battery and the Future",
        level: "Elementary",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
      },
      {
          id: 5,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "The Art of Email",
        level: "Absolute Beginners",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
      },
             {
                 id: 6,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "The Art of Email",
        level: "Absolute Beginners",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
      },
      {
          id: 7,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "A good Scrubbing",
        level: "Advanced",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
      },
      {
          id: 8,
        thumbnail: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "A Fair Deal",
        level: "Advanced",
        lastTimeWatched: "2019-06-02T11:00:00Z",
        discussion: 'Iron Chicken knows which way the winds are blowing. It knows how much that shirt sells for at the Chegongzhuang Discount Market, and it isnt afraid of telling you straight out. So dont try to pull one over the Iron Chicken. It will not pity you. It will stick fast to its ideals of fairness, justice and affordable cotton casual-wear. And if you still insist on your ridiculous markup, it will walk away. Because the Iron Chicken does not need you. It does not need anyone. Learning Chinese? While there is less fowl here than our title might suggest, we had fun recording this show and would like to reiterate that the entire dialogue is Echos idea. So please do not use our general email address for your complaints. Rather, please direct your hate mail straight to the source by writing echo@popupchinese.com. In fact, feel free to write multiple times under different pseudonyms. And dont forget to compliment the rest of our Popup Staff while youre at it.',
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
