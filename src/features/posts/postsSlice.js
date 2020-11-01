import {createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

const initialState = [
    { id: '1', title: 'How Does React Tell a Class from a Function?', content: `We just saw that the action creators from createSlice normally expect one argument, which becomes action.payload. This simplifies the most common usage pattern, but sometimes we need to do more work to prepare the contents of an action object. In the case of our postAdded action, we need to generate a unique ID for the new post, and we also need to make sure that the payload is an object that looks like {id, title, content}.

    Right now, we're generating the ID and creating the payload object in our React component, and passing the payload object into postAdded. But, what if we needed to dispatch the same action from different components, or the logic for preparing the payload is complicated? We'd have to duplicate that logic every time we wanted to dispatch the action, and we're forcing the component to know exactly what the payload for this action should look like.` },
    { id: '2', title: 'More Post Features', content: `At this point, we can create and edit posts. Let's add some additional logic to make our posts feed more useful.

    Storing Dates for Posts#
    Social media feeds are typically sorted by when the post was created, and show us the post creation time as a relative description like "5 hours ago". In order to do that, we need to start tracking a date field for our post entries.
    
    Like with the post.user field, we'll update our postAdded prepare callback to make sure that post.date is always included when the action is dispatched. However, it's not another parameter that will be passed in. We want to always use the exact timestamp from when the action is dispatched, so we'll let the prepare callback handle that itself.
    
    CAUTION
    Redux actions and state should only contain plain JS values like objects, arrays, and primitives. Don't put class instances, functions, or other non-serializable values into Redux!.
    
    Since we can't just put a Date class instance into the Redux store, we'll track the post.date value as a timestamp string:` }
]

export const selectPostById =   postId  => state => state.posts.find(post => post.id === postId)

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers:{
            postAdded: (state, action) => {
                state.push(action.payload)
            },
            postUpdated: (state, action) => {
                const {id,title,content} = action.payload;
                const updatingPost = state.find(post => post.id===id);
                updatingPost.title = title;
                updatingPost.content = content;
            }
        }
    }
);

//export the action creators
export const {postAdded, postUpdated} = postsSlice.actions

export default postsSlice.reducer;