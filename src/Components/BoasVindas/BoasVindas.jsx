function BoasVindas(){
    return (
        <div>
            <h1 id="mensagem">Bem-vindo ao React!</h1>
            <button onClick={Alterar}>Alterar mensagem</button>
        </div>
        
    );
}
function Alterar(){
    document.getElementById('mensagem').innerHTML = 'Você alterou a mensagem!'
    
}

export default BoasVindas;