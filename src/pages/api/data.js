// // pages/api/data.js
// import axios from 'axios'


// async function fetchAllReviews() {
//   try{
//     const res = await axios.get('http://192.168.1.2:3001/fart')
    
//     const data = res.data

//     console.log(data)
//     return res
//     }
//     catch(error){
//       console.error(error)
//     }
//   }

// export default function handler() {
//   fetchAllReviews()
//   }
  
'use client';
import React, { useEffect } from 'react';
import EventSource from 'eventsource';

async function get_dota_data(){
  const res = await fetch('http://192.168.1.2:3001/data2')
  console.log("RESOPONSE: " , res)

  if (!res.ok) {
    throw new Error(`Error! status: ${res.status}`);
  }
  return res.json()

}

// Define a custom component that listens to SSE events
const SSEComponent = () => {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    // Define a handler for the message event
    
    setData(get_dota_data())

    console.log(data)
    const eventSource = new EventSource('http://192.168.1.2:3001/data');
    eventSource.onmessage = (e) => {
      console.log(e)
      setData(JSON.parse(e.data));
    };

    // Define a handler for the error event
    eventSource.onerror = (e) => {
      console.log("error")
      console.error(e);
    };

    return () => {
      console.log(eventSource.url)
      eventSource.close();
    };
  }, []); 


  return (
    <div>
      {data ? (
        <p>Data from the server: {data.hello}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SSEComponent;