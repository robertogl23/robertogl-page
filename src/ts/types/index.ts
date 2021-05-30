export interface IPokemon {
    name : string
    url  : string
}

export interface IResponse<IPokemon> {
	data     : Array<IPokemon>
    error    : boolean
}