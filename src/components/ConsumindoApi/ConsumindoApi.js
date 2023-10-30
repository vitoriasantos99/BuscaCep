import { useState } from "react";
import axios from 'axios';
import './consumindo.css'; 
import Logo from '../../images/correios.jpg'

function ConsumindoApi(){
    const [buscaCep, setBuscaCep] = useState();
    const [data, setData] = useState([]);

    const api = `https://viacep.com.br/ws/${buscaCep}/json`;

    function buscaApi(e){
        e.preventDefault();
        axios.get(api)
        .then(response => {






            
            console.log(response.data);
            setData(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    return(
        <main>
        <form>
            <img src={Logo} width={500} alt="" />
            <h1>Pesquisar CEP:</h1>
            <br/>
            <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}/>
            <br/>
            <button onClick={buscaApi}>Pesquisar</button>
        
        <p> {data.length === 0 ? "Digite um CEP para buscar" : "Logradouro: " + data.logradouro}</p> 
        <p>{data.length === 0 ? "" : "Bairro: " + data.bairro}</p>
        <p> {data.length === 0 ? "" : "Municipio: " + data.localidade}</p>
        <p>{data.length === 0 ? "" : "Estado: " + data.uf}</p>
        <p>{data.length === 0 ? "" : "CEP: " + data.cep}</p>
        </form>
        </main>
    )
}

export default ConsumindoApi;