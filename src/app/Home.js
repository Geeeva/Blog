import {useState, useEffect, useContext} from 'react';
import {PostContext} from '../store/PostContext';
import {Link, withRouter} from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import Post from './Post';


const Home = (props) => {
    const posts = useContext(PostContext)
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
                                <div className="icon-wrapper">
                                    <Link to={{
                                        pathname: `/edit-post`,
                                        state: {
                                        post, key}

                                    }}><i class="fas fa-edit"></i></Link></div>
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