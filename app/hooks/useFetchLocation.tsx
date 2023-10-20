/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchLocation = (query: string) => {
  const initialState = {
    id: 0,
    name: 'Choose',
    iso2: '',
  };
  const [data, setData] = useState([initialState]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {
          query
        };

        const response = await axios.post('/api/countries', requestData);
        const responseData = response.data.data;

        setData([initialState, ...responseData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [query]);
  return data;
};

export default useFetchLocation;
