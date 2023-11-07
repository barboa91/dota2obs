
'use client';
import React, { useEffect } from 'react';
import { fetchEventSource } from "@microsoft/fetch-event-source";


const serverBaseURL = "http://localhost:3001/";


const SSEComponent = () => {
  const [data, setData] = React.useState(null);
  

  useEffect(() => {
    // Define a handler for the message event
    
    // setData(get_dota_data())
    const fetchData = async () => {
      await fetchEventSource(`${serverBaseURL}data`, {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
        },
        onopen(res) {
          if (res.ok && res.status === 200) {
            console.log("Connection made ", res);

          } else if (
            res.status >= 400 &&
            res.status < 500 &&
            res.status !== 429
          ) {
            console.log("Client side error ", res);
          }
        },
        onmessage(event) {

          const parsedData = JSON.parse(event.data);
          // setData((data) => [...data, parsedData]);  
          console.log(event.data);

          
        },
        onclose() {
          console.log("Connection closed by the server");
        },
        onerror(err) {
          console.log("There was an error from server", err);
        },
      });
    };
    fetchData();
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