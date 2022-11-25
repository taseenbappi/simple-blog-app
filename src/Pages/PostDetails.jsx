import React from 'react';
import CommentCard from '../Components/CommentCard';
import "../styles/PostDetails.scss";

const PostDetails = () => {
    return (
        <div className='post-details-container container py-5'>
            <h4 className="post-title">Discover what Edstructure System is</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate veritatis quam ipsum tempora asperiores officiis accusantium, nostrum exercitationem cumque minus excepturi nisi expedita ea dignissimos quasi voluptatem doloremque impedit quibusdam. Quidem consequatur cupiditate consectetur aut eaque, velit ut accusantium molestias officiis fuga, tempore nobis quae consequuntur quas, nostrum ab amet fugiat praesentium ad distinctio? Voluptate enim labore fugit ratione nostrum libero consequuntur beatae voluptas rerum similique saepe omnis ex reiciendis expedita amet inventore eaque, odio, dolore animi doloribus dolorum magnam dolor provident nobis. Placeat nisi officiis modi rerum minima quod odio beatae vero sequi eveniet nulla sit debitis impedit magni, omnis harum vitae voluptates unde maiores quos. Ipsam, iste cum. Veniam, harum consequuntur quasi est a expedita corrupti. Unde animi sequi asperiores magnam exercitationem maiores aliquid veritatis deleniti molestias necessitatibus voluptatem, dolores vel nulla. Impedit tempora possimus iure! Explicabo consequuntur quos vitae nam repellendus illo commodi! Facere iste illo illum est reprehenderit. Autem saepe, maiores asperiores minus eaque ullam non repellendus magni obcaecati pariatur accusantium necessitatibus odio a, et, harum earum cumque? Iste ea explicabo assumenda mollitia fugit neque a beatae illo consequuntur blanditiis nihil impedit sapiente voluptas tempora laboriosam, maiores nam illum tenetur animi reiciendis veritatis alias? Harum, corporis.</p>

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