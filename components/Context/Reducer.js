export const authReducer = (state ,action) => {
  switch(action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'HANDLE_ERRORS':
      return {...state, errors: action.payload}
  }
}
