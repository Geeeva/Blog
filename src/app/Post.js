import { withRouter } from "react-router-dom";

const Post = ({ location}) => {
    const { state } = location;
    const { pic, title, author, description } = state.post;
    return (
        <div className="container">
            <div>
                <div className="pic-wrapper">
                <img className="img-fluid" src={pic} alt={title} />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default withRouter(Post);