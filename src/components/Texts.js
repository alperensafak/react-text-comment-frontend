import React, {useEffect, useState} from 'react';
import {api} from "../api";
import moment from "moment";
import {Link} from "react-router-dom";

const Texts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api().get("/posts")
            .then(response => {
                setPosts(response.data)
            });
    }, [])

    return (
        <div className="ui relaxed divided list">
            <div style={{
              display:"flex",
                justifyContent:"flex-end"
            }}>
            <Link to ="/addtext" className="ui primary button">Add Text</Link>
            </div>
        {

            posts.map((item) => {
                return (
                    <div className="item" key={item.id}>

                        <div className="content">
                            <Link to={`/posts/${item.id}`} className="header">{item.title}</Link>
                            <div
                                className="description">  {moment(item.created_at).format('LLL')}</div>

                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default Texts;