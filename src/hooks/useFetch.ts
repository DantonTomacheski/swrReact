import axios from "axios"
import useSWR from "swr"


function useFetch<Data = any, Error = any>(url: string) {
  const fetcher = (url: string) => axios.get(url).then(res => res.data).catch(err =>console.log(err))
  const { data, error } = useSWR<Data, Error>(url, fetcher)

  return { data, error }
}

export { useFetch }