import { useState } from "react";
import axios from 'axios';
import './consumindo.css'; 
import Logo from '../../images/correios-cep.jpg'
import Cidade from '../../images/cidade.jpg'
import Ponte from '../../images/ponte.jpg'
import Brasilia from '../../images/brasilia.jpeg'
// import SP from '../../images/SP 2.png'
import Mapa from '../../images/mapa.png'
import Carregando from '../../images/Carregando.png'
import Busca from '../../images/busca.png'


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
            <img src={Busca} alt="" />
            <h1>Buscar CEP:</h1>
            <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}/>
            <button onClick={buscaApi}>Pesquisar</button>

        <p> {data.length === 0 ? "Digite um CEP para buscar" : "Logradouro: " + data.logradouro}</p> 
        <p>{data.length === 0 ? "" : "Bairro: " + data.bairro}</p>
        <p> {data.length === 0 ? "" : "Municipio: " + data.localidade}</p>
        <p>{data.length === 0 ? "" : "Estado: " + data.uf}</p>
        <p>{data.length === 0 ? "" : "CEP: " + data.cep}</p>
        {/* <div class="map-responsive">
            <iframe src="xxx" width="600" height="450" frameborder="0" style="border:0" allowfullscreen> 
            </iframe>
        </div> */}
        </form>
        </main>          
    )
}

export default ConsumindoApi;