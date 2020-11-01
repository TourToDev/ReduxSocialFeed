import React,{useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated } from "./postsSlice";

const selectPostById =   postId  => state => state.posts.find(post => post.id === postId)

export default function EditPostPage({match}) {
    const dispatch = useDispatch()

    const {postId} = match.params;
    
    const post = useSelector( selectPostById(postId) )

    
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    
    const onTitleChange = (e) => setTitle(e.target.value);

    const onContentChange = (e) => setContent(e.target.value);

    const history = useHistory()

    const onSaveChange = () => {
        dispatch(postUpdated(
            {
                id:postId,
                title,
                content
            }
        ))
        history.push(`/posts/${postId}`)
    }

    return (
        <section>
            <form>
                <input 
                    placeholder="What's In Your Mind?"
                    type="text"
                    value={title}
                    id="postTitle"
                    class="postTitle"
                    onChange={onTitleChange}
                    />
                <textarea 
                    value={content}
                    id="postContent"
                    class="postContent"
                    onChange={onContentChange}
                    style={ {height:"500px"} }
                    />

                <button type="button" onClick={onSaveChange}>Save Changes</button>
            </form>
        </section>
    )
}