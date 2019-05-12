import {fillDateNumber} from 'lovue/dist/utils.esm'

export function secondsToReadable(seconds) {
  seconds = Math.trunc(seconds)
  let hours = Math.trunc(seconds / 3600)
  seconds = seconds % 3600
  let minutes = Math.trunc(seconds / 60)
  seconds = seconds % 60

  return (hours > 0 ? [hours, minutes, seconds] : [minutes, seconds]).map(fillDateNumber).join(':')
}
