import React from 'react'
import './App.css'
import Items from './components/Items'
import Title_Bar from './components/Title_Bar'

import Shoe from './assets/Shoe.png'

const App = () => {
  return (
    <>
      <Title_Bar /> 
      <Items 
        proImgUrl={Shoe} 
        title="Wireless Headphones" 
        vertical="Clothing/Topwear/Shirt" 
        sku="423429" 
        createdOn="12/12/22" 
        modifiedOn="21/21/22" 
      />
    </>
  )
}

export default App