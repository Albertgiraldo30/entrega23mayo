import { useState,useEffect } from "react";
import CommentForm from "./commentForm";
import Listcomments from "./listcomments";

let Post = () => {

    //MANEJO DEL ESTADOS DE LOS LIKES
    let [likes, setLike]= useState(0)
    let  updateLikes = () => setLike(likes +1);
    
    
    //manejo de boton de comentarios;
    
    
    let [btnComment, setBtnComment] = useState(false);
    let isShowComment = () => setBtnComment(!btnComment);

    //lista de comentarios

let [textComment, setTextComment] = useState("")

let getCommentData = (comment) => {
    setTextComment(comment);
}

let listCom = [
    {id:1, text:"me gustan mucho los postres"},
    {id:2, text:"Pasame la reseta"}
];

//funcion para obtener comentarios del formulario
let nextID =3;

let [listData, setListData] = useState(listCom);
//comprabar si hay un nuevo comentario

useEffect(()=>{

    if (textComment){
        setListData([
            ...listData,
            {id: nextID++, text: textComment}
        ]);
    }

}, [textComment,nextID]);




    return(
        <div className="card" style={{"width": "18rem"}}>
          <div className="card-body">
          <h5 className="card-title">Postre 3 Leches</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
          <img src={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRRNL67pg9KirJsBQYzzvI1Cyn_4oSS7it9doBmbEdD-VwGuQtpa90rIXHGjgFnpU7SsgvCdkPhHnBanxyrp_aN2yr2YPPd7RAXiwfZveW2S7cNRJwhp5kYw&usqp=CAE"} className="card-img-top" alt="..."/>

          
            
        </div>
                <ul className="list-group list-group-flush">
                        <li  className="list-group-item d-flex justify-content-around">
                            <span>👍😁😘 {likes} </span><span>{listData.length} 💬</span>
                        </li>
                        <li  className="list-group-item d-flex justify-content-around">
                                <button className="btn btn-secondary" onClick={updateLikes}>👍Likes</button> 
                                <button className="btn btn-secondary"onClick={isShowComment} >💬 Comentarios</button>
                        </li>
                </ul>
                <div className="">
                    { btnComment===true && <CommentForm getCommentData = {getCommentData} /> }
                </div>
                <Listcomments listComData = {listData} />
        </div>
    )

}



export default Post;