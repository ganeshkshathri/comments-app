import './index.css'

const CommentItem=(props)=>{
    const {eachComment,onDeleteHandler,initialContainerBackgroundClassNames,onLikeHandler} = props
    const {name,comment,id,islike} =eachComment
   
    const style={
        backgroundColor:`${initialContainerBackgroundClassNames[Math.floor(Math.random()*6)]}`
    }
    
    const mydeletefun=()=>{
       onDeleteHandler(id)
    }

    const mylikefun=()=>{
        onLikeHandler(id)
    }
    return(
        <li className="comment">
                    <div className="comment-up">
                        <p style={style}  className="initial">{name[0]}</p>
                        <div className="for-pad">
                            <div className="comment-side">
                                <p className="commenter-name">{name}</p>
                                <p className="time-passed">2 minutes ago</p>
                            </div>
                            <p>{comment}</p>
                        </div>
                    </div>
                    <div className="like-delete">
                        <div className="comment-side">
                            <img onClick={mylikefun}  className="like-img" src={islike?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"} alt="like"v/>
                    
                            <button>Like</button>
                        </div>
                        <img onClick={mydeletefun} className="delet-btn" src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete" data-testid="delete"/>
                    </div>
                    <hr/>
                </li>
    )
}
export default CommentItem