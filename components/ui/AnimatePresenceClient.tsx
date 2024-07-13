'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react'

const AnimatePresenceClient = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AnimatePresence mode="wait">
        {children}
    </AnimatePresence>
  )
}

export default AnimatePresenceClient