import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
export default function PostList() {
    const posts = useSelector( state => state.posts );
    const renderedList = posts.map( post => {
        return (
            <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0,100)}</p>
                <Link to={`/posts/${post.id}`}>View Article</Link>
            </article>
        )
    } )
    return (
        <div>
            {renderedList}
        </div>
    )
}