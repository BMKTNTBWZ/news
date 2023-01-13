<template>
	<view class="course_jieshao_box">
			<image :src="courseImage" :style="{ height:ImageHeight + 'rpx' }"></image>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		props:{
			courseImage:{
				type:String,
				default:""
			},
			ImageHeight:{
				type:String,
				default:""
			}
		}
	}
</script>

<style lang="scss">
.course_jieshao_box{
		display: flex;
		box-sizing: box;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		image{
			width: 750rpx;
		}
	}
</style>
