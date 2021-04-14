import React from 'react';


const Comments = ({comments}) => {


    return (
      <React.Fragment>
          <div className="ui comments" style={{marginTop: "60px"}}>

              <div className="ui divider"/>

              {
                  comments.map(element => {
                          return (
                              <div className="comment" key={element.id}>
                                  <div className="content">
                                      <div className="author">{element.display_name}</div>
                                      <div className="metadata">
                                          <span className="date">{element.created_at}</span>
                                      </div>
                                      <div className="text">
                                          {element.body}
                                      </div>

                                  </div>
                              </div>
                          )
                      }
                  )
              }

          </div>

      </React.Fragment>
    );
};

export default Comments;