import React, {useState} from 'react';
import {Button,Modal} from "semantic-ui-react";
import {api} from "../api";

const DeleteModal = ({post,push}) => {
    const[open,setOpen] = useState(false);
    const [error,setError] = useState("")
    // const toggleModal = ()=>{
    //     setOpen(!open)
    // }




    const show = ()=>{
        setOpen(true)
    }
    const close = ()=>{
        setOpen(false)
    }

   const deletePost = ()=>{
  api().delete(`/posts/${post.id}/`)
      .then(()=>{
          close()
          push("/");
          setError( "")
      })

      .catch(()=>{
          setError("the text could not be deleted")
      })


     }

    return (

    <React.Fragment>
        <Button color="red" onClick={show}>Delete</Button>
        <Modal size ="mini" open ={open} onClose={close}>
            <Modal.Header>Delete Text</Modal.Header>
            <Modal.Content>
                <p>Are you sure this text: <b>{post.title}</b>  delete? </p>
                {error && <p>{error}</p>}
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={close}>No</Button>
                <Button positive icon="trash alternate" onClick={deletePost} labelPosition="right" content="Yes, delete!"/>
            </Modal.Actions>
        </Modal>


    </React.Fragment>
    );
};

export default DeleteModal;