function Header(props){
    let mensagem = 'Bem vindo, ' + props.nome
    if (props.funcao == 'admin'){
        mensagem += ', você é adminininastro'
    }
    return (
    <h1>{mensagem}</h1>
    );
}

export default Header;