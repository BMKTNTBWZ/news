<template>
	<view class="index-container">
		<NavBar />
		<!-- 轮播图 -->
		<view class="index-banner-box">
			<swiper class="swiper" circular indicator-color="#fff" indicator-active-color="#00f783"
				:indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<image class="banner" :src="item.img_url" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<CourseNav />
		<view class="online-box">
			<image :src="indexBanner.img_url" class="online-img"></image>
		</view>
		<view class="free-box">
			<view class="free-t-box public-tow-box">
				<view class="public-t">
					限时免费
				</view>
			</view>
			<FreeCard />
		</view>
		<view class="free-box">
			<view class="free-t-box public-tow-box">
				<view class="public-t">
					零基础就业班
				</view>
			</view>
			<JobScroll />
		</view>
		<view class="free-box">
			<view class="free-t-box public-tow-box">
				<view class="public-t">
					推荐课程
				</view>
			</view>
			<CourseCard />
		</view>
		<view class="daotu_box">
			<view class="daotu_T">驱动教学-贯穿教 | 学 | 练 | 测 | 评</view>
			<image :src="footBanner.img_url"></image>
		</view>
	</view>
</template>

<script>
	import NavBar from "../../component/navbar/navbar.vue"
	import CourseNav from '../../component/coursenav/coursenav.vue'
	import FreeCard from '../../component/freecard/freecard.vue'
	import JobScroll from '../../component/jobscroll/jobscroll.vue'
	import CourseCard from '../../component/courseCard/courseCard.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				indicatorDots: true,
				autoplay: true,
				duration: 1000,
				interval: 3000,
				bannerList: [],
				indexBanner: "",
				footBanner:""
			}
		},
		onLoad() {

		},
		methods: {

		},
		mounted() {
			uni.request({
				url: "http://localhost:3000/api/banner",
				success: (res) => {
					if (res.data.status === 200) {
						this.bannerList = res.data.result.top_banner
						this.indexBanner = res.data.result.index_banner
						this.footBanner = res.data.result.foot_banner
					}
				}
			})

		},
		components: {
			NavBar,
			CourseNav,
			FreeCard,
			JobScroll,
			CourseCard
		}
	}
</script>

<style lang="scss">
	.index-container {
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.index-banner-box {
			display: flex;
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			overflow: hidden;

			.swiper {
				width: 100%;
				height: 260rpx; // rpx

				.banner {
					width: 710rpx;
					height: 260rpx;
				}
			}
		}

		.online-box {
			display: flex;
			width: 735rpx;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			overflow: hidden;

			.online-img {
				height: 132rpx;
				width: 735rpx;
			}
		}

		.free-box {
			.public-tow-box {
				display: flex;
				width: 100%;
				justify-content: center;
				overflow: hidden;
				align-items: center;
				box-sizing: border-box;
				padding: 5px 15px;
				align-content: space-between;
				justify-content: space-between;
				flex-wrap: wrap;

				.public-t {
					font-size: 20px;
					font-weight: 700;
				}
			}
		}

		.daotu_box {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.daotu_T {
				font-size: 18px;
				font-weight: 700;
				margin: 15px;
			}

			image {
				width: 700rpx;
				height: 634rpx;
				margin: 0 0 15px 0;
			}
		}
	}
</style>
