import './Aula.css'
import Header from '../Header/Header';
import Card from '../Card/Card';
import Mensagem from '../Mensagem/Mensagem';
function Aula(){
    return (
        <div>
            <Mensagem nome = 'Antony' idade = {23} premium = {false} />
            

        </div>
        
    );
}

export default Aula;