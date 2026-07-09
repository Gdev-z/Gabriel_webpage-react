/* ============================================
   useClock — Relógio live (GMT+1) usado na
   navegação e no footer. Atualiza a cada segundo.
   ============================================ */

import { useEffect, useState } from 'react'

export function useClock(timeZone = 'Europe/Budapest', locale = 'en-GB') {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    function update() {
      const now = new Date()
      setTime(
        now.toLocaleTimeString(locale, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone,
        }),
      )
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [timeZone, locale])

  return time
}
