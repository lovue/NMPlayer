type EmptyObject = {
  [K in any]: never
}

function fillDateNumber (value: number) {
  return value < 10 ? `0${value}` : `${value}`
}

export function secondsToReadable (seconds: number) {
  seconds = Math.trunc(seconds)
  let hours = Math.trunc(seconds / 3600)
  seconds = seconds % 3600
  let minutes = Math.trunc(seconds / 60)
  seconds = seconds % 60

  return (hours > 0 ? [hours, minutes, seconds] : [minutes, seconds]).map(fillDateNumber).join(':')
}

export function isEmptyObject (obj: EmptyObject) {
  return !Object.keys(obj).length
}
