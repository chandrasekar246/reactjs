import React from 'react'

export const LoadingH4 = ({message}) => <h4>{message}</h4>; // destructuring message from props
export const LoadingH3 = (props) => <h3>{props.message}</h3>;
export const LoadingH2 = () => <h2>Loading H2...</h2>;