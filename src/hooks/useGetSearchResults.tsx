import { useQuery } from "@tanstack/react-query"

type Params = {
  query: string,
  // suburb: string,
  // state: string,
  // liveLocation: 'true' | 'false',
  // ignoreLiveLocation: 'true' | 'false'
}
export const useGetSearchResults = ({ query, }: Params) => {

  const fetchSearchResults = async () => await fetch('http://127.0.0.1:8000/search-location-type?' + new URLSearchParams({ query, suburb: 'Richmond', state: 'Victoria', live_location: 'false', ignore_liveloc: 'false' }))


  console.log('here')

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['results'],
    queryFn: async () => {
      const response = await fetchSearchResults()
      if (!response.ok) {
        throw new Error("There was an error from the network")
      }
      return response.json()
    },
  })
  return { isPending, isError, data, error, }
}
