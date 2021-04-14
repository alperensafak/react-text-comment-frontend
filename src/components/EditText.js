import React, {useEffect, useState} from 'react';
import TextForm from "./TextForm";
import {api} from "../api";

const EditText = (props) => {
    const id =props.match.params.id;
const [text,setText] = useState({})
    useEffect(()=>{
     api().get(`/posts/${id}`)
         .then(response =>{
            setText(
                {
                   title: response.data.title,
                   content: response.data.content
                }
            )
         })
    })


    return (


        <React.Fragment>

<TextForm text={text}/>
            {/*<div className="ui form">*/}
            {/*    <div className="field">*/}
            {/*        <label>Text Title</label>*/}
            {/*        <input value={text.title} name="title" onChange={inputHandler} type="text"/>*/}
            {/*    </div>*/}
            {/*    <div className="field">*/}

            {/*        <label>Text Content</label>*/}
            {/*        <textarea value={text.content} name="content" onChange={inputHandler} rows="3"/>*/}
            {/*    </div>*/}


            {/*    <button onClick={sendText} className="ui primary button">*/}
            {/*        Add*/}
            {/*    </button>*/}
            {/*    <button className="ui button">*/}
            {/*        Cancel*/}
            {/*    </button>*/}
            {/*</div>*/}
        </React.Fragment>
    );
};

export default EditText;