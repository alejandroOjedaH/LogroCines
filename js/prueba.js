async function traerPagina(){
    const pagina = await fetch('https://yelmocines.es/cartelera/la-rioja/premium-berceo');
    const datos = await pagina.json();
    console.log(datos);
}