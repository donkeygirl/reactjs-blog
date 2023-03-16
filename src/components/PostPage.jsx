import { useParams, useNavigate, Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const getPostById = useStoreState((state) => state.getPostById);
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const post = getPostById(id);
  const navigate = useNavigate();
  
  const handleDelete = (id) =>{
    deletePost(id);
    navigate('/');
  }

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && <>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <button onClick={()=>handleDelete(post.id)} className='deleteButton'>Delete Post</button>
          <Link to={`edit`}><button className='editButton'>Edit Post</button></Link>          
        </>}
        {!post && 
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to='/'>Visit Our Homepage</Link>
            </p>
          </>
        }
      </article>
    </main>
  )
}
export default PostPage;