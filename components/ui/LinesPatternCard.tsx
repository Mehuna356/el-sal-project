import React from "react"
import { motion } from "framer-motion"

interface LinesPatternCardProps {
  children?: React.ReactNode
  className?: string
  patternClassName?: string
  gradientClassName?: string
}

export function LinesPatternCard({ 
  children, 
  className = "",
  patternClassName = "",
  gradientClassName = ""
}: LinesPatternCardProps) {
  return (
    <motion.div
      className={`border w-full rounded-2xl overflow-hidden bg-black border-white/10 p-3 relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`size-full h-full w-full bg-lines-pattern bg-[length:30px_30px] rounded-xl overflow-hidden ${patternClassName}`}>
        <div className={`size-full h-full w-full bg-gradient-to-tr from-black/90 via-black/40 to-emerald-950/20 ${gradientClassName}`}>
          {children}
        </div>
      </div>
    </motion.div>
  )
}