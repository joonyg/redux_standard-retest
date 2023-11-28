const ADD_TODO = 'todomodule/ADD_TODO'
const DELETE_TODO = 'todomodule/DELETE_TODO'
const SWITCH_TODO = 'todomodule/SWITCH_TODO'

export const addtodo = payload => ({
  type: ADD_TODO,
  payload: payload,
})

export const delTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
})

export const switchTodo = id => ({
  type: SWITCH_TODO,
  payload: { id },
})

const initialState = [
  {
    id: 1,
    title: '제목1',
    contents: '내용1',
    isDone: false,
  },
  {
    id: 2,
    title: '제목2',
    contents: '내용2',
    isDone: false,
  },
]

const todomd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false,
      }
      return [newTodo, ...state]
    case DELETE_TODO:
      const delid = action.payload.id
      const delbt = state.filter(item => item.id !== delid)
      return delbt
    case SWITCH_TODO:
      const todoswitch = action.payload.id
      return state.map(todo => {
        if (todo.id === todoswitch) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo
      })

    default:
      return state
  }
}

export default todomd
