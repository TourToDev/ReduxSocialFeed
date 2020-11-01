import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SinglePostPage(props) {
    const {match} = props;
    //console.log(match)
    const {postId} = match.params;
    
    //console.log(postId);

    const posts = useSelector( state => state.posts )

    //console.log(posts)
    const post = posts.find( post => post.id === postId );

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
        </section>
    )
}