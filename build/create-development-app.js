import Vue from 'vue';
import Meta from 'vue-meta';

Vue.use(Meta);

function createApp(RootComponent) {
	const app = new Vue({
		render: (h) => h(RootComponent),
		metaInfo: {
			title: '📚 Maker Local Doc Dev',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
				},
			],
		},
	});

	return { app };
}

export default createApp;
