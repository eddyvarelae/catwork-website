import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hoverable = true, className = '', children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { y: -4 } : undefined}
        transition={{ duration: 0.2 }}
        className={`rounded-2xl bg-beige-200 shadow-sm ${hoverable ? 'hover:shadow-md' : ''} transition-shadow duration-200 ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)

Card.displayName = 'Card'

export default Card
