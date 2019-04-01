


export const authReducer = (state ,action) => {
  switch(action.type) {
    case 'HANDLE_ERRORS':
      return {...state, errors: action.payload}
  }
}