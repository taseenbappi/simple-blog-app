import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/PostCard.scss";

const PostCard = ({ post }) => {

    return (
        <div className="col">
            <div className="card h-100 post-card">
                <Link to={`/post-details/${post.id}`} className="link-style"><h4 className="">{post.title.slice(0, 15) + "..."}</h4></Link>
                <p>{post.body.slice(0, 50) + "..."}</p>
            </div>
        </div>
    );
};

export default PostCard;