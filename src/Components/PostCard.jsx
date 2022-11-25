import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/PostCard.scss";

const PostCard = () => {

    return (
        <div className="col">
            <div className="card h-100 post-card">
                <Link to={"/post-details"} className="link-style"><h4 className="">Discover what Edstructure System is</h4></Link>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
        </div>
    );
};

export default PostCard;