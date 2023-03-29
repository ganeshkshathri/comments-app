import CommentItem from '../CommentItem'
import { Component } from 'react'
import './index.css'
import { v4 } from 'uuid'


const initialContainerBackgroundClassNames = [
    'amber',
    'blue',
    'orange',
    'emerald',
    'teal',
    'red',
    'light-blue',
  ]


class Comments extends Component{

    state={
        name:"",
        comment:"",
        
        commentList:[]
    }

    nameChange=(event)=>{
        this.setState({name:event.target.value})
    }

    commentChange=(event)=>{
        this.setState({comment:event.target.value})
    }

    newComment=()=>{
        console.log("Buton clicked")
        const {name,comment,commentList}=this.state
        
        commentList.push({name,comment,id:v4(),islike:false})
       this.setState({name:"",comment:"",commentList:commentList})

    }
    onDeleteHandler=(id)=>{
        const {commentList}=this.state 
        const updatedCommentList = commentList.filter(eachcomment=>eachcomment.id!==id)
        this.setState({commentList:updatedCommentList})
    }
    onLikeHandler=id=>{
        this.setState(prevState=>({
            commentList:prevState.commentList.map(eachcomment=>{
                if(eachcomment.id===id){
                    return {...eachcomment,islike:!(prevState.islike)}
                }
                return eachcomment
            })
        }))
    }

    
    render(){
        const {name,comment,commentList}=this.state 
        const count = commentList.length

        return(
            <div className="comments-container">
        <h1 className="">Comments</h1>
        <div className="top-section">
            <div className="">
                <p className="para-head">Say something about 4.0 Technologies</p>
                <input onChange={this.nameChange} value={name} className="name-input" type="text" name="" id="" placeholder="Your Name" /><br/>
                <textarea onChange={this.commentChange} value={comment} className="comment-input" placeholder="Your Comment" name="" id="" cols="29" rows="10"></textarea><br/>
                <button onClick={this.newComment} className="but" type="button" >Add Comment</button>
            </div>
            <form></form>
            <img className="comment-img" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" />
        </div>
        <hr/>
        <div className="bottom-section">
            
            <ul className="comments-list">
                <div className="cmt-count">
                    <button className="comment-count">{count}</button>
                    <p>Comments</p>
                </div>
                {commentList.map(eachComment=><CommentItem onLikeHandler={this.onLikeHandler} key={eachComment.id} eachComment={eachComment} onDeleteHandler={this.onDeleteHandler}  initialContainerBackgroundClassNames={initialContainerBackgroundClassNames}/>)}
                
                
            </ul>
            
        </div>
    </div>
        )
    }
  }
  export default Comments
  
