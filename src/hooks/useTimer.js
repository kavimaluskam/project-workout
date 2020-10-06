import { useState, useEffect } from "react"
import useSound from "use-sound"

import three from "../../static/voice/three.mp3"
import two from "../../static/voice/two.mp3"
import one from "../../static/voice/one.mp3"
import whistle from "../../static/voice/whistle.mp3"

const useTimer = (start, startTime, cb) => {
  const [playThree] = useSound(three)
  const [playTwo] = useSound(two)
  const [playOne] = useSound(one)
  const [playWhistle] = useSound(whistle)

  const [time, setTime] = useState(startTime)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (start) {
        setTime(Math.round((time - 0.1) * 10) / 10)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [start, time])

  /**
   * If `cb` is in dependency, playThree / playTwo / playOne will be executed
   * for more than once ...
   *
   *  */
  useEffect(() => {
    if (time === 3) {
      playThree()
    }

    if (time === 2) {
      playTwo()
    }

    if (time === 1) {
      playOne()
    }

    if (time <= 0) {
      cb()
      setTime(startTime)
      playWhistle()
    }
  }, [time, playOne, playTwo, playThree, playWhistle, startTime])

  return time
}

export default useTimer
