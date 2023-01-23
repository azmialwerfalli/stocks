import {error} from '@sveltejs/kit'
import type { PageLoad } from './$types';

export const load = (() => {
	throw error(404, {
		message: 'Not Found'
	});
	return {
		stocks: ['TSLA', 'AAPL', 'MSFT']
	};
}) satisfies PageLoad;
