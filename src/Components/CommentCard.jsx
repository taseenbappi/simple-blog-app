import React from 'react';
import "../styles/CommentCard.scss"

const CommentCard = () => {
    return (
        <div className='comment-card'>
            <div className="d-flex align-items-center py-4">

                <div className="">
                    <h5 className="comment-author">Taseen Bappi</h5>
                    <p className="">June 23, 2014 at 11:14 am</p>
                </div>
            </div>
            <p className="comment-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <hr />

        </div>
    );
};

export default CommentCard;