import './Comment.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Comment = () => {
    return (
        <div className='Comment flex'>
            <div className="flex">
                <h5>Bala logesh</h5>
                <h5><EditIcon /></h5>
                <h5><DeleteIcon /></h5>
            </div>
            <p>Lorem ipsum dolor sit amet cons ectetur adipisicing elit</p>
        </div>
    )
}

export default Comment
