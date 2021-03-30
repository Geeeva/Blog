import React, {useState, useContext, useEffect} from "react";
import {PostContext} from './store/PostContext';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from "./app/Home";
import Post from "./app/Post";
import AddPost from "./app/AddPost";
import EditPost from "./app/EditPost";
import logo from "./assets/images/logo.jpg";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getResults();
    },[]);

    const getResults =() => {
        setLoading(true);
        fetch("https://blog-d8b04-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
            .then(response => response.json())
            .then(data => {setPosts(data); setLoading(false);});
    }



  return (
      <PostContext.Provider value={posts}>
          <Router>
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"><Link to="/"><img className="logo" src={logo} alt="logo"/></Link></div>
                        <div className="col-md-10 button-wrapper"><Link to={'/add-post'} ><div className="add-button">add post</div></Link></div>
                    </div>
                </div>
                <Switch>
                    <Route  path="/" exact strict component={Home} />
                    <Route  path="/post/:postId" exact strict component={Post} />
                    <Route  path="/add-post" exact strict component={AddPost} />
                    <Route  path="/edit-post" exact strict component={EditPost} />
                </Switch>
            </div>
        </Router>
    </PostContext.Provider>
  );
}

export default App;
