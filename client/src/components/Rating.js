import React from 'react'
import { Progress } from 'semantic-ui-react'

const Rating = (props) => <Progress value={props.votes.toLocaleString('en-US', { maximumFractionDigits: 0 })} total={props.max.toLocaleString('en-US', { maximumFractionDigits: 0 })} progress={props.label} color='green'>User Score</Progress>

export default Rating