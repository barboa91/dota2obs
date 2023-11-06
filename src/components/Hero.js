import React from 'react'
import { useState } from "react";
import handler from '../pages/api/data'
import '../app/style/hero.css'
function Hero(){
    handler();

    return(
    <div className='hero'>
      
      <div className='hero_portrait'> PICTURE BOX</div>
      <div className='items'>
        <div id='item1' className='item'>ITEM 1</div>
        <div id='item2'className='item'>ITEM 2</div>
        <div id='item3'className='item'>ITEM 3</div>
        <div id='item4'className='item'>ITEM 4</div>
        <div id='item5'className='item'>ITEM 5</div>
        <div id='item6'className='item'>ITEM 6</div>
        {/* <div id='neutral_item'className='item'>Nuetral</div> */}
        <div id='bpitem1'className='item'>BP ITEM 1</div>
        <div id='bpitem2'className='item'>BP ITEM 2</div>
        <div id='bpitem3'className='item'>BP ITEM 3</div>
      </div>
    </div>
    )
}

export default Hero