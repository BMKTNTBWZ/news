<template>
	<view>
		<web-view src="https://www.bilibili.com/video/BV1yR4y1f76k/?spm_id_from=333.337.search-card.all.click&vd_source=88fe9c5d1674834598cf28f93b39ac6d"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
			console.log(options.id)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
