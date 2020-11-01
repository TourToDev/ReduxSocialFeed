import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const selectPostById =   postId  => state => state.posts.find(post => post.id === postId)

export default function SinglePostPage(props) {
    const {match} = props;
    //console.log(match)
    const {postId} = match.params;
    
    //console.log(postId);

    //Select the smallest amount of data we need
    const post = useSelector( selectPostById( postId ) )

    if (!post) {
        return (
            <section>
                <h2>Page Not Found</h2>
            </section>
        )
    }

    return(
        <section>
            
            <article>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </article>

            <Link to={ `/edit/${post.id}` }>Edit This Post</Link>
        </section>
    )
}