import React from 'react'

const Items = (props) => {
  return (
    <div className="items">
        <div id='imgTitle'>
            <img src={props.proImgUrl} alt="" />
            <li>{props.title}</li>
        </div>
        <li id='vertical'>{props.vertical}</li>
        <li id='sku'>{props.sku}</li>
        <li id='mfg'>{props.createdOn}</li>
        <li id='modi'>{props.modifiedOn}</li>
    </div>
  )
}

export default Items