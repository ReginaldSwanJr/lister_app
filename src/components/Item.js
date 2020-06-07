import React from 'react'

const Item = (props) => (
    <li>
        <ul>
            <li>item</li>
            <li>{props.username}</li>
            <li>{props.password}</li>
        </ul>
    </li>
);

export default Item