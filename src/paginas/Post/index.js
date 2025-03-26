import { useParams } from "react-router-dom"
import imagemPost from "../../img/Estudar.png"
import { Link } from "react-router-dom"




const Post = ({listaPost}) => {
    const parametro = useParams()
    

    const post = listaPost.find((post)=>{
        return(post.id === parametro.id)
    })

    



    return(
        <body>

            <h2>
                {post.titulo}
            </h2>

            <p>
                {post.descricao}
            </p>

            





        </body>

    )
}

export default Post