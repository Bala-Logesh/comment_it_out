import { Link } from 'react-router-dom';
import './Post.css'
import img from '../../../images/img.jpg'
import avatar from '../../../images/avatar.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Comment from './Comment/Comment';
import CommentForm from './Comment/CommentForm/CommentForm';
import { useState } from 'react';

const Post = () => {
    const visible = false
    const liked = true
    const [openComments, setOpenComments] = useState(false)

    return (
        <div className='Post flex'>
            <div className="Post__header flex">
                <h3 className='avatar flex'><img src={ avatar } alt='Avatar' /></h3>
                <div className="Post__header-title flex">
                    <h4 className='username'>BalaLogeshsadfsdfadfsfBalaLogeshsadfsdfadfsf</h4>
                    <h6 className='username'>BalaLogeshsadfsdfadfsfBalaLogeshsadfsdfadfsf</h6>
                </div>
                <Link to='/editPost/123' className='edit flex'><EditIcon /></Link>
            </div>
            <div className="Post__main flex">
                <img src={img} alt='Post'></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates possimus provident sed aliquam porro</p>
                <p className="hastag">#Hello #World #FavoriteBor</p>
            </div>
            <div className="Post__icons flex">
                <div className="icons flex liked">
                    { liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon /> }
                    16
                </div>
                <div className="icons flex" onClick={ () => setOpenComments(!openComments) }>
                    <CommentIcon />
                    16
                </div>
                <div className="icons">
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
                <div className="icons">
                    <DeleteIcon />
                </div>
            </div>
            <div className={openComments ? 'Post__comment flex' : 'Post__comment-hide'}>
                <Comment />
                <Comment />
                <CommentForm />
            </div>
        </div>
    )
}

export default Post