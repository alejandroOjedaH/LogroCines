async function traerPagina(){
    const pagina = await fetch('https://yelmocines.es/cartelera/la-rioja/premium-berceo', {mode: 'no-cors'});
    const datos = await pagina.json();
    console.log(datos);
}
console.log("llega");
traerPagina();