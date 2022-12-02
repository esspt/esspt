// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgWjI_YeouK4S2DuIB4-3yd24F3iJDLoQ",
  authDomain: "termosolaresp.firebaseapp.com",
  databaseURL: "https://termosolaresp-default-rtdb.firebaseio.com",
  projectId: "termosolaresp",
  storageBucket: "termosolaresp.appspot.com",
  messagingSenderId: "686666332472",
  appId: "1:686666332472:web:b1593247538be584aa69cd"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getDatabase();


let Fecha ;
let Hora;
let Presion;
let Temperatura;

let valFecha = document.getElementById("fecha");
let valHora = document.getElementById("hora");
let valPresion = document.getElementById("presion");
let valTemperatura = document.getElementById("temperatura");
let tablaTermos = document.getElementById("tablaTermos");
let valFecha2 = document.getElementById("fecha2");
let valTermos = document.getElementById("termos");

let tabla1 = document.getElementById("tabla1")
let tabla2 = document.getElementById("tabla2")



const Mediciones = ref(db, 'EstacionMatera/Placa: 1/Mediciones');
onValue(Mediciones, (snapshot) => {
  const data = snapshot.val();
//console.log(data)
data.forEach(element => {
  //console.log(element)
  let fila = document.createElement('tr')
  let td1 = document.createElement('td')
  td1.innerText = element.Fecha
  let td2 = document.createElement('td')
  td2.innerText = element.Hora
  let td3 = document.createElement('td')
  td3.innerText = element.Temperatura
  let td4 = document.createElement('td')
  td4.innerText = element.Presion
 
  fila.appendChild(td1)
  fila.appendChild(td2)
  fila.appendChild(td3)
  fila.appendChild(td4)
  tabla1.appendChild(fila)
    
});
/*
Fecha = data[data.length -1].Fecha;
Hora = data[data.length -1].Hora;
Presion = data[data.length -1].Presion;
Temperatura = data[data.length -1].Temperatura;
valFecha.innerHTML = Fecha;
valHora.innerHTML = Hora;
valPresion.innerHTML = Presion;
valTemperatura.innerHTML = Temperatura;
*/
});

const Termos = ref(db, 'EstacionMatera/Placa: 1/Cargas');
onValue(Termos, (snapshot) => {
  const data = snapshot.val();
//console.log(data)
data.forEach(element=>{
  console.log(element)


  let fila = document.createElement('tr')
  let td1 = document.createElement('td')
  td1.innerText = element.Fecha
  let td2 = document.createElement('td')
  td2.innerText = element.Termos
  
 
fila.appendChild(td1)
fila.appendChild(td2)
tabla2.appendChild(fila)
//tabla2.removeChild(fila)

})

}

);







