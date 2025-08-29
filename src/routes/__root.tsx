import * as React from 'react'
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import App from '../App'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const location = useLocation()

  return (
    <React.Fragment>
      <App>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </App>
    </React.Fragment>
  )
}
