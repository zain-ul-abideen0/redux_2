import React from 'react'
import { useDispatch } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { actionCreator } from './state/index'

const Shop = () => {
    const dispatch=useDispatch()


  return (
    <div>
    <h2>Invest in banknifty</h2>
    
    <button className='btn-primary mx-3' onClick={()=>dispatch(actionCreator.depositMoney(100))}>-</button>
    sell or buy
    <button className='btn-primary mx-3'onClick={()=>dispatch(actionCreator.withdrawMoney(10))}>+</button>
    

    </div>
  )
}

export default Shop