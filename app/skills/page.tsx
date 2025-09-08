'use client'

import Contact from "@/components/Contact"
import { FeaturesSectionDemo } from "@/components/skills"

import { fadeInUp } from "@/lib/animations"
import { motion } from 'framer-motion'

export default function SkillsPage() {
  return (
    <div className="bg-muted flex miSn-h-svh flex-col items-center justify-center p-6 md:p-10">
        
        <div className="pt-20">
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center"
            {...fadeInUp}
          >
            Skills
          </motion.h1>
            <div>
              <FeaturesSectionDemo />
              <Contact />
            </div>
        </div>
        
    </div>
  )
}