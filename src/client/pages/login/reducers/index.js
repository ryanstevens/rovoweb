
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'


const preloadedState = {
  email: 'email',
  password: 'password'
}


const loginReducer = function(state= preloadedState, action) {
  switch (action.type) {
    case 'change_email': {
      return Object.assign({}, state, {
        email: action.email
      })
    }
  }
  return state;
}

const navigationReducer = function(state={page: 'login'}, action) {
  return state;
}


export const rootReducer = combineReducers({
  login: loginReducer,
  form: formReducer,
  navigation: navigationReducer
})