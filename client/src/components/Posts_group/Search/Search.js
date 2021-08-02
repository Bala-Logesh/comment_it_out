import { useState } from 'react'
import Posts from '../Posts/Posts'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'

const Search = () => {
    const [tags, setTags] = useState('')

    const handleSearch = e => {
        e.preventDefault()
        console.log(tags);

        setTags('')
    }
 
    return (
        <div className='Search flex'>
            <div className="Search__filter flex">
                <form onSubmit={ handleSearch } autoComplete='off' className='form flex'>
                    <input type="text" name='tags' placeholder='Enter the Hashtag to search' value={tags} onChange={e => setTags(e.target.value)} />
                    <button type="submit"><SearchIcon /></button>
                </form>
            </div>
            <div className='Search__results flex'>
                <Posts />
            </div>
        </div>
    )
}

export default Search
