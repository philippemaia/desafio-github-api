import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../ButtonPrimary';
import './styles.css';

export default function Body(){

    const navigate = useNavigate();

    function handleSearchClick(){    
      navigate("/search");    
    }

    return (
        <>
        <div id="users">
            <div className="container">
                <h1 className="home-title">Desafio Github API</h1>
                <p className="fonte-cinza">DevSuperior - Escola de programação</p>
                <div onClick={handleSearchClick}>
                    <ButtonPrimary text="Começar" />
                </div>
            </div>
        </div>
        </>
    );
}