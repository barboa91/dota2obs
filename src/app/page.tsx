"use client"
import SSEComponent from '@/pages/api/data.js';
import Hero from '../components/Hero.js'

// var source  = new EventSource('http://192.168.1.2:3001/fart')

// source.addEventListener('message', (event) => {
//   // Log the data from the event
//   console.log(event.data);
// });



export default function Home() {
  return (
    <main className="main">
      <div>Alex Barbosa</div>
      <Hero></Hero>
      <SSEComponent></SSEComponent>

      {/* <HeroBox></HeroBox> */}
    </main>
  )
}
