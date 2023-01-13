<template>
	<view>
		<view class="courseIntroduce_data_box">
			<view class="courseIntroduce_data_info" v-for="(item,index) in introduceData" :key="index">
				<view class="courseIntroduce_data_txt1"><text>{{ item.num }}</text></view>
				<view class=".courseIntroduce_data_txt2"><text>{{ item.txt }}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			introduceData: {
				type: Array,
				default: () => {
					return []
				}

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.courseIntroduce_data_box {
		display: flex;
		box-sizing: border-box;
		flex-direction: row;
		/*横向排列*/
		flex-wrap: wrap;
		/* 换行排列 */
		justify-content: center;
		/*居中对齐*/
		width: 100%;
		padding: 15px 10px;

		.courseIntroduce_data_info {
			display: flex;
			box-sizing: box;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 25%;
			height: 80px;
			flex-grow: 1;
			position: relative;

			.courseIntroduce_data_txt1 {
				text-align: center;
				width: 100%;
				font-size: 12px;
				color: #ff5200;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-bottom: 10px;

				text {
					font-size: 16px;
				}
			}

			.courseIntroduce_data_txt2 {
				text-align: center;
				width: 100%;
				font-size: 13px;
				color: #333;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}

	}
</style>
