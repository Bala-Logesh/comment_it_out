import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { likePost } from '../../../redux';
import './Post.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Comment from './Comment/Comment';
import CommentForm from './Comment/CommentForm/CommentForm';

const Post = ({ post, users }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const postUser = users?.find(user => user._id === post.user)

    const liked = post.likes.find(like => like === user._id)
    const [openComments, setOpenComments] = useState(false)

    return (
        <div className='Post flex'>
            <div className="Post__header flex">
                {
                    postUser && <h3 className='avatar flex'>{(postUser.profilePic !== '') ? <img src={postUser.profilePic} alt='Avatar' /> : postUser.displayName} </h3>
                }
                <div className="Post__header-title flex">
                    <h4 className='username'>{post?.title}</h4>
                    <h6 className='username'>{post?.subtitle}</h6>
                </div>
                {(post.user === user._id) && <Link to={`/editPost/${post._id}`} className='edit flex'><EditIcon /></Link> }
            </div>
            <div className="Post__main flex">
                {(post.image !== "") && <img src={post.image} alt='Post' />}
                <p>{post.body}</p>
                <p className="hastag">{
                    post?.tags.map(tag => `#${tag}`).join(' ')
                }</p>
            </div>
            <div className="Post__icons flex">
                <div className="icons flex liked" onClick={() => dispatch(likePost(post._id, user._id))}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                    { post.likes.length }
                </div>
                <div className="icons flex" onClick={() => setOpenComments(!openComments)}>
                    <CommentIcon />
                    {post.comments.length}
                </div>
                <div className="icons">
                    {post.status === 'public' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
                {(post.user === user._id) &&
                    <div className="icons">
                        <DeleteIcon />
                    </div>
                }
            </div>
            <div className={openComments ? 'Post__comment flex' : 'hidden'}>
                { post?.comments.map(comment => <Comment key={ comment._id } comment={ comment } users={ users } />) }
                <CommentForm />
            </div>
        </div>
    )
}

export default Post
