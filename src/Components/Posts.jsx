import React from 'react';
import PostCard from './PostCard';

const Posts = () => {

    return (
        <div className='container pt-5'>
            <h2>Posts</h2>
            <hr className='w-25' />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3">
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
            </div>

        </div>
    );
};

export default Posts;