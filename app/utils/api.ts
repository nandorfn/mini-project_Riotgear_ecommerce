import axios from "axios";


export const postData = async (query: string, data: any) => {
  return axios.post(query, data)
}

export const deleteData = async (query: string) => {
  return axios.delete(query)
}