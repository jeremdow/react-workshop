import React, { useState, useReducer } from 'react'
import { FaSignInAlt, FaExclamationCircle } from 'react-icons/fa'

import Heading from 'YesterTech/Heading'
import Notice from 'YesterTech/Notice'
import Centered from 'YesterTech/Centered'
import api from 'YesterTech/api'

let initialState = {
  count: 0,
  user: {},
}
let actions = [{ type: 'ADD', by: 2 }, { type: 'MINUS', by: 4 }]
function reducer(state, action) {
  if (action.type === 'ADD') {
  }
}

let array = [1, 2, 3, 4, 5]
let add = (x, y) => x + y
console.log(array.reduce(add))

// 1 + 0 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

function useReducerWithMiddleware(state, action, middleWare) {}

function LoginForm({ onAuthenticated }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      console.log(state)
      switch (action.type) {
        case 'LOGGING_IN':
          return { ...state, loading: true }
        case 'LOGIN_SUCCESS':
          return {
            ...state,
            user: action.user,
            loading: false,
          }
        case 'LOGIN_ERROR':
          return {
            ...state,
            error: action.error,
            loading: false,
          }
        case 'CHANGE_FIELD':
          return {
            ...state,
            [action.name]: action.value,
          }
        default:
          return state
      }
    },
    {
      username: '',
      password: '',
      error: null,
      loading: false,
      showPassword: false,
      user: null,
    }
  )
  let { username, password, error, loading, showPassword, user } = state

  function handleLogin(event) {
    event.preventDefault()
    dispatch('LOGGING_IN')
    api.auth
      .login(username, password)
      .then(user => {
        if (typeof onAuthenticated === 'function') {
          onAuthenticated(user)
        }
      })
      .catch(error => {
        dispatch('ERROR')
      })
  }

  function changeField(e) {
    dispatch({
      type: 'CHANGE_FIELD',
      name: e.target.name,
      value: e.target.type !== 'checkbox' ? e.target.value : e.target.checked,
    })
  }

  return (
    <Centered className="spacing">
      <Heading>Login</Heading>
      <form onSubmit={handleLogin} className="spacing">
        {error && (
          <Notice type="error">
            <FaExclamationCircle />
            <span>{error}</span>
          </Notice>
        )}

        <div className="form-field">
          <input
            name="username"
            aria-label="Username"
            onChange={changeField}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="form-field">
          <input
            name="password"
            aria-label="Password"
            onChange={changeField}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <label>
            <input
              name="showPassword"
              onChange={changeField}
              defaultChecked={showPassword}
              className="passwordCheckbox"
              type="checkbox"
            />{' '}
            show password
          </label>
        </div>

        <footer>
          <button type="submit" className="button">
            {!loading ? (
              <>
                <FaSignInAlt /> <span>Login</span>
              </>
            ) : (
              <span>Loading ...</span>
            )}
          </button>
        </footer>
      </form>
    </Centered>
  )
}

export default LoginForm
