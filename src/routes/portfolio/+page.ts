import type {PageLoad} from "./$types";

export const Load =(()=>{
    return {
        stocks: ['TSLA', 'AAPL', 'MSFT']
    }
}) satisfies PageLoad;