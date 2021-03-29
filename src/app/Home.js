import {useState, useEffect, useContext} from 'react';
import {PostContext} from '../store/PostContext';
import {Link, withRouter} from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import Post from './Post';


const Home = (props) => {
const postsArr = useContext(PostContext);
console.log(postsArr)
    /*const [posts, setPosts] = useState([]);
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

    const postsArr = [];
    Object.values(posts).forEach((post, key) => {
        postsArr.push(post);
    });
    console.log(postsArr)*/
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
                                        <Link
                                            to={{
                                                pathname: `/post/${key}`,
                                                state: {
                                                post
                                                }
                                            }}
                                        >
                                            <div className="pic-wrapper">
                                                <img className="img-fluid" src={post.pic} alt={post.title}/>
                                            </div>
                                            <h4>{post.title}</h4>
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