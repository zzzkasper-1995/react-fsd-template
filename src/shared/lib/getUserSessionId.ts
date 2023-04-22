import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'

const USER_SESSION_ID_COOKIE = 'user_session_id'

export const getUserSessionId = () => {
  let sessionId = Cookies.get(USER_SESSION_ID_COOKIE)
  if (!sessionId) {
    sessionId = String(uuidv4())
    Cookies.set(USER_SESSION_ID_COOKIE, sessionId)
  }

  return sessionId
}
