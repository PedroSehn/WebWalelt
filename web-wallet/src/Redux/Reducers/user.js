// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
    email: '',
    userName: '',
    logado: false,
  };
  
  function user(state = INITIAL_STATE, action) {
    switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_LOGGED':
      return { ...state, logado: true };
    default:
      return state;
    }
  }
  
  export default user;