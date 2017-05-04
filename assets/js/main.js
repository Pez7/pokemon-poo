function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return ("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

	this.aumentarAmistad = function(valor){
    	this.nivelDeAmistad = this.nivelDeAmistad + valor;
    	return ("La nueva amistad de " + this.nombre + " es: " + this.nivelDeAmistad);
	}

	this.atacar = function(pokemon){
    	pokemon.vida = (pokemon.vida - this.poderDeAtaque);
    	return ("Este Pokémon perdió: " + pokemon.vida);
	}
}

function combate(){
	var info = document.getElementById("caja");
	var poke1 =document.getElementById("poke1").value;
	var poke2 =document.getElementById("poke2").value;
	var valorAt = prompt("Ingresa un poder de ataque");
	var atac1 = new Pokemon (poke1,"color",valorAt);
	var atac2 = new Pokemon(poke2,"otro color",5);

	atac1.atacar(atac2);

	info.innerHTML = atac1.nombre +" atacó a " + atac2.nombre + " y " + atac2.nombre + " tiene una vida de: " + atac2.vida;


}






