"use client"

import type { ReactNode } from "react"

const TARGET_URL = "https://radarkobiet.pl/link/3107/84129472"

type ExternalCtaProps = {
  children: ReactNode
  className?: string
  "aria-label"?: string
}

/**
 * Renders a link that tries to break out of in-app browsers (Facebook,
 * Instagram, TikTok, Messenger webviews) and open in the real system browser
 * (e.g. Chrome on Android) instead of the embedded webview.
 */
export function ExternalCta({ children, className, "aria-label": ariaLabel }: ExternalCtaProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator === "undefined") return

    const ua = navigator.userAgent || ""
    const isAndroid = /Android/i.test(ua)

    // Detect common in-app browser webviews
    const isInApp = /FBAN|FBAV|Instagram|FB_IAB|Messenger|Line|TikTok|musical_ly|Snapchat|Twitter|Pinterest|WhatsApp/i.test(
      ua,
    )

    if (isAndroid && isInApp) {
      // Force open in Chrome via Android intent scheme, with a fallback to the normal URL
      e.preventDefault()
      const withoutScheme = TARGET_URL.replace(/^https?:\/\//, "")
      const intentUrl =
        `intent://${withoutScheme}#Intent;scheme=https;package=com.android.chrome;` +
        `S.browser_fallback_url=${encodeURIComponent(TARGET_URL)};end`
      window.location.href = intentUrl
    }
    // iOS in-app webviews cannot be reliably forced out, so we let the
    // default target="_blank" behavior handle it.
  }

  return (
    <a
      href={TARGET_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
