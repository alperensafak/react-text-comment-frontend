import React, {useState, useEffect} from 'react';
import {api} from "../api"
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Text from "./Text";
import DeleteModal from "./DeleteModal";

const COMMENT_INITIAL = {display_name: "", body: ""}

const TextContent = (props) => {

    const id = props.match.params.id;

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(COMMENT_INITIAL)

    useEffect(() => {
     api().get(`/posts/${id}`)
            .then(response => {
                setPost(response.data)
            })
            .catch((err) => console.log(err));

        api().get(`/posts/${id}/comments`)
            .then(response => {
                setComments(response.data);
            })
            .catch((err) => console.log(err));
    })

    const handleCommentSubmit = comment => {
        api().post(`/posts/${id}/comments`,comment)
            .then(response => {
                console.log(response.data)
                setComments([
                    ...comments,
                    response.data
                ])
                setComment(COMMENT_INITIAL)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleOnChange = event => {
        setComment({
            ...comment,
            [event.target.name]: event.target.value
        })
    }


    return (
        <React.Fragment>

            <Text post={post}/>
            <DeleteModal post={post} push={props.history.push} />
            <CommentForm handleCommentSubmit={handleCommentSubmit} handleOnChange={handleOnChange} comment={comment}/>
            <Comments comments={comments}/>


        </React.Fragment>
    )


}

export default TextContent;