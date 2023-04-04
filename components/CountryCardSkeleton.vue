<template>
	<div class="card dark:bg-slate-700 dark:text-white">
		<div className="countryImgWrapper">
			<img />
		</div>
		<div className="cardBody">
			<span className="title"></span>
			<div>
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

		.countryImgWrapper {
			width: 100%;
			height: 170px;
			object-fit: cover;
			object-position: center;
			border-radius: 5px;

			img {
				width: 320px;
				height: 170px;
				animation: pulse-bg 1s infinite;
			}
		}

		.cardBody {
			padding: 20px;
			padding-bottom: 30px;
			font-size: 18px;
			display: flex;
			flex-direction: column;
			animation: pulse-bg 1s infinite;

			.title {
				padding-bottom: 10px;
				animation: pulse-bg 1s infinite;

				p {
					animation: pulse-bg 1s infinite;
				}
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
