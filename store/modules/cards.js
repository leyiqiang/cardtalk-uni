const WANT = '想';
const TOOL = '工具';
const FOOD = '食物';
const PEOPLE = '人';
const ANIMAL = '动物';
const BODY = '身体';
const CLOTH = '衣服';
const TRAFFIC = '交通工具';
const LOCATION = '地点';
const TIME = '时间';
const MOOD = '心情';
const MOTION = '动作';
const CONTRACT = '对比';
const ASK = '提问';
const CUSTOMIZE = '我的';

const state = {
  selectedCategory: WANT,
  selectedCards: [],
  categories: [WANT, TOOL, FOOD, PEOPLE, ANIMAL, BODY, CLOTH, TRAFFIC, LOCATION, TIME, MOOD, MOTION, CONTRACT, ASK, CUSTOMIZE],
  list: [
    {
      name: '我想要',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '是的',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '不',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '我不想要',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '停',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '结束',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '我想去',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '拥抱',
      category: WANT,
      pictureLink: "",
    },
    {
      name: '玩具',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '图画书',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '球',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '洋娃娃',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '积木',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '画画',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '橡皮泥',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '气球',
      category: TOOL,
      pictureLink: "",
    },
    {
      name: '水',
      category: FOOD,
      pictureLink: "",
    },
    {
      name: '牛奶',
      category: FOOD,
      pictureLink: "",
    },
    {
      name: '果汁',
      category: FOOD,
      pictureLink: "",
    },
    {
      name: '茶',
      category: FOOD,
      pictureLink: "",
    },
    {
      name: '米饭',
      category: FOOD,
      pictureLink: "",
    },
    {
      name: '面包',
      category: FOOD,
      pictureLink: "",
    },
    {
      name: '零食',
      category: FOOD,
      pictureLink: "",
    },
    {
      name: '香蕉',
      category: FOOD,
      pictureLink: "",
    },
  ]
}

const getters = {
  getItemsByCategory: (state) => (category) => {
    return state.list.filter((o) => {
      return o.category === category
    })
  }
}

const mutations = {
  changeCategoryTo(state, category) {
    state.selectedCategory = category
  },
  addCard(state, card) {
    if(state.selectedCards.length < 4) {
      const { name, category, pictureLink } = card
      state.selectedCards.push({name, category, pictureLink})
    }
  },
  removeCard(state, index) {
    state.selectedCards.splice(index, 1)
  }
}

const actions = {
	
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
