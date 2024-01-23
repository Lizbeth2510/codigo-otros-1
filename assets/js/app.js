const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se ha agregado un punto para mandar a llamar a la clase
const $b = document.querySelector('.blog'); // Se ha cambiado "#" por "." para mandar a llamar a la clase 
const $l = document.querySelector('.location');

//hay que seguir la estructura async...await
async function displayUser(username) {  //se agrego async para declarar la función 
  $n.textContent = 'cargando...'; 
  

  //se agrego un bloque try..catch
  try { 
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //a response hay que asignarle un formato tipo JSON
    console.log(data);
    
    $n.textContent = `${data.name}` //las comillas deben ser sustituidas por baticks para lamar a las variables ya establecidas
    $b.textContent = `${data.blog}`
    $l.textContent = `${data.location}`
  } catch (err) { 
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //n no es la variable, sino $n
}

displayUser('stolinski').catch(handleError);



