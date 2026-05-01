import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-terracotta text-cream hover:bg-coral focus-visible:ring-terracotta',
  secondary:
    'border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-cream focus-visible:ring-terracotta',
  ghost:
    'text-charcoal hover:bg-beige-300 focus-visible:ring-charcoal',
}

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`inline-flex items-center justify-center rounded-full font-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'

export default Button
