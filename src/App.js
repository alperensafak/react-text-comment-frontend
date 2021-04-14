import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Texts from "./components/Texts"
import TextContent from "./components/TextContent";
import AddText from "./components/AddText";
import EditText from "./components/EditText";

function App() {



    return (
        <Router>
            <div className={"main-wrapper"}>
                <header>

                    <div className="ui secondary pointing menu">
                        <a href="/" className="item">
                            Home
                        </a>
                        <a href="/addtext" className="item">
                            Add Text
                        </a>
                        </div>
                </header>

                <div className="ui raised very padded text container segment">

                    <Route path="/" exact component={Texts}/>
                    <Route path="/posts/:id" exact component={TextContent}/>
                    <Route path="/addtext" component={AddText}/>
                    <Route path="/posts/:id/edit" component={EditText}/>


                </div>

            </div>
        </Router>
    );
}

export default App;
