import axios from "axios"

export const postData =async (query: string, data: any) => {
  return axios.post(query, data)
}