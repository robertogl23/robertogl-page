import "../assets/sass/style.scss";
import { Api } from "./models/fetch";
import { IPokemon } from "./types";



class App 
{
    
    private data:Array<IPokemon>       = [];
    private date =  new Date();
    private listaColores:Array<string> = [
        'hsl(0, 78%, 62%)',
        'hsl(180, 62%, 55%)',
        'hsl(212, 86%, 64%)',
        'rgb(252, 175, 74)',
        '#6200EA',
        '#304FFE',
        '#2962FF',
        '#AA00FF',
        '#F50057',
        '#FF1744',
        '#00C853',
        '#FFEB3B',
        '#03A9F4',
        '#006064',
        '#00B0FF',
        '#CDDC39',
        '#64DD17',
    ]

    StartApp():void
    {
        this.EfectoColores();
        const $footer = document.getElementById('footer')
        $footer!.innerHTML = `<p>Copyright © ${this.date.getFullYear()} RobertoGL </p>`;
        const api = new Api();
        api.get('pokemon?limit=100&offset=0')
        .then(res => {
            this.data = res.data;
            this.PintarGridPokemon()
        })
    }

    PintarGridPokemon()
    {
        const $grid = document.getElementById('gridPokemon')
        this.data.map((e,i) => (
            $grid!.innerHTML += ` <div class="box" id="${i }">
            <div class="card"> 
                <div class="card-content ">
                    <div class="image center">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png" alt="">
                    </div>
                    <div class="title center">
                        <p>${e.name}</p>
                    </div>
                </div>
            </div>
        </div>`

        ))

    }

    private EfectoColores()
    {
        const $body = document.getElementById('page');
        $body!.style.background = this.listaColores[this.getRandomInt()]
        setInterval(() => {
            $body!.style.background = this.listaColores[this.getRandomInt()]
        },3000)
    }

    private getRandomInt():number {
        const max = 0
        const min = this.listaColores.length - 1
        return Math.floor(Math.random() * (max - min)) + min;
    }
   
}
const app = new App();
app.StartApp()





