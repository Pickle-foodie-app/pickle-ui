'use client'

import { useGetSearchResults } from "@/hooks/useGetSearchResults"

export default function Results({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || ''

  const { isPending, isError, data, error } = useGetSearchResults({ query })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <p className='text-white'>{query}</p>
      {isPending && <p>Loading...</p>}
      {isError && <p>error</p>}
      {data && <p>data</p>}
    </main>
  )
}
