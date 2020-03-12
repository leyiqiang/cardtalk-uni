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
const HISTORY = '最近使用'

const state = {
  selectedCategory: WANT,
  selectedCards: [],
  categories: [HISTORY, WANT, TOOL, FOOD, PEOPLE, ANIMAL, BODY, CLOTH, TRAFFIC, LOCATION, TIME, MOOD, MOTION, CONTRACT],
  list: [
    { name: '我想要', category: WANT, pictureLink: "../../static/cardImages/iwant.jpg",},
    { name: '是的', category: WANT, pictureLink: "../../static/cardImages/yes.jpg",},
    { name: '不', category: WANT, pictureLink: "../../static/cardImages/no.jpg",},
    { name: '我不想要', category: WANT, pictureLink: "../../static/cardImages/idontwant.jpg",},
    { name: '停', category: WANT, pictureLink: "../../static/cardImages/stop.jpg",},
    { name: '结束', category: WANT, pictureLink: "../../static/cardImages/stop.jpg",},
    { name: '我想去', category: WANT, pictureLink: "../../static/cardImages/iwanttogo.jpg",},
    { name: '玩具', category: TOOL, pictureLink: "../../static/cardImages/toy.jpg",},
    { name: '图画书', category: TOOL, pictureLink: "../../static/cardImages/picbooks.jpg",},
    { name: '球', category: TOOL, pictureLink: "../../static/cardImages/ball.jpg",},
    { name: '洋娃娃', category: TOOL, pictureLink: "../../static/cardImages/doll.jpg",},
    { name: '积木', category: TOOL, pictureLink: "../../static/cardImages/blocks.jpg", },
	{ name: '橡皮泥', category: TOOL, pictureLink: "../../static/cardImages/clay.jpg", },
	{ name: '气球', category: TOOL, pictureLink: "../../static/cardImages/ballon.jpg",},
	{ name: '玩具车', category: TOOL, pictureLink: "../../static/cardImages/toycar.jpg",},
	{ name: '电视', category: TOOL, pictureLink: "../../static/cardImages/tv.jpg",},
	{ name: '拼图', category: TOOL, pictureLink: "../../static/cardImages/puzzles.jpg",},
	{ name: '电子游戏', category: TOOL, pictureLink: "../../static/cardImages/videogame.jpg",},
	{ name: '棋盘游戏', category: TOOL, pictureLink: "../../static/cardImages/boardgame.jpg",},
	{ name: 'DVD', category: TOOL, pictureLink: "../../static/cardImages/dvd.jpg",},
	{ name: '电脑', category: TOOL, pictureLink: "../../static/cardImages/computer.jpg",},
	{ name: '平板电脑', category: TOOL, pictureLink: "../../static/cardImages/tablet.jpg",},
	{ name: '蹦床', category: TOOL, pictureLink: "../../static/cardImages/trampoline.jpg",},
	{ name: '蜡笔', category: TOOL, pictureLink: "../../static/cardImages/crayons.jpg",},
	{ name: '彩色铅笔', category: TOOL, pictureLink: "../../static/cardImages/coloredpencils.jpg",},
	{ name: '铅笔', category: TOOL, pictureLink: "../../static/cardImages/pencils.jpg",},
	{ name: '圆珠笔', category: TOOL, pictureLink: "../../static/cardImages/ballpen.jpg",},
	{ name: '笔', category: TOOL, pictureLink: "../../static/cardImages/pen.jpg",},
	{ name: '笔记本', category: TOOL, pictureLink: "../../static/cardImages/notebook.jpg",},
	{ name: '剪刀', category: TOOL, pictureLink: "../../static/cardImages/scissors.jpg",},
	{ name: '胶水', category: TOOL, pictureLink: "../../static/cardImages/glue.jpg",},
	{ name: '课桌', category: TOOL, pictureLink: "../../static/cardImages/desk.jpg",},
	{ name: '椅子', category: TOOL, pictureLink: "../../static/cardImages/chair.jpg",},
	{ name: '勺子', category: TOOL, pictureLink: "../../static/cardImages/spoon.jpg",},
	{ name: '叉子', category: TOOL, pictureLink: "../../static/cardImages/fork.jpg",},
	{ name: '刀子', category: TOOL, pictureLink: "../../static/cardImages/knife.jpg",},
	{ name: '筷子', category: TOOL, pictureLink: "../../static/cardImages/chopsticks.jpg",},
	{ name: '杯子', category: TOOL, pictureLink: "../../static/cardImages/cup.jpg",},
	{ name: '盘子', category: TOOL, pictureLink: "../../static/cardImages/plate.jpg",},
	{ name: '眼镜', category: TOOL, pictureLink: "../../static/cardImages/glasses.jpg",},
	{ name: '玩偶', category: TOOL, pictureLink: "../../static/cardImages/teddybear.jpg",},
	
	{ name: '水', category: FOOD, pictureLink: "../../static/cardImages/water.jpg",},
	{ name: '牛奶', category: FOOD, pictureLink: "../../static/cardImages/milk.jpg",},
	{ name: '果汁', category: FOOD, pictureLink: "../../static/cardImages/juice.jpg",},
	{ name: '茶', category: FOOD, pictureLink: "../../static/cardImages/tea.jpg",},
	{ name: '米饭', category: FOOD, pictureLink: "../../static/cardImages/rice.jpg",},
	{ name: '面包', category: FOOD, pictureLink: "../../static/cardImages/bread.jpg",},
	{ name: '零食', category: FOOD, pictureLink: "../../static/cardImages/snacks.jpg",},
	{ name: '香蕉', category: FOOD, pictureLink: "../../static/cardImages/bananas.jpg",},
	{ name: '糖果', category: FOOD, pictureLink: "../../static/cardImages/candy.jpg",},
	{ name: '冰淇淋', category: FOOD, pictureLink: "../../static/cardImages/icecream.jpg",},
	{ name: '巧克力', category: FOOD, pictureLink: "../../static/cardImages/chocolate.jpg",},
	{ name: '饼干', category: FOOD, pictureLink: "../../static/cardImages/cookies.jpg",},
	{ name: '口香糖', category: FOOD, pictureLink: "../../static/cardImages/gum.jpg",},
	{ name: '酸奶', category: FOOD, pictureLink: "../../static/cardImages/yogurt.jpg",},
	{ name: '蛋糕', category: FOOD, pictureLink: "../../static/cardImages/cake.jpg",},
	{ name: '汤', category: FOOD, pictureLink: "../../static/cardImages/soup.jpg",},
	{ name: '三明治', category: FOOD, pictureLink: "../../static/cardImages/sandwich.jpg",},
	{ name: '汉堡包', category: FOOD, pictureLink: "../../static/cardImages/hamburger.jpg",},
	{ name: '牛排', category: FOOD, pictureLink: "../../static/cardImages/steak.jpg",},
	{ name: '拉面', category: FOOD, pictureLink: "../../static/cardImages/ramen.jpg",},
	{ name: '披萨', category: FOOD, pictureLink: "../../static/cardImages/pizza.jpg",},
	{ name: '意大利面', category: FOOD, pictureLink: "../../static/cardImages/spagehetti.jpg",},
	{ name: '盒饭', category: FOOD, pictureLink: "../../static/cardImages/bento.jpg",},
	{ name: '水壶', category: FOOD, pictureLink: "../../static/cardImages/watterbottle.jpg",},
	{ name: '奶茶', category: FOOD, pictureLink: "../../static/cardImages/milktea.jpg",},
	{ name: '饮料', category: FOOD, pictureLink: "../../static/cardImages/beverage.jpg",},
	
	{ name: '我', category: PEOPLE, pictureLink: "../../static/cardImages/me.jpg",},
	{ name: '你', category: PEOPLE, pictureLink: "../../static/cardImages/you.jpg",},
	{ name: '他', category: PEOPLE, pictureLink: "../../static/cardImages/he.jpg",},
	{ name: '她', category: PEOPLE, pictureLink: "../../static/cardImages/she.jpg",},
	{ name: '妈妈', category: PEOPLE, pictureLink: "../../static/cardImages/mom.jpg",},
	{ name: '爸爸', category: PEOPLE, pictureLink: "../../static/cardImages/dad.jpg",},
	{ name: '大家', category: PEOPLE, pictureLink: "../../static/cardImages/everyone.jpg",},
	{ name: '哥哥', category: PEOPLE, pictureLink: "../../static/cardImages/olderbrother.jpg",},
	{ name: '姐姐', category: PEOPLE, pictureLink: "../../static/cardImages/oldersister.jpg",},
	{ name: '弟弟', category: PEOPLE, pictureLink: "../../static/cardImages/youngerbrother.jpg",},
	{ name: '妹妹', category: PEOPLE, pictureLink: "../../static/cardImages/youngersister.jpg",},
	{ name: '婴儿', category: PEOPLE, pictureLink: "../../static/cardImages/baby.jpg",},
	{ name: '男孩', category: PEOPLE, pictureLink: "../../static/cardImages/boy.jpg",},
	{ name: '女孩', category: PEOPLE, pictureLink: "../../static/cardImages/girl.jpg",},
	{ name: '叔叔', category: PEOPLE, pictureLink: "../../static/cardImages/uncle.jpg",},
	{ name: '阿姨', category: PEOPLE, pictureLink: "../../static/cardImages/aunt.jpg",},
	
	{ name: '狗', category: ANIMAL, pictureLink: "../../static/cardImages/dog.jpg",},
	{ name: '猫', category: ANIMAL, pictureLink: "../../static/cardImages/cat.jpg",},
	{ name: '鸟', category: ANIMAL, pictureLink: "../../static/cardImages/bird.jpg",},
	{ name: '鱼', category: ANIMAL, pictureLink: "../../static/cardImages/fish.jpg",},
	{ name: '昆虫', category: ANIMAL, pictureLink: "../../static/cardImages/insects.jpg",},

	{ name: '脸', category: BODY, pictureLink: "../../static/cardImages/face.jpg",},
	{ name: '眼睛', category: BODY, pictureLink: "../../static/cardImages/eye.jpg",},
	{ name: '鼻子', category: BODY, pictureLink: "../../static/cardImages/nose.jpg",},
	{ name: '嘴巴', category: BODY, pictureLink: "../../static/cardImages/mouth.jpg",},
	{ name: '耳朵', category: BODY, pictureLink: "../../static/cardImages/ear.jpg",},
	{ name: '手', category: BODY, pictureLink: "../../static/cardImages/hand.jpg",},
	{ name: '头', category: BODY, pictureLink: "../../static/cardImages/head.jpg",},
	{ name: '肚子', category: BODY, pictureLink: "../../static/cardImages/stomach.jpg",},
	{ name: '背部', category: BODY, pictureLink: "../../static/cardImages/back.jpg",},
	{ name: '屁股', category: BODY, pictureLink: "../../static/cardImages/bottom.jpg",},
	{ name: '脚', category: BODY, pictureLink: "../../static/cardImages/foot.jpg",},
	{ name: '手指', category: BODY, pictureLink: "../../static/cardImages/fingers.jpg",},
	{ name: '胳膊', category: BODY, pictureLink: "../../static/cardImages/arm.jpg",},
	{ name: '膝盖', category: BODY, pictureLink: "../../static/cardImages/knee.jpg",},
	{ name: '头发', category: BODY, pictureLink: "../../static/cardImages/hair.jpg",},
	{ name: '牙齿', category: BODY, pictureLink: "../../static/cardImages/teeth.jpg",},
	{ name: '舌头', category: BODY, pictureLink: "../../static/cardImages/tongue.jpg",},
	{ name: '喉咙', category: BODY, pictureLink: "../../static/cardImages/throat.jpg",},
	
	{ name: 'T恤', category: CLOTH, pictureLink: "../../static/cardImages/tshirt.jpg",},
	{ name: '衬衫', category: CLOTH, pictureLink: "../../static/cardImages/shirt.jpg",},
	{ name: '裤子', category: CLOTH, pictureLink: "../../static/cardImages/pant.jpg",},
	{ name: '裙子', category: CLOTH, pictureLink: "../../static/cardImages/skirt.jpg",},
	{ name: '内衣', category: CLOTH, pictureLink: "../../static/cardImages/underwear.jpg",},
	{ name: '尿布', category: CLOTH, pictureLink: "../../static/cardImages/diaper.jpg",},
	{ name: '夹克', category: CLOTH, pictureLink: "../../static/cardImages/jacket.jpg",},
	{ name: '鞋子', category: CLOTH, pictureLink: "../../static/cardImages/shoes.jpg",},
	{ name: '袜子', category: CLOTH, pictureLink: "../../static/cardImages/socks.jpg",},
	{ name: '帽子', category: CLOTH, pictureLink: "../../static/cardImages/hat.jpg",},
	{ name: '背包', category: CLOTH, pictureLink: "../../static/cardImages/backpack.jpg",},
	{ name: '围巾', category: CLOTH, pictureLink: "../../static/cardImages/scarf.jpg",},
	{ name: '睡衣', category: CLOTH, pictureLink: "../../static/cardImages/pajamas.jpg",},
	{ name: '拖鞋', category: CLOTH, pictureLink: "../../static/cardImages/indoorshoes.jpg",},
	{ name: '泳衣', category: CLOTH, pictureLink: "../../static/cardImages/swimsuit.jpg",},
	
	{ name: '汽车', category: TRAFFIC, pictureLink: "../../static/cardImages/car.jpg",},
	{ name: '公交车', category: TRAFFIC, pictureLink: "../../static/cardImages/bus.jpg",},
	{ name: '火车', category: TRAFFIC, pictureLink: "../../static/cardImages/train.jpg",},
	{ name: '自行车', category: TRAFFIC, pictureLink: "../../static/cardImages/bicycle.jpg",},
	{ name: '船', category: TRAFFIC, pictureLink: "../../static/cardImages/boat.jpg",},
	{ name: '高速列车', category: TRAFFIC, pictureLink: "../../static/cardImages/bullettrain.jpg",},
	{ name: '高铁', category: TRAFFIC, pictureLink: "../../static/cardImages/bullettrain.jpg",},
	{ name: '地铁', category: TRAFFIC, pictureLink: "../../static/cardImages/subway.jpg",},
	{ name: '电梯', category: TRAFFIC, pictureLink: "../../static/cardImages/elevator.jpg",},
	{ name: '飞机', category: TRAFFIC, pictureLink: "../../static/cardImages/airplane.jpg",},
	
	{ name: '家', category: LOCATION, pictureLink: "../../static/cardImages/home.jpg",},
	{ name: '房子', category: LOCATION, pictureLink: "../../static/cardImages/house.jpg",},
	{ name: '厕所', category: LOCATION, pictureLink: "../../static/cardImages/toilet.jpg",},
	{ name: '浴室', category: LOCATION, pictureLink: "../../static/cardImages/bath.jpg",},
	{ name: '客厅', category: LOCATION, pictureLink: "../../static/cardImages/livingroom.jpg",},
	{ name: '厨房', category: LOCATION, pictureLink: "../../static/cardImages/kitchen.jpg",},
	{ name: '卧室', category: LOCATION, pictureLink: "../../static/cardImages/bedroom.jpg",},
	{ name: '公园', category: LOCATION, pictureLink: "../../static/cardImages/park.jpg",},
	{ name: '学校', category: LOCATION, pictureLink: "../../static/cardImages/school.jpg",},
	{ name: '超市', category: LOCATION, pictureLink: "../../static/cardImages/supermarket.jpg",},
	{ name: '医院', category: LOCATION, pictureLink: "../../static/cardImages/hospital.jpg",},
	{ name: '车站', category: LOCATION, pictureLink: "../../static/cardImages/station.jpg",},
	{ name: '公车站', category: LOCATION, pictureLink: "../../static/cardImages/busstop.jpg",},
	{ name: '动物园', category: LOCATION, pictureLink: "../../static/cardImages/zoo.jpg",},
	{ name: '水族馆', category: LOCATION, pictureLink: "../../static/cardImages/aquarium.jpg",},
	{ name: '人行横道', category: LOCATION, pictureLink: "../../static/cardImages/crosswalk.jpg",},
	
	{ name: '早上', category: TIME, pictureLink: "../../static/cardImages/morning.jpg",},
	{ name: '白天', category: TIME, pictureLink: "../../static/cardImages/daytime.jpg",},
	{ name: '中午', category: TIME, pictureLink: "../../static/cardImages/noon.jpg",},
	{ name: '晚上', category: TIME, pictureLink: "../../static/cardImages/night.jpg",},
	{ name: '今天', category: TIME, pictureLink: "../../static/cardImages/today.jpg",},
	{ name: '昨天', category: TIME, pictureLink: "../../static/cardImages/yesterday.jpg",},
	{ name: '明天', category: TIME, pictureLink: "../../static/cardImages/tomorrow.jpg",},
	{ name: '周末', category: TIME, pictureLink: "../../static/cardImages/weekends.jpg",},
	
	{ name: '喜欢', category: MOOD, pictureLink: "../../static/cardImages/like.jpg",},
	{ name: '讨厌', category: MOOD, pictureLink: "../../static/cardImages/hate.jpg",},
	{ name: '我不明白', category: MOOD, pictureLink: "../../static/cardImages/idontunderstand.jpg",},
	{ name: '高兴', category: MOOD, pictureLink: "../../static/cardImages/happy.jpg",},
	{ name: '难过', category: MOOD, pictureLink: "../../static/cardImages/sad.jpg",},
	{ name: '激动', category: MOOD, pictureLink: "../../static/cardImages/excited.jpg",},
	{ name: '无聊', category: MOOD, pictureLink: "../../static/cardImages/bored.jpg",},
	{ name: '好吃', category: MOOD, pictureLink: "../../static/cardImages/yummy.jpg",},
	{ name: '不好吃', category: MOOD, pictureLink: "../../static/cardImages/yucky.jpg",},
	{ name: '痛', category: MOOD, pictureLink: "../../static/cardImages/painful.jpg",},
	{ name: '害怕', category: MOOD, pictureLink: "../../static/cardImages/scared.jpg",},
	{ name: '很吵', category: MOOD, pictureLink: "../../static/cardImages/noisy.jpg",},
	{ name: '气人', category: MOOD, pictureLink: "../../static/cardImages/frustrated.jpg",},
	{ name: '害羞', category: MOOD, pictureLink: "../../static/cardImages/embarrassed.jpg",},
	
	{ name: '喝', category: MOTION, pictureLink: "../../static/cardImages/drink.jpg",},
	{ name: '吃', category: MOTION, pictureLink: "../../static/cardImages/eat.jpg",},
	{ name: '看', category: MOTION, pictureLink: "../../static/cardImages/look.jpg",},
	{ name: '说', category: MOTION, pictureLink: "../../static/cardImages/speak.jpg",},
	{ name: '去', category: MOTION, pictureLink: "../../static/cardImages/go.jpg",},
	{ name: '脱下', category: MOTION, pictureLink: "../../static/cardImages/takeoff.jpg",},
	{ name: '穿上', category: MOTION, pictureLink: "../../static/cardImages/wear.jpg",},
	{ name: '洗', category: MOTION, pictureLink: "../../static/cardImages/wash.jpg",},
	{ name: '刷牙', category: MOTION, pictureLink: "../../static/cardImages/brushteeth.jpg",},
	{ name: '开', category: MOTION, pictureLink: "../../static/cardImages/open.jpg",},
	{ name: '关', category: MOTION, pictureLink: "../../static/cardImages/close.jpg",},
	{ name: '起床', category: MOTION, pictureLink: "../../static/cardImages/getup.jpg",},
	{ name: '睡觉', category: MOTION, pictureLink: "../../static/cardImages/sleep.jpg",},
	{ name: '画画', category: MOTION, pictureLink: "../../static/cardImages/draw.jpg",},
	{ name: '吹泡泡', category: MOTION, pictureLink: "../../static/cardImages/blowbubble.jpg",},
	{ name: '坐', category: MOTION, pictureLink: "../../static/cardImages/sit.jpg",},
	{ name: '站', category: MOTION, pictureLink: "../../static/cardImages/stand.jpg",},
	{ name: '走', category: MOTION, pictureLink: "../../static/cardImages/walk.jpg",},
	{ name: '跑', category: MOTION, pictureLink: "../../static/cardImages/run.jpg",},
	{ name: '跳', category: MOTION, pictureLink: "../../static/cardImages/jump.jpg",},
	{ name: '举高高', category: MOTION, pictureLink: "../../static/cardImages/raise.jpg",},
	{ name: '笑', category: MOTION, pictureLink: "../../static/cardImages/smile.jpg",},
	{ name: '拉手', category: MOTION, pictureLink: "../../static/cardImages/shakehands.jpg",},
	{ name: '停', category: MOTION, pictureLink: "../../static/cardImages/stop2.jpg",},
	{ name: '拥抱', category: MOTION, pictureLink: "../../static/cardImages/hug.jpg",},
	
	{ name: '大的', category: CONTRACT, pictureLink: "../../static/cardImages/large.jpg",},
	{ name: '小的', category: CONTRACT, pictureLink: "../../static/cardImages/small.jpg",},
	{ name: '许多', category: CONTRACT, pictureLink: "../../static/cardImages/many.jpg",},
	{ name: '很少', category: CONTRACT, pictureLink: "../../static/cardImages/few.jpg",},
	{ name: '高', category: CONTRACT, pictureLink: "../../static/cardImages/high.jpg",},
	{ name: '低', category: CONTRACT, pictureLink: "../../static/cardImages/low.jpg",},
	{ name: '长', category: CONTRACT, pictureLink: "../../static/cardImages/long.jpg",},
	{ name: '短', category: CONTRACT, pictureLink: "../../static/cardImages/short.jpg",},
	{ name: '重', category: CONTRACT, pictureLink: "../../static/cardImages/heavy.jpg",},
	{ name: '轻', category: CONTRACT, pictureLink: "../../static/cardImages/light.jpg",},
	{ name: '前', category: CONTRACT, pictureLink: "../../static/cardImages/ahead.jpg",},
	{ name: '后', category: CONTRACT, pictureLink: "../../static/cardImages/behind.jpg",},
	{ name: '上面', category: CONTRACT, pictureLink: "../../static/cardImages/over.jpg",},
	{ name: '下面', category: CONTRACT, pictureLink: "../../static/cardImages/under.jpg",},
	
	{ name: '为什么', category: ASK, pictureLink: "../../static/cardImages/why.jpg",},
	{ name: '什么', category: ASK, pictureLink: "../../static/cardImages/what.jpg",},
	{ name: '谁', category: ASK, pictureLink: "../../static/cardImages/who.jpg",},
	{ name: '哪里', category: ASK, pictureLink: "../../static/cardImages/where.jpg",},
	{ name: '什么时候', category: ASK, pictureLink: "../../static/cardImages/when.jpg",},
	{ name: '哪一个', category: ASK, pictureLink: "../../static/cardImages/whichone.jpg",},
	{ name: '多少钱', category: ASK, pictureLink: "../../static/cardImages/howmuch.jpg",},
	{ name: '几点了', category: ASK, pictureLink: "../../static/cardImages/whattime.jpg",},
	{ name: '多少', category: ASK, pictureLink: "../../static/cardImages/howmany.jpg",},
	{ name: '几个', category: ASK, pictureLink: "../../static/cardImages/howmany2.jpg",},
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
	const { name, category, pictureLink } = card
    if(state.selectedCards.length < 3) {
      state.selectedCards.push({name, category, pictureLink})
    } else {
		state.selectedCards = []
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
