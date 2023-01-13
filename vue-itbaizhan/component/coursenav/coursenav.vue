<template>
	<view class="course-nav">
		<view @click="courseIntroduceHandler(item.id)" class="course-nav-info" v-for="(item,index) in courseNavList" :key="index">
			<text class="course-nav-icon icon iconfont" :class="item.icon"></text>
			<view class="course-info-text">
				{{ item.text }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courseNavList: []
			}
		},
		mounted() {
			uni.request({
				url: "http://localhost:3000/api/nav",
				success: (res) => {
					if (res.data.status === 200) {
						this.courseNavList = res.data.result.data
					}
				}
			})
		},
		methods: {
			courseIntroduceHandler(id){
				uni.navigateTo({
					url:"/pages/courseIntroduce/courseIntroduce?id=" + id
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "@/font/iconfont.css";

	.course-nav {
		display: flex;
		box-sizing: border-box;
		padding: 10px 10px;
		flex-direction: row;
		flex-wrap: wrap;

		.course-nav-info {
			width: 20%;
			flex-direction: row;
			flex-wrap: wrap;
			text-align: center;
			margin-bottom: 15px;

			.course-nav-icon {
				font-size: 30px;
			}

			.icon-java {
				color: #2a83fe;
			}

			.icon-weifuwu {
				color: #fd3761;
			}

			.icon-zuzhijiagou {
				color: #2b91e2;
			}

			.icon-dashuju {
				color: #2a83fe;
			}

			.icon-h {
				color: #00b478;
			}

			.icon-icon-- {
				color: #fd6012;
			}

			.icon-rengongzhineng {
				color: #fe391f;
			}

			.icon-ruanjianceshi {
				color: #00b478;
			}

			.icon-huatong {
				color: #fea917;
			}

			.icon-bianchengshibaobiao_icon {
				color: #2a83fe;
			}

			.icon-jianmo {
				color: #00b478;
			}

			.icon-chuangye {
				color: #fe391f;
			}

			.course-info-text {
				width: 100%;
				font-size: 13px;
				margin-top: 10px;
				white-space: normal;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
</style>
