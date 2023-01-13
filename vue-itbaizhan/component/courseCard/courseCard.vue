<template>
	<view class="course_card_box">
		<view class="course_card_con">
			<view class="course_card_info" v-for="(item,index) in list" :key="index">
				<view class="course_card_img">
					<image :src="item.logo"></image>
				</view>
				<view class="course_card_des">
					<view class="course_card_des_T">{{ item.textT }}</view>
					<view class="course_card_des_info">
						<view class="course_card_des_pay">￥{{ item.money }}</view>
						<view class="course_card_des_icon">
							<text class="icon iconfont icon-yonghu2"></text>
							{{ item.hits }}人学过
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {

		},
		mounted() {
			uni.request({
				url: "http://iwenwiki.com:3005/api/recommend",
				success: res => {
					if (res.data.status === 200) {
						this.list = res.data.result.data
					}
				}
			})
		}
	}
</script>

<style lang="scss">
	@import '@/font/iconfont.css';

	.course_card_box {
		width: 100%;
		display: flex;
		box-sizing: border-box;
		padding: 0 15px;
		margin-bottom: 15px;
		overflow: hidden;
		align-items: center;
		justify-content: center;
		
		.course_card_info {
			display: flex;
			box-sizing: border-box;
			width: 100%;
			background: #fff;
			border-radius: 15px;
			padding: 10px;
			margin-bottom: 15px;
			flex-direction: row;
			align-items: center; //子元素垂直居中
			box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);
			.course_card_img {
				flex-shrink: 0;
				margin-right: 15px;

				image {
					width: 240rpx;
					height: 140rpx;
				}
			}

			.course_card_des {
				width: 100%;
				display: flex;
				box-sizing: border-box;
				flex-direction: column;

				.course_card_des_T {
					font-size: 16px;
					line-height: 24px;
					margin-bottom: 5px;
				}

				.course_card_des_info {
					width: 100%;
					display: flex;
					flex-direction: row; //横向排列
					box-sizing: border-box;
					justify-content: space-between;
					/* 横向中间自动空间 */
					align-content: space-between;
					/* 竖向中间自动空间 */
					flex-wrap: wrap;

					/* 换行 */
					.course_card_des_pay {
						font-size: 12px;
						color: #ff5200;

						text {
							font-size: 16px;
						}
					}

					.course_card_des_icon {
						font-size: 14px;
						color: #333;

						text {
							font-size: 14px;
							color: #666;
							margin: 0 2px 0 0;
						}
					}
				}
			}
		}
	}
</style>
