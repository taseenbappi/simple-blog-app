import React, { useEffect } from 'react';
import { RotatingSquare, Triangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/Posts/postSlice';
import PostCard from './PostCard';

const Posts = () => {

    const { posts, isLoading, error } = useSelector((state) => (state.posts));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center vh-100">
            <Triangle
                height="50"
                width="50"
                color="#f74702"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    return (
        <div className='container pt-3'>
            <h2>Posts</h2>
            <hr className='w-25' />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-3 pb-5" >
                {error && <p>{error}</p>}
                {posts && posts.slice(0, 19).map((post) => < PostCard
                    key={post.id}
                    post={post}
                ></PostCard>)}

            </div>

        </div >
    );
};

export default Posts;