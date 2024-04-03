import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { useGetSearchResults } from '@/hooks/useGetSearchResults'
import { useState } from 'react'


export const SearchBar = ({ }) => {
  const [searchString, setSearchString] = useState("")
  const { refetch } = useGetSearchResults({ searchString, suburb: "Richmond", state: 'Victoria', liveLocation: "false", ignoreLiveLocation: 'false' })
  return (<form className="w-full" onSubmit={(e) => {
    e.preventDefault()
    refetch()
  }}>
    <div className='relative'>
      <input onChange={(e) => setSearchString(e.target.value)} value={searchString} className='bg-bg-dark-grey w-full h-12 rounded-sm p-4' placeholder='What do you feel like eating?' type='text' />
      <div className='absolute right-0 top-0 bottom-0 flex items-center' >
        <IconButton type='submit'><SearchIcon className='text-primary' /></IconButton>
      </div>
    </div>
  </form >
  )
}  
