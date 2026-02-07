import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface MenuItem {
  icon: LucideIcon
  label: string
  href: string
  gradient: string
  iconColor: string
  children?: MenuItem[]
}

interface MenuBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationIteration"> {
  items: MenuItem[]
  activeItem?: string
  onItemClick?: (item: MenuItem) => void
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
      scale: { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
    const navigate = useNavigate();

    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-1.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg relative", // removed overflow-hidden to allow dropdown
          className
        )}
        initial="initial"
        whileHover="hover"
        {...props}
      >
        <motion.div
          className="absolute -inset-2 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] rounded-3xl z-0 pointer-events-none"
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-1 relative z-10">
          {items.map((item) => {
            const Icon = item.icon
            // Check active state
            const isActive = item.href === '/' 
                ? activeItem === '/' 
                : activeItem?.startsWith(item.href);
            
            const hasChildren = item.children && item.children.length > 0;
            const isHovered = hoveredItem === item.label;

            return (
              <motion.li 
                key={item.label} 
                className="relative block"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  onClick={() => {
                      if (!hasChildren) onItemClick?.(item);
                  }}
                  className="block w-full"
                >
                  <motion.div
                    className="block rounded-xl overflow-visible group relative min-w-[110px]"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                    animate={isActive || isHovered ? "hover" : "initial"}
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        opacity: isActive || isHovered ? 1 : 0,
                        borderRadius: "12px",
                      }}
                    />
                    
                    {/* Front Face (Default) */}
                    <motion.div
                      className={cn(
                        "flex items-center justify-center gap-2 px-4 py-2.5 relative z-10 bg-transparent transition-colors rounded-xl w-full",
                        isActive || isHovered
                          ? "text-white"
                          : "text-white/60 group-hover:text-white"
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                      }}
                    >
                      <span className={cn( "transition-colors duration-300", (isActive || isHovered) ? item.iconColor : "text-white/60", `group-hover:${item.iconColor}` )}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                      {hasChildren && <ChevronDown className="w-3 h-3 opacity-50" />}
                    </motion.div>

                    {/* Back Face (Hover/Active) */}
                    <motion.div
                      className={cn(
                        "flex items-center justify-center gap-2 px-4 py-2.5 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl w-full",
                        isActive || isHovered
                          ? "text-white"
                          : "text-white/60 group-hover:text-white"
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                      }}
                    >
                      <span className={cn( "transition-colors duration-300", (isActive || isHovered) ? item.iconColor : "text-white/60", `group-hover:${item.iconColor}` )}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                      {hasChildren && <ChevronDown className="w-3 h-3 opacity-50" />}
                    </motion.div>
                  </motion.div>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {hasChildren && isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-xl overflow-hidden z-50 p-1"
                        >
                             {item.children?.map((child) => (
                                 <button
                                    key={child.label}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onItemClick?.(child);
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left group"
                                 >
                                     <div className={`p-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-${child.iconColor.split('-')[1]}-500/30 transition-colors`}>
                                         <child.icon className={`w-4 h-4 ${child.iconColor}`} />
                                     </div>
                                     <span className="font-medium">{child.label}</span>
                                 </button>
                             ))}
                        </motion.div>
                    )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>
    )
  }
)

MenuBar.displayName = "MenuBar"
