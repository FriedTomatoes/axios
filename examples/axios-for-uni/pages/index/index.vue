<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import axios from '../../common/axios.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			axios.baseURL = 'https://api.mockuai.com';
			axios.interceptors.request.use(function fulifilled(){
				
			},function reject(){
				
			})
			axios.request({
				url: '/ec/c/celebrity/info/get',
				method: 'get'
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
