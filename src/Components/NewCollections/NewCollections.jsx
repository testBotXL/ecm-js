import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTiONS</h1>
        <hr />
        <div className="collections">
            {newCollection.map((item, i) => {
                return <Item key = {i} id = {item.id} name ={item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections