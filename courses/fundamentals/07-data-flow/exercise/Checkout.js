import React, { useState, useReducer } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory
} from 'react-router-dom'
import Centered from 'YesterTech/Centered'

// To run the final solution: Comment this in and the rest out
// import Checkout from './Checkout.final'
// export default Checkout

// Route Targets
import ViewCart from 'YesterTech/ViewCart'
import CheckoutBilling from './CheckoutBilling'
import CheckoutReview from 'YesterTech/CheckoutReview'

function Checkout() {
  const match = useRouteMatch()
  const history = useHistory()

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SUBMIT_BILLING': {
          const { sameAsBilling, fields } = action
          return { ...state, sameAsBilling, fields }
        }
        default:
          return state
      }
    },
    {
      sameAsBilling: false,
      fields: {}
    }
  )

  function handleBillingSubmit(sameAsBilling, fields) {
    dispatch({ type: 'SUBMIT_BILLING', sameAsBilling, fields })
    history.push(`${match.path}/review`)
  }

  return (
    <Centered>
      <Switch>
        <Route path={`${match.path}/cart`} exact>
          <ViewCart />
        </Route>
        <Route path={`${match.path}/billing`}>
          <CheckoutBilling onSubmit={handleBillingSubmit} />
        </Route>

        {/*
          Hint: We shouldn't be able to visit this route unless we have
          values inside of our state for `fields`. See the README
        */}
        {state.fields && (
          <Route path={`${match.path}/review`}>
            {/* The README also tells you what props you need to pass into CheckoutReview */}
            <CheckoutReview
              sameAsBilling={state.sameAsBilling}
              fields={state.fields}
            />
          </Route>
        )}

        <Redirect to={`${match.path}/cart`} />
      </Switch>
    </Centered>
  )
}

export default Checkout
