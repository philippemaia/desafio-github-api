import ButtonPrimary from "../ButtonPrimary";
import "./styles.css";

export default function Content() {
  return (
    <div className="card">
      <div className="container">
        <h1 className="content-title">Encontre um perfil Github</h1>
        <input type="text" className="input-user"></input>
        <ButtonPrimary text="Encontrar" />
      </div>
    </div>
  );
}
