import React from 'react'
import Item from './Item'

const List = (props) => {
   
   return (
    <div>
        <ul>
            {props.itemList.map((item, index) => (
                <Item
                    key = {index + 100}
                    username = {item.username}
                    password = {item.password}
                />
            )) 
            }    
        </ul>
    </div>
)};

export default List