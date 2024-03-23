async function traerPagina(){
    const pagina = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await pagina.json();
    console.log(datos);
}