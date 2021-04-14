import React from 'react';
import moment from "moment";
import {Link} from "react-router-dom";



const Text = ({post}) => {


    return (

        <React.Fragment>
            <h2 className="ui header">{post.title}</h2>
            <p>{moment(post.created_at).format('LLL')}</p>
            <div className="large ui buttons" >
                <Link className="ui blue button" to={`/posts/${post.id}/edit`}  >Edit</Link>



                

            </div>
            <p>{post.content}</p>
        </React.Fragment>
    );
};

export default Text;