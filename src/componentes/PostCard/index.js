import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import imagemCard from "../../img/dom-professor-otimizar tempo.jpeg";

const PostCard = ({ titulo, id, autor, aoDeletar }) => {
  const aoEvento = () => {
    aoDeletar({ id });
  };

  const isProfessorPage = window.location.pathname === "/post/professor";

  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={imagemCard}
        alt="Imagem da capa do post"
      />

      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.autor}>{autor}</p>

      <div className={styles.botoes}>
        <Link to={`/post/${id}`}>
          <button className={styles.botao}>Ler</button>
        </Link>

        {isProfessorPage && (
          <Link to={`/post/formulario/${id}`}>
            <button className={styles.botao}>Editar</button>
          </Link>
        )}

        {isProfessorPage && (
          <button onClick={aoEvento} className={styles.botao}>Deletar</button>
        )}
      </div>
    </div>
  );
};

export default PostCard;