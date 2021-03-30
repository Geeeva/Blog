import {useState, useEffect, useContext} from 'react';
import {PostContext} from '../store/PostContext';
import {Link, withRouter} from "react-router-dom";


const Home = (props) => {
    const deleteHandler = (postName) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        };
        fetch(`https://blog-d8b04-default-rtdb.europe-west1.firebasedatabase.app/posts/${postName}`, requestOptions)
            .then(response => {response.json(); console.log(response)})
            .then(data => console.log(data));
    }
    const posts = useContext(PostContext);
    console.log(posts)
    const postsArr = [];
    Object.entries(posts).forEach(entry => {
        postsArr.push(entry);
    });
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="posts-container col-md-12">
                        <h2>All posts</h2>

                        <div className="row">
                            {
                                postsArr.map((post, key) => (
                                    <div className="col-md-4">
                                        <div class="col-md-12 icons">
                                            <div className="icon-wrapper">
                                                <Link to={{
                                                    pathname: `/edit-post`,
                                                    state: {
                                                        post, key
                                                    }

                                                }}>
                                                    <i className="fas fa-edit"></i></Link></div>
                                            <div className="icon-wrapper delete" onClick={deleteHandler(post[0])}><i className="fas fa-trash-alt"></i></div>
                                        </div>
                                        <Link
                                            to={{
                                                pathname: `/post/${key}`,
                                                state: {
                                                post
                                                }
                                            }}
                                        >
                                            <div className="pic-wrapper">
                                                <img className="img-fluid" src={post[1].pic} alt={post[1].title}/>
                                            </div>
                                            <h4>{post[1].title}</h4>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);