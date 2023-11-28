import React, { useState } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { addtodo, switchTodo, delTodo } from '../redux/modules/todomodule'

function Home() {
  const getTodo = useSelector(state => state.todomd)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [title, settitle] = useState('')
  const [context, setcontext] = useState('')

  const inputTitle = event => {
    settitle(event.target.value)
  }
  const inputContext = event => {
    setcontext(event.target.value)
  }
  const newgetTodo = () => {
    dispatch(
      addtodo({
        id: getTodo.length + 1,
        title: title,
        contents: context,
      })
    )
    settitle('')
    setcontext('')
  }
  const switchBt = id => {
    dispatch(switchTodo(id))
  }
  const deleteBt = id => {
    dispatch(delTodo(id))
  }

  return (
    <>
      <header>
        제목 :{' '}
        <input
          value={title}
          onChange={event => {
            inputTitle(event)
          }}
        />
        내용 :{' '}
        <input
          value={context}
          onChange={event => {
            inputContext(event)
          }}
        />
        <button onClick={newgetTodo}>작성</button>
      </header>
      <ScTodoBox>
        {getTodo
          .filter(todo => todo.isDone === false)
          .map(item => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.contents}</p>
              <button onClick={() => switchBt(item.id)}>완료</button>
              <button onClick={() => deleteBt(item.id)}>삭제</button>
              <button onClick={() => navigate(`/Detail/${item.id}`)}>
                상세페이지
              </button>
            </div>
          ))}
      </ScTodoBox>
      <div>완료 된 투두----------------------------------------</div>
      {getTodo
        .filter(todo => todo.isDone === true)
        .map(item => (
          <ScTodoSBox key={item.id}>
            <p>{item.title}</p>
            <p>{item.contents}</p>
            <button onClick={() => switchBt(item.id)}>취소</button>
            <button onClick={() => deleteBt(item.id)}>삭제</button>
            <button onClick={() => navigate(`/Detail/${item.id}`)}>
              상세페이지
            </button>
          </ScTodoSBox>
        ))}
    </>
  )
}
const ScTodoBox = styled.div`
  background-color: skyblue;
`
const ScTodoSBox = styled.div`
  background-color: gray;
`
export default Home
