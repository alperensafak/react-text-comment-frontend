import React, {useEffect, useState} from 'react';
import {api} from "../api"
import {withRouter} from "react-router-dom"


const TextForm = (props) => {

    const [text, setText] = useState({
        title: "",
        content: "",
    });

    const [error, setError] = useState("");

    const sendText = (event) => {
        event.preventDefault();
        setError("");

        if(props.text.title){
            api().put(`/posts/${props.match.params.id}`,text)
                .then(response =>{
                    console.log(response.data)
                    props.history.push(`/posts/${props.match.params.id}`);
                })
                .catch(error=>{
                    setError("Title and content are required")
                })
        }

        else {

            api().post("/posts", text)
                .then(response => {
                    props.history.push("/");
                })
                .catch(err => {
                    setError("Title and Content are required")
                })
        }


    }

    const inputHandler = (e) => {
        setText(
            {
                ...text,
                [e.target.name]: e.target.value
            }
        )

    }

    useEffect(()=>{
        if(props.text?.title&&props.text?.content) setText(props.text)
    },[props.text])


    return (
        <React.Fragment>
            {error && (
                <div className="ui error message">
                    <div className="header">ERROR</div>
                    <p>{error}</p>

                </div>
            )}


            <div className="ui form">
                <div className="field">
                    <label>Text Title</label>
                    <input value={text.title} name="title" onChange={inputHandler} type="text"/>
                </div>
                <div className="field">

                    <label>Text Content</label>
                    <textarea value={text.content} name="content" onChange={inputHandler} rows="3"/>
                </div>


                <button onClick={sendText} className="ui primary button">
                    Add
                </button>
                <button className="ui button">
                    Cancel
                </button>
            </div>
        </React.Fragment>
    );

};

export default withRouter(TextForm);