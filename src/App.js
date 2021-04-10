import React from "react"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Posts from "./components/Posts"
import PostContent from "./components/PostContent";

function App() {

    return (
        <Router>
            <div className={"main-wrapper"}>
                <header>
                    <div className="ui three item menu">
                        <Link  to="/" className="item active">HOME</Link>

                    </div>
                </header>

                <div className="ui raised very padded text container segment">

                    <Route path="/" exact component={Posts}/>
                    <Route path="/posts/:id" component={PostContent}/>


                </div>

            </div>
        </Router>
    );
}

export default App;
