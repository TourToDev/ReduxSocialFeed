import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

export default function AddPostForm() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    const onTitleChange = (e) => setTitle(e.target.value);

    const onContentChange = (e) => setContent(e.target.value);

    const onSavedPost = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
        }
        setTitle("");
        setContent(""); 
    }

    
    return (
        <section>
            <h2>Add A New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    className="postTitle"
                    value={title}
                    onChange={onTitleChange}/>
                <label htmlFor="postContent">Post Content:</label>
                <textarea
                    id="postContent"
                    className="postContent"
                    value={content}
                    onChange={onContentChange}>
                </textarea>

                <button type="button" onClick={onSavedPost}>
                    Save Post
                </button>
            </form>
        </section>
    )
}