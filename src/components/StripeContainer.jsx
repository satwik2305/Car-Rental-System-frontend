import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripePay from './StripePay'

const stripePromise = loadStripe(
  'pk_test_51OA9JTSApCuYrkQBkLjV78aF05WPBdA5ieSXHWre8UsK0OPEUxbqDaEGF4HYAqz0YbKLPesSCf795QqKStbhBhXQ00gi38Tkjs'
)

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripePay />
    </Elements>
  )
}

export default StripeContainer
