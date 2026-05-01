import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NTFY_TOPIC = 'catwork-visits'
const NTFY_URL = `https://ntfy.sh/${NTFY_TOPIC}`

/**
 * Sends a notification to ntfy.sh on every page view.
 * Fire-and-forget — errors are silently ignored so they
 * never affect the user experience.
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
      headers: {
        Title: '🐱 Visita en Catwork',
        Tags: 'cat,eyes',
      },
      body: `Alguien visitó ${page} — ${timestamp}`,
    }).catch(() => {
      // Silently ignore — ntfy notifications should never break the site
    })
  }, [location.pathname])
}
