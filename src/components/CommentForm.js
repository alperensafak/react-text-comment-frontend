import React from 'react';

const CommentForm = (props) => {


    return (
        <React.Fragment>

            <form className="ui form" onSubmit={(e) => {
                e.preventDefault();
                props.handleCommentSubmit(props.comment)
            }} style={{marginTop: "60px"}}>
                <h4 className="ui dividing header">Comment</h4>

                < div className="ui small icon input">
                    <input name="display_name" type="text" onChange={props.handleOnChange}
                           value={props.comment.display_name}
                           placeholder="Username"/>

                </div>

                <div className="field" style={{marginTop: "10px"}}>

                    <textarea name="body" rows="2" onChange={props.handleOnChange} value={props.comment.body}
                              placeholder="Comment"/>
                </div>

                <button type="submit" className="ui orange button">Send</button>
            </form>


        </React.Fragment>
    );
};

export default CommentForm;