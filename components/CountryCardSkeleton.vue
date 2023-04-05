<template>
	<div class="card dark:bg-slate-700 dark:text-white">
		<div class="countryImgWrapper">
			<img />
		</div>
		<div class="cardBody">
			<span class="title"></span>
			<div class="flex flex-col gap-0.5">
				<p><span></span></p>
				<p><span></span></p>
				<p><span></span></p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
	.card {
		border-radius: 5px;
		text-decoration: none;
		max-width: 320px;
		height: 358px;

		.countryImgWrapper {
			width: 100%;
			height: 170px;
			object-fit: cover;
			object-position: center;
			width: 320px;
			background-color: #dddbdd;
			border: none;
			animation: pulse-bg 1s infinite;

			img {
				width: 320px;
				height: 170px;
				animation: pulse-bg 1s infinite;
				border: none;
			}
		}

		.cardBody {
			padding: 20px;
			padding-bottom: 30px;
			display: flex;
			gap: 10px;
			flex-direction: column;

			.title {
				height: 36px;
				border-radius: 5px;
				animation: pulse-bg 1s infinite;
			}
			p {
				height: 30px;
				border-radius: 5px;
				animation: pulse-bg 1s infinite;
			}
		}
	}

	@keyframes pulse-bg {
		0% {
			background-color: #eee;
		}
		50% {
			background-color: #eaeaea;
		}
		100% {
			background-color: #eee;
		}
	}
</style>
