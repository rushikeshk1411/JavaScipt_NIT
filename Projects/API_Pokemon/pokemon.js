const btn = document.getElementById('btn')
const input = document.getElementById('inputbox')
const container = document.getElementById('container')
const url = "https://pokeapi.co/api/v2/pokemon/&quote/"

btn.addEventListener('click', ()=>{
    const inputval = input.value
    const fetchurl = url+inputval
    
    DisplayPokemon(fetchurl)
})

async function DisplayPokemon(fetchurl){

    const res = (await fetch(fetchurl));
    console.log(res)

    const img = document.createElement('img')
    
}