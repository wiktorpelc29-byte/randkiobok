"use client"

import { useEffect, useState } from "react"

export function OnlineCounter() {
  const [count, setCount] = useState(1420)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3
        const next = prev + delta
        return next < 1380 ? 1392 : next > 1480 ? 1465 : next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center text-sm text-muted-foreground">
      <span className="text-center">
        <span className="relative mr-2 inline-flex h-2.5 w-2.5 translate-y-px align-middle">
          <span className="animate-dot-ping absolute inline-flex h-full w-full rounded-full bg-success" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
        </span>
        W Twojej okolicy:{" "}
        <span className="inline-block text-right font-semibold tabular-nums text-foreground">
          {count.toLocaleString("pl-PL")}
        </span>{" "}
        kobiet online
      </span>
    </div>
  )
}
