import { useEffect, useState } from "react"
import OceanScene from "@/components/ocean/ocean-scene"
import PasswordPrompt from "@/components/password-prompt"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { decodeMessage } from "@/crypto/message"
import { getMessageParam } from "./utils/url"

export default function Home() {

  const encoded = getMessageParam()
  const hasMessage = !!encoded
  const [content, setContent] = useState<string | undefined>()

  async function handlePassword(password: string) {
    try {

      const data = await decodeMessage(encoded!, password)

      setContent(data.c)

    } catch {
      alert("Wrong password")
    }
  }

  useEffect(() => {
    if (!encoded) return

    decodeMessage(encoded)
      .then(data => {
        setContent(data.c)
      })
      .catch(() => {
        // message có password
      })

  }, [encoded])

  // ===== UI khi không có message =====
  if (!hasMessage) {
    return (
      <div className="flex items-center justify-center h-screen bg-linear-to-b from-sky-200 via-blue-300 to-blue-600">

        <Card className="w-[420px]">

          <CardHeader>
            <CardTitle className="text-center text-xl">
              🌊 Message in a Bottle
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-center">

            <p className="text-muted-foreground">
              Open a secret message sent in a bottle.
              If you received a link, paste it in the address bar.
            </p>

            <Button
              onClick={() => window.location.href = "/create"}
              className="w-full cursor-pointer"
            >
              Create a Message
            </Button>

          </CardContent>

        </Card>

      </div>
    )
  }

  return (
    <div className="relative h-screen w-screen">

      <OceanScene message={content} />

      {!content && hasMessage && (
        <PasswordPrompt onSubmit={handlePassword} />
      )}

    </div>
  )
}