"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type VoiceSupportProps = {
  onSpeechResult?: (text: string) => void
}

// Declare SpeechRecognition interface to avoid typescript errors
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
    SpeechSynthesisUtterance: any
    speechSynthesis: any
  }
  interface SpeechRecognition extends EventTarget {
    continuous: boolean
    interimResults: boolean
    lang: string
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null
    onend: ((this: SpeechRecognition, ev: Event) => any) | null
    start: () => void
    abort: () => void
  }

  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList
  }

  interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult
    length: number
    item(index: number): SpeechRecognitionResult
  }

  interface SpeechRecognitionResult {
    [index: number]: SpeechRecognitionAlternative
    length: number
    item(index: number): SpeechRecognitionAlternative
    isFinal: boolean
  }

  interface SpeechRecognitionAlternative {
    transcript: string
    confidence: number
  }

  interface SpeechRecognitionErrorEvent extends Event {
    error: string
  }
}

export function VoiceSupport({ onSpeechResult }: VoiceSupportProps) {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechRecognition, setSpeechRecognition] = useState<SpeechRecognition | null>(null)
  const { language } = useLanguage()
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true)

  // Map our language codes to BCP 47 language tags
  const languageMap: Record<string, string> = {
    en: "en-US",
    hi: "hi-IN",
    mr: "mr-IN",
    gu: "gu-IN",
    pa: "pa-IN",
    bn: "bn-IN",
  }

  // Welcome messages in different languages
  const welcomeMessages: Record<string, string> = {
    en: "Welcome to Agri-nova, your agricultural marketplace.",
    hi: "एग्री-नोवा में आपका स्वागत है, आपका कृषि बाज़ार।",
    mr: "अॅग्री-नोवा मध्ये आपले स्वागत आहे, आपली कृषी बाजारपेठ.",
    gu: "એગ્રી-નોવામાં આપનું સ્વાગત છે, તમારું કૃષિ બજાર.",
    pa: "ਐਗਰੀ-ਨੋਵਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ, ਤੁਹਾਡਾ ਖੇਤੀਬਾੜੀ ਮਾਰਕੀਟ।",
    bn: "অ্যাগ্রি-নোভায় আপনাকে স্বাগতম, আপনার কৃষি বাজার।",
  }

  const speakFeedback = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const message = "Thank you for your input."
      const utterance = new SpeechSynthesisUtterance(message)
      utterance.lang = languageMap[language] || "en-US"

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      window.speechSynthesis.cancel() // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance)
    }
  }

  const performSpeak = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const message = welcomeMessages[language] || welcomeMessages.en
      const utterance = new SpeechSynthesisUtterance(message)
      utterance.lang = languageMap[language] || "en-US"

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      window.speechSynthesis.cancel() // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance)
    }
  }

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = true
      recognition.lang = languageMap[language] || "en-US"

      recognition.onstart = () => {
        console.log("[v0] Listening started - awaiting voice input")
      }

      recognition.onresult = (event) => {
        // Only process final results
        if (event.results[event.results.length - 1].isFinal) {
          const transcript = event.results[event.results.length - 1][0].transcript
          console.log("[v0] Voice input received:", transcript)
          if (onSpeechResult) {
            onSpeechResult(transcript)
          }
          setIsListening(false)
        }
      }

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error)
        setIsListening(false)
      }

      recognition.onend = () => {
        console.log("[v0] Speech recognition ended")
        setIsListening(false)
        // Auto-play voice feedback after listening ends
        if (autoPlayEnabled) {
          setTimeout(() => {
            performSpeak()
          }, 300)
        }
      }

      setSpeechRecognition(recognition)
    }

    return () => {
      if (speechRecognition) {
        try {
          speechRecognition.abort()
        } catch (e) {
          console.error("[v0] Error aborting speech recognition:", e)
        }
      }
    }
  }, [onSpeechResult, autoPlayEnabled])

  useEffect(() => {
    // Update language when it changes
    if (speechRecognition) {
      speechRecognition.lang = languageMap[language] || "en-US"
    }
  }, [language, speechRecognition])

  const toggleListening = () => {
    if (!speechRecognition) return

    if (isListening) {
      try {
        speechRecognition.abort()
        setIsListening(false)
      } catch (error) {
        console.error("Error stopping speech recognition:", error)
        setIsListening(false)
      }
    } else {
      try {
        // Show listening state immediately when button is clicked
        setIsListening(true)
        console.log("[v0] Awaiting voice input...")
        speechRecognition.start()
      } catch (error) {
        console.error("Failed to start speech recognition:", error)
        setIsListening(false)
      }
    }
  }

  const speak = () => {
    performSpeak()
  }

  const stopSpeaking = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleListening}
        className={isListening ? "bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700" : ""}
        title={isListening ? "Stop listening" : "Start voice input"}
      >
        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={isSpeaking ? stopSpeaking : speak}
        title={isSpeaking ? "Stop speaking" : "Text to speech"}
      >
        {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  )
}
