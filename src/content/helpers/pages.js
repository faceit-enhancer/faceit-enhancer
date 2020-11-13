/* eslint-disable import/prefer-default-export */
import { getCurrentPath } from './location'

export const isRoomOverview = path =>
  /room\/.+-.+-.+-.+$/.test(path || getCurrentPath())

export const isPlayerProfileStats = path =>
  /players\/.+\/stats\//.test(path || getCurrentPath())

export const isPlayerProfile = path =>
  /players\/.*$/.test(path || getCurrentPath())

export const isPlayerFriendList = path =>
  /players\/.*friends$/.test(path || getCurrentPath())
