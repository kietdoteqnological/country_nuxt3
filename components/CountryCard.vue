<template>
	<div class="card dark:bg-slate-700 dark:text-white" @click="goDetailHandler(name)">
		<div className="countryImgWrapper">
			<img :src="urlImage" :alt="name" />
		</div>
		<div className="cardBody">
			<span className="title">{{ name }}</span>
			<div>
				<p>
					Population : <span>{{ population }}</span>
				</p>
				<p>
					Region : <span>{{ region }}</span>
				</p>
				<p>
					Capital : <span>{{ capital }}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	defineProps<{
		urlImage: string;
		name: string;
		population: number;
		region: string;
		capital: string;
	}>();
	const router = useRouter();

	const goDetailHandler = (name: string) => {
		router.push(`/${name}`);
	};
</script>

<style scope lang="scss">
	.card {
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		text-decoration: none;
		transition: 0.3s ease-in-out;
		max-width: 320px;

		&:hover {
			transform: scale(1.04);
		}

		.countryImgWrapper {
			width: 100%;
			height: 170px;
			object-fit: cover;
			object-position: center;
			border-radius: 5px;

			img {
				width: 320px;
				height: 170px;
			}
		}

		.cardBody {
			padding: 20px;
			padding-bottom: 30px;
			font-size: 18px;
			display: flex;
			flex-direction: column;

			.title {
				font-weight: 600;
				font-size: 20px;
				padding-bottom: 10px;
			}

			p {
				font-weight: 500;
			}

			span {
				font-weight: 400;
			}
		}
	}
</style>
