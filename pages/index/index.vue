<template>
	<view>
		<view class="uni-flex uni-column index">
<!-- 			<view class="uni-padding-wrap uni-common-mt">
				<wuc-tab :tab-list="getCategoryNames" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
			</view> -->
			<div class='selected-cards-block'>
				<ul class='cards selected-cards'>
					<li>
						<div v-if="selectedCards[0]" @click="removeCardEvent(0)">
							<image class='card-img' :src="selectedCards[0].pictureLink"></image>
							<p class="card-text">{{selectedCards[0].name}}</p>
						</div>
						<div v-else class="card-slot"></div>
					</li>
					<li>
						<div v-if="selectedCards[1]" @click="removeCardEvent(1)">
							<image class='card-img' :src="selectedCards[1].pictureLink"></image>
							<p class="card-text">{{selectedCards[1].name}}</p>
						</div>
						<div v-else class="card-slot"></div>
					</li>
					<li>
						<div v-if="selectedCards[2]" @click="removeCardEvent(2)">
							<image class='card-img' :src="selectedCards[2].pictureLink"></image>
							<p class="card-text">{{selectedCards[2].name}}</p>
						</div>
						<div v-else class="card-slot"></div>
					</li>
	<!-- 						<li v-for="(card, index) in selectedCards"
								:index="index" :key="index"
								@click='removeCardEvent(index)'>
								<div>
									<image class='card-img' :src="card.pictureLink"></image>
									<p class="card-text">{{card.name}}</p>
								</div>
							</li> -->
				</ul>
				<button class='playbutton'
					type="default" 
					@click="textToSpeech">播放</button>
				<view class="uni-padding-wrap uni-common-mt">
					<wuc-tab :tab-list="getCategoryNames" 
					:tabCur.sync="TabCur" 
					@change="tabChange"
					select-class='selected-tab'></wuc-tab>
				</view>
			</div>
			
			<div class="choose-card-block">
<!-- 				<ul class='categories'>
					<li class='categories-item' v-for="(name, idx) in getCategoryNames"
					:index="idx" :key="name">
						{{name.name}}
					</li>
				</ul> -->
				<ul class='cards'>
					<li v-for="(card, index) in showSelectedItems" 
					:index="index" :key="index"
					@click='addCardEvent(index)'>
						<div>
							<image class='card-img' :src="card.pictureLink"></image>
							<p class="card-text">{{card.name}}</p>
						</div>
					</li>
				</ul>
			</div>
		</view>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import uniGrid from "@/components/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue";
	import { createNamespacedHelpers } from 'vuex';
	import Voice from '../../js_sdk/QuShe-baiduYY/QS-baiduyy/QS-baiduyy.js'
	const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('cards')
	const HISTORY = '最近使用'
	
	export default {
		data() {
			return {
				TabCur: 1,
				myWords: "",
				tabList: [{ name: '精选' }, { name: '订阅' }],
			}
		},
		components: { WucTab, uniGrid, uniGridItem },

		computed: {
			showSelectedItems() {
				if(this.selectedCategory === HISTORY) {
					let historyCards = uni.getStorageSync(HISTORY);
					return historyCards;
				}
				else {
					return this.getItemsByCategory(this.selectedCategory)
					
				}
			},
			getCategoryNames() {
				return this.categories.map(c =>{
					return {name: c}
				}
				)
			},
			...mapState([
				'selectedCategory',
			    'selectedCards',
			    'categories',
				]),
			...mapGetters([
				'getItemsByCategory'
				])
		},
		methods: {
			customizeTextToSpeech(card) {
				const cardWord = card.name;
				Voice(cardWord)
			},
			textToSpeech() {
		        const textList = this.selectedCards.map((c) => c.name )
		        const text = textList.join('')
				Voice(text)
		        // const url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=3&text=" + encodeURI(text)
				// let audio = uni.createInnerAudioContext();
				// audio.obeyMuteSwitch = false;
		        // audio.src = url;
				// uni.textToSpeech()
		        // audio.play()
			},
			tabChange(index) {
				this.TabCur = index;
				this.changeCategoryTo(this.categories[index]);
			},
			removeCardEvent(index) {
				this.removeCard(index)
			},
			addCardEvent(index) {
				const clickedCard = this.showSelectedItems[index];
				this.customizeTextToSpeech(clickedCard);
				this.addCard(clickedCard);
				
				let historyCards = uni.getStorageSync(HISTORY);
				if (!historyCards) {
					historyCards = []
				}
				if (historyCards.length >= 20) {
					historyCards.pop()
				} 
				historyCards.unshift(clickedCard)
				uni.setStorageSync(HISTORY, this.unique(historyCards));
			},
			unique(array){
				let obj = {};
				return array.reduce((cur, next) => {
					obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
					return cur;
				}, [])
			},
			...mapMutations([
				'changeCategoryTo',
				'addCard',
				'removeCard',
				]),
		}
	}
</script>

<style>
	@import url("index.css");
	.page {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		position: absolute;
	}
</style>