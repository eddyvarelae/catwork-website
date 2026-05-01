import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NTFY_TOPIC = 'catwork-visits'
const NTFY_URL = `https://ntfy.sh`

/**
 * Sends a notification to ntfy.sh on every page view.
 * Uses JSON body format to avoid CORS preflight issues
 * with custom headers in the browser.
 * Fire-and-forget — errors are logged but never affect UX.
 */
export function usePageViewNotify() {
  const location = useLocation()

  useEffect(() => {
    const page = location.pathname
    const timestamp = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Hermosillo',
    })

    fetch(NTFY_URL, {
      method: 'POST',
      body: JSON.stringify({
        topic: NTFY_TOPIC,
        title: 'Visita en Catwork',
        message: `Alguien visito ${page} - ${timestamp}`,
        tags: ['cat', 'eyes'],
      }),
    }).catch((err) => {
      console.warn('ntfy notification failed:', err)
    })
  }, [location.pathname])
}
