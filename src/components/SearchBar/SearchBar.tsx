import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { useGetSearchResults } from '@/hooks/useGetSearchResults'
import { FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'


export const SearchBar = ({ }) => {
  const [query, setQuery] = useState("")
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: these could be better typed
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set('query', query)
    } else {
      params.delete('query')
    }
    replace(`/results?${params.toString()}`)
  }
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className='relative'>
        <input onChange={(e) => setQuery(e.target.value)} value={query} className='bg-bg-dark-grey w-full h-12 rounded-sm p-4' placeholder='What do you feel like eating?' type='text' />
        <div className='absolute right-0 top-0 bottom-0 flex items-center' >
          <IconButton type='submit'><SearchIcon className='text-primary' /></IconButton>
        </div>
      </div>
    </form >
  )
}  
