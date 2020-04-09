<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<buttton>发送post</buttton>
		</view>
	</view>
</template>

<script>
	import axios from '../../common/axios.min.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			axios.interceptors.request.use(function fulifilled(config){
				console.log("interceptors--request--fulifilled",config);
				return config;
			},function reject(err){
				console.log("interceptors--request--reject",err);
			})
			axios.get('https://api.github.com/users/mzabriskie').then((res)=>{
				console.log('success',res);
			}).catch(err=>{
				console.error("catch",err);
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
