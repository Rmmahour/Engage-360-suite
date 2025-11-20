"use client"

import { useEffect } from "react"

export function ContactForm() {
  useEffect(() => {
    // Load HubSpot form script only once
    const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/v2.js"]')

    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://js.hsforms.net/forms/embed/v2.js"
      script.async = true
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na2",
            portalId: "242830238",
            formId: "5679e06f-fd49-4518-809a-b51b29ffd64f",
            target: "#hubspot-form"
          })
        }
      }
      document.body.appendChild(script)
    } else {
      // Script already loaded → directly create form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "242830238",
          formId: "5679e06f-fd49-4518-809a-b51b29ffd64f",
          target: "#hubspot-form"
        })
      }
    }
  }, [])

  return (

      <>{/* HubSpot form container */}
      <div id="hubspot-form"></div></>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    hbspt: any
  }
}
