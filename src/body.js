import React, { useEffect, useRef, useState } from "react";
import moment from 'moment'
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'
import som from './coff.mp3';
import { DocumentProvider, set } from 'mongoose';
import { min } from 'moment';





function Body() {

    

function parar() {
    setShould(false)

}

// const [repositorios, setRepositorios] = useState([]);

// //função que será executada e depois em quais circuntancias essa função deverá ser executada 
// //Ex: Xtempo ou outra ação
// useState(async () => {
//     const response = await fetch('https://api.github.com/users/mikeias-silva/repos');
//     const data = await response.json();

//     setRepositorios(data);

// }, [])


// useEffect(() => {
//     const filtered = repositorios.filter(repo => repo.favorite);


//     document.title = `voce tem ${filtered.length} favoritos`;
// }, [repositorios])




// function handleFavorite(id) {
//     const newRepositorio = repositorios.map(repo => {

//         return repo.id == id ? { ...repo, favorite: !repo.favorite } : repo
//     });

//     setRepositorios(newRepositorio);
// }


const audio = new Audio('./coff.mp3');
const audioRef = useRef();


const [session, setSession] = useState('session');
const [breake, setBreake] = useState(false);
const [should, setShould] = useState(false);
const [minutos, setMinutos] = useState(1);
const [segundos, setSegundos] = useState(2);
const [minutosBreake, setMinutosBreake] = useState(1);
const [segundosBreake, setSegundosBreake] = useState(1);
const [sessionLength, setSessionLength] = useState(1);
const [breakLength, setBreakLength] = useState(1);
const [timerLabel, setTimerLabel] = useState('Session');
const [secondsLeft, setSecondsLeft] = useState(sessionLength * 60);
const [timerRunning, setTimerRunning] = useState(false);

let atualizaSec = document.getElementById("span-sec");
let atualizaMin = document.getElementById("span-min");
//let atualizaSec = $("#span-sec");

function adicionaMinutos() {


    if(minutos === 5){
        setMinutos(10);
        setSegundos(0);
    }

    if(minutos === 10){
        setMinutos(15);
        setSegundos(0);
    }

    if(minutos === 10){
        setMinutos(15);
        setSegundos(0);
    }

    if(minutos === 15){
        setMinutos(20);
        setSegundos(0);
    }

    if(minutos === 20){
        setMinutos(25);
        setSegundos(0);
    }

    if(minutos === 25){
        setMinutos(30);
        setSegundos(0);
    }

    if(minutos === 30){
        setMinutos(35);
        setSegundos(0);
    }

    if(minutos === 35){
        setMinutos(40);
        setSegundos(0);
    }

    if(minutos === 40){
        setMinutos(5);
        setSegundos(0);
    }
}

function adicionaSession(){
    if(!should && sessionLength<60){
        setSessionLength(sessionLength+1)
        setSecondsLeft((sessionLength+1) *60);
    }

   
}

function decrementaSession(){
    if(!should && sessionLength >1){
        setSessionLength(sessionLength-1)
        setSecondsLeft((sessionLength-1)*60);
    }
}

function adicionaBreake(){
    if(!should && breakLength < 60){
        setBreakLength(breakLength+1)
    }
}

function decrementaBreake(){
    if(!should && breakLength >1){
        setBreakLength(breakLength-1)
    }
}


function pause() {
   // clearTimeout(time)

    // if(minutos <= 25 && minutos >= 14){
    //     setMinutos(24);
    //     setSegundos(59);
    //    // setShould(false);
    // }

    setShould(false);
    setBreake(false);
    setMinutos(3);
    setSegundos(0);
    const audio = audioRef.current
    audio.pause();
    audio.currentTime = 0;
    //console.log("pausar", segundos);

    setSessionLength(1);
    setBreakLength(1);
    setSecondsLeft(sessionLength * 60);
    setSession('session')
}

function descansar(){
    setShould(false);
    setMinutos(10);
    setSegundos(0);
    setBreake(true)
}

/*useEffect(() => {

    function handleShouldChange(status) {
        //setMinutos(25);
        setShould(status.should);
        
    }

    if(should != true){
        setSegundos(0)
        return;
    }
    if(should == true) {
        console.log("oi", should);  
        //  play();
        
        if (segundos > 0) {
            console.log("oi2", should);
            setTimeout(() => setSegundos(segundos - 1), 1000);
        
        
        }
            
        if (segundos == 0 && minutos > 0) {
            setMinutos(minutos - 1);
            setSegundos(59);
        }

        if (segundos == 0 && minutos == 0) {
            setShould(false)
            // pause();
            setMinutos(0);
        }    
        
        
        
        if(should == false){
            console.log("opa", should);
        }
        
    }
    if(should != true){
        console.log("aqui", should);
        // setSegundos(0)
    }
});*/

// setShould(false);
let time;
let timeBreake;
let i = 0;
let sec = 9;
let min = 3;
function focus() {
    
    
    console.log("cheguei aqui focus", minutos)
    time = setTimeout(() => {
       // console.log("time", time);
        
        if (segundos > 0) {
            setSegundos(segundos -1);
            //sec = sec-1;
            //segundos = segundos -1;
            //console.log("cheguei aqui", sec);   
//            let novoContent = document.createTextNode(sec);
           // atualizaSec.textContent = (sec);
             //clearInterval(interval)
        }

        if (segundos === 0 && minutos === 0) {
          
            setShould(false)
            setBreake(true);
            // pause();
            
            setMinutos(0);
            setSegundos(0);
             setMinutosBreake(1);
             setSegundosBreake(3);
            
            
          //  i = i+1;
            // console.log("i:", i);
            
        }
        if (segundos === 0) {
           if(minutos>0){

           
                // min = min -1;
                // atualizaSec.textContent = (5);
                // atualizaMin.textContent = (min);
                setSegundos(2)
              //  console.log("sera", minutos)
                setMinutos(minutos - 1);
            
        }
    }
        
    }, 1000);
    
}

function breaking() {
    //console.log("entrou")
    //setShould(false);
    console.log("breaking", breake);
    
        timeBreake = setTimeout(() => {
            /// clearInterval(interval)
            if (segundosBreake > 0) {
                // console.log("segundosbreake", segundosBreake)
                setSegundosBreake(segundosBreake - 1)
            }
            if (segundosBreake === 0 && minutosBreake === 0) {
              
                setBreake(false);
                setShould(true);
                // pause();
                
                setMinutos(1);
                setSegundos(0);
            
                 
                setMinutosBreake(0);
                setSegundosBreake(0);
                // console.log("s")
               // console.log("s", minutos);
               
            }
            if (segundosBreake === 0) {
                // console.log("serabreake", minutosBreake)
                if (minutosBreake > 0) {
                    setSegundosBreake(5)
                    // console.log("sera", minutosBreake)
                    setMinutosBreake(minutosBreake - 1);
                }
            }
        }, 1000);
    

}

function executar(){
    if (should === false && breake === false ) {
        //console.log("breake", breake)
        return;
    }
    if(minutosBreake === 0 && segundosBreake === 0 && should === false){
        setMinutos(2);
        setShould(true);
        console.log("chegou")
    }
    if (should === true && breake === false) {
        
        //focus();
    }
}

let minutos1 = Math.floor(secondsLeft / 60);
let segundos1 = secondsLeft % 60;
let j = 1;
const [countSession, setCountSession] = useState(0);
const [countBreake, setCountBreake] = useState(0)
useEffect(() => {
    const handleSwitch = () =>{
        if(session === 'session'){
            setSession('breake');
            setSecondsLeft(breakLength * 60)
        }else if(countSession >= 2 && secondsLeft == 0){
            setShould(false);

        }
        else if( session === 'breake'){
            setSession('session');
            setSecondsLeft(sessionLength * 60);
           // play();
        }
    }
    let countdown = null;
    if(should && secondsLeft > 0){
        countdown = setInterval(() =>{
            setSegundos(secondsLeft - 1);
            setSecondsLeft(secondsLeft - 1);
        }, 100);
    } else if(should && secondsLeft == 0){
        setCountSession(countSession+1);
        setCountBreake(countBreake+1);
        console.log('1', countSession);
        console.log('2', countBreake);

        countdown = setInterval(()=>{
            setSecondsLeft(secondsLeft-1);
            
        }, 100);
    
        handleSwitch();
    } else {
        clearInterval(countdown);
    }
    return () => clearInterval(countdown);
});


//   //  console.log("should", should)
//     if (should === false && breake === false) {
//         //console.log("breake", breake)
//         return;
//     }
   
//     if (should === true && breake === false) {
//         if(minutos != 0 || segundos != 0){
//             focus();
//         }

        
//     }

    
// } )


// useEffect(()=>{
//     if (breake === true && should === false) {
// if(minutosBreake !=0 || segundosBreake !=0 ){
//     breaking();
// }
    
//     }
// })


function comecar() {
    
    //setMinutos(3);
    setShould(true);
    //setBreake(false);
    //focus();
    console.log("should", should);
   // play();

}

function play() {
    const audio = audioRef.current;
    audio.volume = 0.05;
    audio.play();
}




function handleSubmit() {
    // Salvar tempo em um nobo objeto

}

function adiciona(){
    const novoli = document.createElement('li');
    const novoContent = document.createTextNode(minutos + ":00");
    novoli.appendChild(novoContent);
    const atualUl = document.getElementById("ul");
    atualUl.append(novoli);
    //  console.log(novoli)
}

function submit(){  
    //  const content = document.getElementById("ul")
    const minu = "";
    const lis = document.getElementById('ul').getElementsByTagName('li');
    // const idArray = [{
    //     minutos: minu,
    // }];
    console.log("li:", lis);
    const idArray = [];
    const data=[]

    for ( var counter = 0; counter < lis.length; counter++)
    {
        //idArray.push( lis[counter].textContent );
        //idArray.minutos = "10"
        //idArray.minutos = (lis[counter].textContent);
        idArray.push( {minutos: lis[counter].textContent} );
    }
    
    // console.log("value li", idArray );
    
    var  value  = idArray.minutos;
    console.log("array:", idArray.length);
    for(var i = 0; i <idArray.length; i++){
        // console.log("value", idArray[i].minutos);
        const [minu, sec] = idArray[i].minutos.split(":");
        console.log("split:", minu);
        data.push( {minutos: minu} );
    }
    
    console.log("data", data);
    
    const json = JSON.stringify(data);
//        JSON.stringify(data, null, 2),
    //   const novo = value.split(":")

    console.log("json:", json);
    // console.log("split:", min);

    //console.log("submit", content);
    // const data1 = {"id": 0, minutos, segundos}
    const data1 = {minutos}
    console.log(data)

    for(var k = 0; k<data.length; k++){
        
        console.log("for:", data[k]);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data[k])
        };

        fetch("http://localhost:5000/pomodoro/inserir", requestOptions).then((response) => response.json())
        .then((data1)=>{
            
            console.log("sucess:", data1);
        })
        .catch((error)=>{
            console.log("Error", error);
        });
        
    }

    
}  

    return (
        <div className="h-screen">
            <audio ref={audioRef} src={som} ></audio>
            <div className="container mx-auto h-screen pt-32 w-1/3">
                <div className=" rounded-t-xl bg-pink-500 flex justify-center">
                    <h2 className="text-white text-xl m-1">Pomodoro timer</h2>
                </div>
                {/* corpo todo */}
                <div className=" container flex justify-center p-5 border rounded-b-xl bg-white">
                    {/* cabeçaho card/timer */}
                    <div className="self-center">
                        {/* <div className="flex justify-center">
                            <h2 className="text-xl">Pomodoro timer</h2>
                        </div> */}
                        <div className="">
                            <div className="flex justify-center">
                            {/* timer / meio */}
                                <div className="m-5 justify-center text-center">
                                    <h2 className="font-medium text-xl">Tempo de foco</h2>
                                    <h2 className="text-xl m-2 text-red-600">{sessionLength+":00"}</h2>
                                    <button className="text-xl pr-2 pl-2 mr-2 bg-red-700 text-white rounded" onClick={adicionaSession}>+</button>
                                    <button className="text-xl pr-2 pl-2 bg-yellow-500 text-white rounded" onClick={decrementaSession}>-</button>
                                </div>
                                <div className="m-5 justify-center text-center ">
                                    <h2 className="font-medium text-xl">Tempo de pausa</h2>
                                    <h2 className="text-xl m-2 text-green-500">{breakLength+":00"}</h2>
                                    <button className="text-xl pr-2 pl-2 mr-2 bg-green-400 text-white rounded" onClick={adicionaBreake}>+</button>
                                    <button  onClick={decrementaBreake} className="bg-green-700 text-white text-xl pr-2 pl-2 rounded">-</button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                
                                   {/* <h2 className="text-6xl font-medium"> <span id="span-min">{min}</span> : <span id="span-sec"> {sec}</span></h2> */}
                               <div className="text-center	">
                                    {
                                        (session == 'session')?
                                        <div><h2 className="text-6xl font-medium text-red-600 m-5"> {minutos1 < 10 ? ("0" + minutos1).slice(-2) : minutos1}:{segundos1 < 10 ? ("0" + segundos1).slice(-2) : segundos1}</h2> 
                                        <span className="font-medium">Mantenha o foco!</span>
                                        </div>
                                        : <div><h2 className="text-6xl font-medium text-green-500 m-5">{minutos1 < 10 ? ("0" + minutos1).slice(-2) : minutos1}:{segundos1 < 10 ? ("0" + segundos1).slice(-2) : segundos1}</h2> 
                                        <span>Tenha uma pausa agora</span>
                                        </div>
                                    }
                                </div>
                                    
                            </div>

                            {/* <div className="flex justify-center pt-5">

                                <div className="self-center mr-5">
                                        <button className="bg-blue-600  border rounded w-10 h-10" onClick={adicionaMinutos}> 
                                        <span className="text-white" >+</span> </button>
                                </div>
                                <div className="self-center ml-5">
                                        <button className="bg-indigo-500 border rounded w-10 h-10"> 
                                        <span className="text-white">-</span> 
                                        </button>
                                    </div>
                            </div> */}
                            {/* botoes inicio e fim */}
                            <div className="flex justify-center mt-10 mb-10">
                                <button className="bg-blue-600 text-white border rounded mr-2 w-20 h-10 disabled:bg-yellow-300 " onClick={!should ? comecar : parar}>
                                    <span >{!should ? "Comecar" : "Stop" } </span>
                                </button>
                                <button className="bg-red-500 text-white border rounded ml-2 w-20 h-10" onClick={pause}>
                                    <span>Reset</span>
                                </button>
                                {/* <button className="bg-purple-600 text-white border rounded ml-2 w-20 h-10" onClick={descansar}>
                                <span >Descançar</span></button> */}
                               
                            </div>

                            {/* <div className="border rounded border-gray-600 mt-8">
                                <ul id="ul" className="list-disc">
                                    
                                </ul>    
                            </div>       
                            <div className="flex">
                                <div className="flex justify-center mt-8 mb-10">
                                    <button className="bg-yellow-500 text-white p-1 border rounded h-10 w-20" onClick={adiciona}>adiciona</button>
                                </div>
                                <div className="flex justify-center mt-8 mb-10">
                                    <button className="bg-green-600 text-white p-1 border rounded h-10 w-20" onClick={submit}>Salvar</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )

}


export default Body