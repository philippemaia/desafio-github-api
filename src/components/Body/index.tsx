import ButtonPrimary from '../ButtonPrimary';
import './styles.css';

export default function Body(){
    return (
        <>
        <div id="users">
            <div className="container">
                <h1 className="home-title">Desafio Github API</h1>
                <p className="fonte-cinza">DevSuperior - Escola de programação</p>
                <ButtonPrimary text="Começar" />
            </div>
        </div>
        </>
    );
}