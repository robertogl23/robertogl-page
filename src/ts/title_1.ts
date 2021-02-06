export default class Title_1 extends HTMLElement {

    private _text: string;

    public get getText(): string {
        return this._text;
    }
    public set setText(value: string) {
        this._text = value;
    }

    constructor(txt:string) {
        super()
        this._text = txt;
    }

   
}