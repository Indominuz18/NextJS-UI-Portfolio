import { FC, useEffect, useState } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onChange = () => {
    setIsTransitioning(true);
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Add a slight delay to make the transition visible
    setTimeout(() => {
      setTheme(newTheme);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 50);
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
    onChange,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(classNames?.wrapper, "w-auto h-auto"),
        })}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={theme}
            initial={{ opacity: isTransitioning ? 0 : 1, scale: isTransitioning ? 0.5 : 1, rotate: isTransitioning ? -180 : 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className={clsx(
              "p-1 rounded-full",
              {
                "text-yellow-500": theme === "light",
                "text-sky-500": theme === "dark",
              }
            )}
          >
            {!isSelected || theme === "dark" ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Component>
  );
};
