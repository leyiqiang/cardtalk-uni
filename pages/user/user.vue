<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if='userIsLogin'>
				<image :src="userInfo.avatarUrl" class='face'></image>
			</view>
			<view v-else>
				<image src="../../static/icons/default-face.png" class="face"></image>
			</view>
			<view class='info-wapper' v-if='userIsLogin'>
				<view class='nickname'>
					{{userInfo.nickName}}
				</view>
				<view class='nav-info'>{{userInfo.userId}}</view>
			</view>
			<view v-else>
				<navigator url='../registLogin/registLogin'>
					<view class="nickname regist-login">
						注册/登录
					</view>
				</navigator>
			</view>
			<view class='set-wapper' v-if='userIsLogin'>
				<image src='../../static/icons/settings.png' class='settings'></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex';
	const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('user')
	export default {
		data() {
			return {
			}
		},
		computed: {
			...mapState([
				'userInfo',
				'userIsLogin'
				]),
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("user.css")
</style>
