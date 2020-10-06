import React from "react"
import styled from "styled-components"

import { CircularProgress } from "@material-ui/core"
const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
`

const BackgroundCircle = styled(CircularProgress)`
  position: absolute;
  top: 0;
  left: 0;
  color: #1a237e;
`

const ValueCircle = styled(CircularProgress)`
  position: absolute;
  top: 0;
  left: 0;
  color: #4fc3f7;
`

const CircleTimer = ({ progress }) => (
  <Container>
    <BackgroundCircle size={300} variant="static" value={100} />
    <ValueCircle size={300} variant="static" value={progress} />
  </Container>
)

export default CircleTimer
