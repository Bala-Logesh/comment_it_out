import Posts from './Posts'
import '../css/Search.css'
import { useState } from 'react'

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
                <form onSubmit={ handleSearch } autoComplete='off'>
                    <input type="text" name='tags' placeholder='Enter the tag and press Enter to search' value={tags} onChange={e => setTags(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className='Search__results flex'>
                <Posts />
            </div>
        </div>
    )
}

export default Search
