import { IPokemon, IResponse } from "../types";

export class Api {
	private API = 'https://pokeapi.co/api/v2/';

	async get(url: string): Promise<IResponse<IPokemon>> {
		let data:IResponse<IPokemon> = {
            data  : [] || null,
            error : false
        };

		try {
			const res  = await fetch(this.API + url);
			let d      = await res.json();
			data.data  = d.results;
		} catch (e) {
			data.error = true;
		} finally {
			return data;
		}
		
	}
}

