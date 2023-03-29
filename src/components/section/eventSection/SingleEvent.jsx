import React from 'react'
import Button from '../../ui/button/Button'
import Icon from '../../ui/icon/Icon'

function SingleEvent({ item }) {
    // prideti icon componenta
    // sustilizuoti
  return (
    <li>
        <p>
            <Icon name={item.icon}/>
        </p>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Button>{item.action}</Button>

    </li>
  )
}

export default SingleEvent