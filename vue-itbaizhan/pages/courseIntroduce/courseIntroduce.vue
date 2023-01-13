<template>
	<view class="home">
		<view class="courseIntroduce_box">
			<courseIntroduceData :introduceData="introduceList" />
		</view>
		<view class="courseIntroduce_tab_box">
			<view class="courseIntroduce_tab_nav">
				<view @click="clickTabHandler(index)" v-for="(item,index) in items" :key="index" :class="{'btna':count === index}">{{item}}</view>
			</view>
			<view class="courseIntroduce_tab_con">
				<view class="discount_info" :class="{ dis:count === 0 }">
					<courseList	:courseList="Clist"/>
				</view>
				<view class="discount_info" :class="{ dis:count === 1 }">
					<courseJieshao	:courseImage="courseImage" :ImageHeight="ImageHeight"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import courseIntroduceData from '../../component/courseIntroduce-data/courseIntroduce-data.vue'
	import courseList from '../../component/courseList/courseList.vue'
	import courseJieshao from '../../component/coursejieshao/coursejieshao.vue'
	export default {
		data() {
			return {
				introduceList: [],
				count:0,
				items:["课程章节","课程简介"],
				Clist:[],
				courseImage:"",
				ImageHeight:""
			}
		},
		methods: {
			clickTabHandler(index){
				this.count = index
			}
		},
		onLoad(options) {
			uni.request({
				url: "http://localhost:3000/api/detail",
				data: {
					id: options.id
				},
				success: res => {
					if (res.data.status === 200) {
						this.introduceList = res.data.result.data.introduceList
						this.Clist = res.data.result.data.Clist
						this.courseImage = res.data.result.data.image
						this.ImageHeight = res.data.result.data.height
					}
				}
			})
		},
		components: {
			courseIntroduceData,
			courseList,
			courseJieshao
		}
	}
</script>

<style lang="scss">
	.home {
		font-size: 14px;
	}

	.courseIntroduce_box {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		// background-color: #00f783;
	}

	.courseIntroduce_tab_box {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;

		.courseIntroduce_tab_nav {
			display: flex;
			box-sizing: border-box;
			flex-direction: row;
			background-color: #fff;
			border-bottom: 1px solid #e4e4e4;
			margin-bottom: 20px;

			view {
				height: 50px;
				line-height: 50px;
				font-size: 16px;
				flex-grow: 1;
				text-align: center;
				background-color: #fff;
			}

			.btna {
				display: flex;
				box-sizing: border-box;
				justify-content: center;
				color: #00b783;
				position: relative;
			}
		}

		.discount_info {
			display: none;
		}

		.dis {
			display: block;
		}
	}
</style>
