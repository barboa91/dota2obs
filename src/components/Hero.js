import React from 'react'
import { useState } from "react";
import handler from '../pages/api/data'

function Hero(){
    handler();

    return(
    <div className='goodguys'>
    <div className='hero'> LION
      <div className='hero_portrait'> PICTURE BOX
        <div className='item1'>ITEM 1</div>
        <div className='item2'>ITEM 1</div>
        <div className='item3'>ITEM 1</div>
        <div className='item4'>ITEM 1</div>
        <div className='item5'>ITEM 1</div>
        <div className='item6'>ITEM 1</div>
        <div className='neutral_item'>Nuetral</div>
        <div className='bpitem1'>BP ITEM 1</div>
        <div className='bpitem2'>BP ITEM 2</div>
        <div className='bpitem3'>BP ITEM 3</div>
      </div>
    </div>
  </div>
    )
}

export default Hero