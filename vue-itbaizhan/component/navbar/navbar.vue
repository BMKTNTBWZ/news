<template>
	<uni-nav-bar>
		<block slot="left">
			<view class="city">
				<view>
					<navigator url="../../pages/city/city"><text class="uni-nav-bar-text">{{ city }}</text>
					</navigator>
				</view>
				<uni-icons type="arrowdown" color="#666" size="18" />
			</view>
		</block>
		<view class="input-view">
			<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
			<input v-model="search" confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
				@confirm="confirm" />
		</view>
		<block slot="right">
			<view class="city" @click="searchHandler">
				搜索
			</view>
		</block>
	</uni-nav-bar>
</template>

<script>
	export default {
		data() {
			return {
				city: "北京",
				search: ""
			}
		},
		methods: {
			searchHandler() {
				console.log(this.search)
			}
		}
	}
</script>

<style lang="scss">
	$nav-height: 30px;

	.city {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		// width: 160rpx;
		margin-left: 4px;
	}

	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// width: 500rpx;
		flex: 1;
		background-color: #f8f8f8;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: 12px;
		background-color: #f8f8f8;
	}
</style>
