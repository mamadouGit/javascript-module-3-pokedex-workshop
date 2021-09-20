const root = document.getElementById("root")
const pokenumber= 150
const next =document.getElementById("next")
const previous=document.getElementById("previous")
console.log(next)
const searchfield= document.createElement("input");
searchfield.classList.add("search");

next.addEventListener("click",function(){
  if(offset!=1){
    offset -=10;
    removeChildNodes(root)
    fetchpoke(offset,limit)
  }
 
})
previous.addEventListener("click",function(){
  offset +=10;
  removeChildNodes(root)
  fetchpoke(offset,limit)
})
let offset=1;
let limit=9;
const fetchpoke= async function(offset,limit) 
{
  for(let i=offset;i<=offset+limit;i++){
    await  getpokemon(i)
  }
}

const getpokemon=async function(id){
  const url= `https:pokeapi.co/api/v2/pokemon/${id}`;
  const res= await fetch(url) 
  const pokemon = await res.json();
 
  
  creatpokecard(pokemon)

}
fetchpoke(offset,limit)


const creatpokecard=function(pokemon){
  const pokeEl=document.createElement("div")
  pokeEl.classList.add("poke")
  const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1)
  

  const pokehtml=`
  <div id="pokecard"> 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
  
  </div> 
  <div class="pokeinfo">
  <span>#${pokemon.id.toString().padStart(3,0)}. ${name}</span>
  
  </div>
  
  `;

  pokeEl.innerHTML=pokehtml;
  root.appendChild(pokeEl)
  
}
 function removeChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild); 

  }
}
