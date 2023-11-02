// pages/api/data.js
import axios from 'axios'


async function fetchAllReviews() {
  try{
    const res = await axios.get('http://localhost:3001/fart')
    
    const data = res.data

    console.log(data)
    return res
    }
    catch(error){
      console.error(error)
    }
  }

export default function handler(req, res) {
  fetchAllReviews()
  console.log("in handler")
  }
  