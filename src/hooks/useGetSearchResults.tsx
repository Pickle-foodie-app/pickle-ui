import { useQuery } from "@tanstack/react-query"

type Params = {
  searchString: string,
  suburb: string,
  state: string,
  liveLocation: 'true' | 'false',
  ignoreLiveLocation: 'true' | 'false'
}
export const useGetSearchResults = ({ searchString, suburb, state, liveLocation, ignoreLiveLocation }: Params) => {

  const fetchSearchResults = async () => await fetch('http://127.0.0.1:8000/search-location-type?' + new URLSearchParams({ query: searchString, suburb, state, live_location: liveLocation, ignore_liveloc: ignoreLiveLocation }))
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ['results'],
    queryFn: async () => {
      const response = await fetchSearchResults()
      if (!response.ok) {
        throw new Error("There was an error from the network")
      }
      return response.json()
    },
    enabled: false
  })
  return { isPending, isError, data, error, refetch }
}
