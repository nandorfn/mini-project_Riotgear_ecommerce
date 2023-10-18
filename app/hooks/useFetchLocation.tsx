import { useEffect, useState } from "react"
import axios from "axios";

const useFetchLocation = (query: string) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        query
      }
      await axios.post('/api/countries', data)
        .then((res) => {
          setData(res.data.data
          )
        })
    }
    fetchData();
  }, [query]);

  return data;
}

export default useFetchLocation;