import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentCard from '../Components/CommentCard';
import "../styles/PostDetails.scss";

const PostDetails = () => {
    const { id } = useParams();
    const [postDetails, setPostDetails] = useState({});
    console.log(postDetails);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [id])


    return (
        <div className='post-details-container container py-5'>
            <h4 className="post-title">Title: {postDetails.title}</h4>
            <p>Description: {postDetails.body}</p>

            <div className='post-comment-container'>
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="comment-header-txt">
                        11 Comments
                    </h3>

                </div>
                <hr className='' />

                <div className="comment-container">
                    <CommentCard></CommentCard>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;