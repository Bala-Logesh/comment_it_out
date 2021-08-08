import { useState } from 'react'
import { useSelector } from 'react-redux';
import Posts from '../Posts/Posts'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'

const Search = () => {
    const { posts } = useSelector(state => state.post)

    const [tags, setTags] = useState('')
    const [found, setFound] = useState('')
    const [displayPosts, setDisplayPosts] = useState(null)

    const handleSearch = e => {
        e.preventDefault()
        setTags(tags.toLowerCase())

        if(tags !== '') {
            const filteredPosts = posts?.filter(post => {
                return (
                    (post.title.toLowerCase().search(tags) !== -1 ? true : false) || (post.tags.find(tag => tag.toLowerCase() === tags))
                )
            })

            setDisplayPosts(filteredPosts)
        }

        if (displayPosts?.length !== 0) {
            setFound(true)
        }
    }
 
    return (
        <div className='Search flex'>
            <div className="Search__filter flex">
                <form onSubmit={ handleSearch } autoComplete='off' className='form flex'>
                    <input type="text" name='tags' placeholder='Type something to search....' value={tags} onChange={e => setTags(e.target.value)} />
                    <button type="submit"><SearchIcon /></button>
                </form>
            </div>
            <div className='Search__results flex'>
                { tags === '' ? <h2>Search for the post by Title or Tags</h2> : 
                    (found ? <Posts filteredPosts = { displayPosts } onlyFiltered = { true } /> : <h2>No matching posts found</h2>)
                } 
            </div>
        </div>
    )
}

export default Search
