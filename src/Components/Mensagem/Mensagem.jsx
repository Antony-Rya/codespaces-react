function Mensagem(props){
    let mensagem = '';
    if(props.premium == true){
        mensagem = "Bem-vindo(a), " +  props.nome + "! Obrigado por ser um usuário premium!";
    }else{
        mensagem = "Olá, " + props.nome + "! Considere se tornar um usuário premium para mais benefícios.";
    }
    if (props.idade < 18){
        mensagem += " Atenção: Você tem menos de 18 anos. Algumas funcionalidades podem ser restritas."
    }
    return(
        <h1>{mensagem}</h1>
    );

}

export default Mensagem;