import { useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from "easy-peasy";

const EditPost = () => {
    const { id } = useParams();
    const getPostById = useStoreState((state) => state.getPostById);
    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);
    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);
    const post = getPostById(id);
    const navigate = useNavigate();

    const handleEdit = (id) =>{
        const datetime = format(new Date(),'MMMM dd,yyyy pp');
        const updatedPost = {id, title:editTitle, datetime, body:editBody};
        editPost(updatedPost);
        navigate(`/post/${id}`);
    }

    useEffect(() => {
        //doesn't need in this case, but it's no harm to do.
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }        
    }, [post, setEditTitle, setEditBody]);

    return (
        <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id='postTitle'
                            type='text'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        ></input>
                        <label htmlFor="postBody">Body:</label>
                        <textarea
                            id='postBody'
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        ></textarea>
                        <button type="button" onClick={()=>handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                    <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}
export default EditPost;