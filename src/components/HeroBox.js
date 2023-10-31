import heroes from '../app/heroinfo.json';
import React from 'react'
import { useState } from "react";
import { Combobox } from '@headlessui/react';
let heroes_list = new Array;

for (let i = 0; i < heroes.data.constants.heroes.length ;i++){
  heroes_list.push(heroes.data.constants.heroes[i].displayName);
}

function Herobox(){
  const [selectedHero, setSelectedHero] = useState(heroes_list[0]);
  const [query,setQuery] = useState('')

  const filteredHeros =  query === '' ? heroes_list : heroes_list.filter((hero)=>{
    return hero.toLowerCase().includes(query.toLowerCase())
  })


  return (
    <Combobox value = {selectedHero} onChange={setSelectedHero}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)}/>
        <Combobox.Options>
            {filteredHeros.map((hero)=>(
                <Combobox.Option key={hero} value={hero}>
                    {({active, selected})=>(
                        <li
                            className ={`${ active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                        </li>
                    )}
                    {hero}
                </Combobox.Option>
            ))}
        </Combobox.Options>
    </Combobox>
  )

}
export default Herobox;
