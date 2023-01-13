<template>
	<view class="job_scroll_box">
		
		<scroll-view class="job_scroll_con_box" scroll-x="true">
			<view class="job_scroll_con">
				<view class="job_scroll_info" v-for="(item,index) in list" :key="index">
					<view class="job_scroll_card" :class="item.colors">
						<view class="job_scroll_card_T">
							{{item.textT}}
						</view>
						<view class="job_scroll_card_icon" >
							<view class="icon iconfont" :class="item.icon"></view>
						</view>
						<view class="job_scroll_card_des">
							{{item.text}}
						</view>
						<view class="job_scroll_card_btn">
							免费试学
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		mounted() {
			uni.request({
				url:"http://localhost:3000/api/course",
				success:res=>{
					if(res.data.status === 200){
						this.list = res.data.result.data
					}	
				}
			})
		}
	}
</script>

<style lang="scss">
	@import "@/font/iconfont.css";

	.job_scroll_box {
		width: 100%;
		margin-bottom: 30px;
		box-sizing: border-box;

		.job_scroll_con {
			display: flex;
			align-items: center; //垂直据中
			flex-wrap: nowrap; //不换行
			box-sizing: border-box;

			.job_scroll_info {
				width: 225px;
				height: 260px;
				flex-shrink: 0;
				margin: 0 10px;

				.job_scroll_card {
					display: flex;
					flex-flow: column;
					box-sizing: border-box;
					align-items: center; //水平据中
					width: 100%;
					height: 248px;
					background-color: #b0def5;
					border-radius: 5px;
					margin-top: 12px;

					.job_scroll_card_T {
						display: flex;
						align-items: center; //水平据中
						justify-content: center; //垂直居中
						width: 210px;
						height: 38px;
						background-color: #e4f3fb;
						font-size: 16px;
						text-align: center;
						margin-top: -15px;
						border-bottom-left-radius: 25px;
						border-bottom-right-radius: 25px;
						border-top-left-radius: 15px;
						border-top-right-radius: 15px;
					}

					.job_scroll_card_icon {
						display: flex;
						align-items: center; //水平据中
						justify-content: center; //垂直居中
						box-sizing: border-box;
						width: 90px;
						height: 90px;
						background-color: #d3ecf9;
						border-radius: 100%;
						margin: 20px 0 15px;

						view {
							font-size: 42px;
							color: #2a83fe;
						}

					}

					.job_scroll_card_des {
						display: flex;
						box-sizing: border-box;
						align-items: center; //水平据中
						font-size: 14px;
					}

					.job_scroll_card_btn {
						display: flex;
						box-sizing: border-box;
						align-items: center;
						justify-content: center; //垂直居中
						width: 118px;
						height: 32px;
						line-height: 32px;
						color: #0a5ea0;
						font-size: 16px;
						border-radius: 34px;
						border: 1px solid #0a5ea0;
						margin-top: 15px;
					}
				}

				.job_scroll_card2 {
					background-color: #fed2b0;

					.job_scroll_card_T {
						background-color: #fff2e7;
					}

					.job_scroll_card_icon {
						background-color: #fee6d3;

						view {
							color: #d87e4e;
						}
					}

					.job_scroll_card_btn {
						color: #c44606;
						border: 1px solid #c44606;
					}
				}

				.job_scroll_card3 {
					background-color: #fee4b7;

					.job_scroll_card_T {
						background-color: #fef4e2;
					}

					.job_scroll_card_icon {
						background-color: #fef0d7;

						view {
							color: #b17001;
						}
					}

					.job_scroll_card_btn {
						color: #b17001;
						border: 1px solid #b17001;
					}
				}

				.job_scroll_card4 {
					background-color: #f5bcf7;

					.job_scroll_card_T {
						background-color: #fae0fb;
					}

					.job_scroll_card_icon {
						background-color: #f9d9fa;

						view {
							color: #8f0494;
						}
					}

					.job_scroll_card_btn {
						color: #8f0494;
						border: 1px solid #8f0494;
					}
				}

				.job_scroll_card5 {
					background-color: #cff2cb;

					.job_scroll_card_T {
						background-color: #ebf9e9;
					}

					.job_scroll_card_icon {
						background-color: #e4f7e2;

						view {
							color: #138a06;
						}
					}

					.job_scroll_card_btn {
						color: #138a06;
						border: 1px solid #138a06;
					}
				}

				.job_scroll_card6 {
					background-color: #f9cbc8;

					.job_scroll_card_T {
						background-color: #fce8e6;
					}

					.job_scroll_card_icon {
						background-color: #fbe2e0;

						view {
							color: #980c03;
						}
					}

					.job_scroll_card_btn {
						color: #980c03;
						border: 1px solid #980c03;
					}
				}

				.job_scroll_card7 {
					background-color: #f3eaa3;

					.job_scroll_card_T {
						background-color: #f8f3cc;
					}

					.job_scroll_card_icon {
						background-color: #f8f3cc;

						view {
							color: #786b03;
						}
					}

					.job_scroll_card_btn {
						color: #786b03;
						border: 1px solid #786b03;
					}
				}

				.job_scroll_card8 {
					background-color: #b4eef3;

					.job_scroll_card_T {
						background-color: #e4f9fb;
					}

					.job_scroll_card_icon {
						background-color: #d5f5f8;

						view {
							color: #088691;
						}
					}

					.job_scroll_card_btn {
						color: #088691;
						border: 1px solid #088691;
					}
				}

				.job_scroll_card9 {
					background-color: #f7c8a4;

					.job_scroll_card_T {
						background-color: #fcebdd;
					}

					.job_scroll_card_icon {
						background-color: #fae0cc;

						view {
							color: #9c4604;
						}
					}

					.job_scroll_card_btn {
						color: #9c4604;
						border: 1px solid #9c4604;
					}
				}

				.job_scroll_card10 {
					background-color: #cfd2fe;

					.job_scroll_card_T {
						background-color: #edefff;
					}

					.job_scroll_card_icon {
						background-color: #e4e6fe;

						view {
							color: #4e06ab;
						}
					}

					.job_scroll_card_btn {
						color: #4e06ab;
						border: 1px solid #4e06ab;
					}
				}
			}
		}
	}
</style>
