import React, {useEffect} from 'react';
import {useState} from 'react';

const submitHandler = () => {

}
const AddPost = () => {
    const initialState ={
        title: "",
        url: "",
        author: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialState);
    const [submissionData, setSubmissionData] = useState(initialState);
    const{title, url, author, description} = formData;
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] =  useState(false);
    const [notificationErr, setNotificationErr] =  useState("");
    const updateFormData = e =>
            {setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }

    const validate = e => {
        let isError = false;
        let notificationErr = "";

        let {title, url, author, description} = formData;

        if (title.length >= 21) {isError = true;}
        if (url.length === 0) {isError = true;}
        if (author.length >= 21) {isError = true;}
        if (description.length >= 250) {isError = true;}

        if(isError){
            notificationErr = "All * fields must be properly filled";
            setNotificationErr(notificationErr);
        } else{
            setNotificationErr("");
        }
        return isError;
    }
    const submitHandler = e => {
        e.preventDefault();
        const err = validate();
        if(err === false) {
            setFormData(formData)
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({        title: title,
                    url: url,
                    author: author,
                    description: description})
            };
            fetch('https://blog-d8b04-default-rtdb.europe-west1.firebasedatabase.app/posts.json', requestOptions)
                .then(response => {response.json(); console.log(response)})
                .then(data => console.log(data));
            setFormData(initialState);

            /*axios.post('https://blog-d8b04-default-rtdb.europe-west1.firebasedatabase.app/posts.json', formData)
                .then(response => console.log(response))*/

        }

        }

    return(
        <div>
            <h2>Enter a new post</h2>
            <form>
                <div>
                    <div className="col-md-6">
                        <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="title"
                            value={title}
                            onChange={e => updateFormData(e)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            id="url"
                            type="text"
                            name="url"
                            placeholder="url"
                            value={url}
                            onChange={e => updateFormData(e)}
                            required
                            />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="author"
                            placeholder="author"
                            value={author}
                            onChange={e => updateFormData(e)}
                            required
                            />
                    </div>
                    <div className="col-md-6">
                        <textarea
                            type="text"
                            name="description"
                            placeholder="descritpion"
                            value={description}
                            onChange={e => updateFormData(e)}
                        required
                        ></textarea>
                    </div>
                    <div>{notificationErr}</div>

                </div>
                    <button
                        id="#submit"
                        type="submit"
                        className="btn"
                        onClick={submitHandler}
                        ><span>Send</span>
                    </button>
            </form>
        </div>
    )
}
export default AddPost;