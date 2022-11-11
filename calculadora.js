const obtenerVelocidad = document.getElementById("velocidad");
const obtenerAceleracion = document.getElementById("aceleracion")
const obetenerDistancia = document.getElementById("distancia")

obtenerVelocidad.addEventListener("change", getVelocidad)
obtenerAceleracion.addEventListener("change", getAceleracion)
obetenerDistancia.addEventListener("change", getDistancia)




function getVelocidad(){ 
    const velocidadValue = Number(obtenerVelocidad.value);
    console.log("Velocidad: ",velocidadValue)

    console.log(typeof(velocidadValue))
    if(velocidadValue < 0){
        response("No se puede ingresar la velocidad en negativo, ingrese de nuevo la velocidad (+)")
    }
    else{
        clearResponse()
        console.log(velocidadValue)
    }
    return(calcular(velocidadValue))
}

function getDistancia(){ 
    const distanciaValue = Number(obetenerDistancia.value);
    console.log("distancia: ", distanciaValue)
    console.log(typeof(distanciaValue))

    if(distanciaValue < 0){
        response("No se puede ingresar la distancia en negativo, ingrese de nuevo la velocidad (+):")
    }
    else{
        clearResponse()
        console.log(distanciaValue)
    }      
    return(calcular(distanciaValue))
}

function getAceleracion(){ 
    const aceleracionValue = Number(obtenerAceleracion.value);
    console.log("aceleracion : ", aceleracionValue)
    console.log(typeof(aceleracionValue))
    if(aceleracionValue > 0){
        response("No se puede ingresar la desaceleración en Positivo, vuelve a ingresarla en Negativo (-)")
    }
    else{
        clearResponse()
        console.log(aceleracionValue)
        
    }      
    return(calcular(aceleracionValue))
}

function calcular(velocidadValue,distanciaValue,aceleracionValue){ 
    
    const velocidad = +(document.getElementById("velocidad")).value
    const aceleracion = +(document.getElementById("aceleracion")).value
    const distancia = +(document.getElementById("distancia")).value

    const calc= 0 - Number(velocidad)
    const tie= calc / aceleracion
    const dist=0+velocidad+0.5*aceleracion*(tie*tie)
    let newCalc = Number(calc);

    console.log ("Este es el calc: ", newCalc)
    console.log(typeof(calc));
  
    if(dist > distancia) {
        console.log("El objeto A ha colisionado con el Objeto B")
        c = velocidad + (1/2)*(0-velocidad)
        c2 = distancia/c
        acel = (0-velocidad)/c2
        const Respuesta = "El objeto B necesitaba frenar a "+ acel + "m/s2 para no colisionar, colisionaron en" + tie + "segunods"
        console.log(Respuesta)
        response(Respuesta)
    }
    else{
        dist2= distancia - dist
        const Respuesta= "Los objetos quedaron a"+dist2+"metros de colisionar.Desaceleraron en"+tie+ "segundos"
        response(Respuesta)
    }

}




const response = (res) => {
    clearResponse();
    const container_res = document.querySelector(".container-res")
    const responseDiv = document.createElement("div");
    responseDiv.innerHTML = ` 
    <p>${res}</p>`;
    container_res.appendChild(responseDiv);
}

const clearResponse = () =>{
    const responses = document.querySelector("#idResponse");
    while (responses.firstChild) {
        responses.removeChild(responses.firstChild);
    }
}