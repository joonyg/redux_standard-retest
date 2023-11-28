import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { delTodo } from '../redux/modules/todomodule'

function Detail() {
  const getTodo = useSelector(state => state.todomd)
  const { id } = useParams()
  const detailtodo = getTodo.find(todo => todo.id === parseInt(id))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const deleteBt = id => {
    dispatch(delTodo(id))
    navigate('/')
  }
  return (
    <div>
      {detailtodo && (
        <div key={detailtodo.id}>
          <p>{detailtodo.title}</p>
          <p>{detailtodo.contents}</p>
          <button onClick={() => deleteBt(detailtodo.id)}>삭제</button>
        </div>
      )}
    </div>
  )
}

export default Detail
