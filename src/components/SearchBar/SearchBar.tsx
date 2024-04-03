import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export const SearchBar = ({ }) => {
  return <form className="w-full">
    <div className='relative'>
      <input className='bg-bg-dark-grey w-full h-12 rounded-sm p-4' placeholder='What do you feel like eating?' type='text' />
      <div className='absolute right-0 top-0 bottom-0 flex items-center' >
        <IconButton ><SearchIcon className='text-primary' /></IconButton>
      </div>
    </div>
  </form >

}  
