import React from "react"
import styled from "styled-components"

import { Button, Paper, Typography } from "@material-ui/core"

import CircleTimer from "../components/CircleTimer"
import useTimer from "../hooks/useTimer"

const Container = styled(Paper)`
  text-align: center;
  padding: 40px;
  margin: 40px;
`

const Home = () => {
  const START_TIME = 5
  const [start, setStart] = React.useState(false)

  const startExercise = () => setStart(true)
  const stopExercise = () => setStart(false)

  const time = useTimer(start, START_TIME, stopExercise)

  const progress = (time / START_TIME) * 100

  return (
    <Container variant="outlined">
      <CircleTimer progress={progress} />
      <br />
      <Typography variant="h6">Time left: {Math.ceil(time)}</Typography>
      <br />
      <Button disabled={time !== START_TIME} onClick={startExercise}>
        Start
      </Button>
    </Container>
  )
}

export default Home
