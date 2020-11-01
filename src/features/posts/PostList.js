import React from "react";
import {useSelector, useDispatch} from 'react-redux';
export default function PostList() {
    const posts = useSelector( state => state.posts );
    const renderedList = posts.map( post => {
        return (
            <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </article>
        )
    } )
    return (
        <div>
            {renderedList}
        </div>
    )
}