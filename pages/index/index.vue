<template>
	<view>
		<view class="uni-flex uni-column">
			<view class="uni-padding-wrap uni-common-mt">
				<wuc-tab :tab-list="getCategoryNames" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
			</view>
			<view class="flex-item flex-item-V">
				<uni-grid :column="4" @change='removeCardEvent'>
					<uni-grid-item :index='0'>
					    <text class="text">{{selectedCards[0].name}}</text>
					</uni-grid-item>
					<uni-grid-item :index='1'>
					    <text class="text">{{selectedCards[1].name}}</text>
					</uni-grid-item>
					<uni-grid-item :index='2'>
					    <text class="text">{{selectedCards[2].name}}</text>
					</uni-grid-item>
					<uni-grid-item :index='3'>
					    <text class="text">{{selectedCards[3].name}}</text>
					</uni-grid-item>
				</uni-grid>
				<view class="uni-padding-wrap uni-common-mt">
					<button type="default" @click="textToSpeech">播放</button>
				</view>
			</view>
			<view class="flex-item flex-item-V">
				<uni-grid :column="4" @change='addCardEvent'>
				    <uni-grid-item v-for="(card, index) in showSelectedItems" :index="index" :key="index">
				        <text class="text">{{card.name}}</text>
				    </uni-grid-item>
				</uni-grid>
			</view>
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
	export default {
		data() {
			return {
				TabCur: 0,
				tabList: [{ name: '精选' }, { name: '订阅' }],
			}
		},
		components: { WucTab, uniGrid, uniGridItem },

		computed: {
			showSelectedItems() {
				return this.getItemsByCategory(this.selectedCategory)
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
			removeCardEvent(e) {
				let {
					index
				} = e.detail
				this.removeCard(index)
			},
			addCardEvent(e) {
				let {
					index
				} = e.detail
				const clickedCard = this.showSelectedItems[index];
				this.addCard(clickedCard);
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
	.page {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		position: absolute;
	}
</style>
