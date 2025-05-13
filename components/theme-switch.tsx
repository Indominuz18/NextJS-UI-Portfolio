import { FC, useEffect, useState } from "react";
import { SwitchProps, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
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
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
        }}
      >
        <input {...getInputProps()} />
      </div>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(classNames?.wrapper, "w-auto h-auto"),
        })}
      >
        {theme && (
          <motion.div
            key={theme}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className={clsx("p-1 rounded-full", {
              "text-yellow-500": theme === "light",
              "text-sky-500": theme === "dark",
            })}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            initial={{
              opacity: isTransitioning ? 0 : 1,
              scale: isTransitioning ? 0.5 : 1,
              rotate: isTransitioning ? -180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {!isSelected || theme === "dark" ? (
              <MoonFilledIcon size={22} />
            ) : (
              <SunFilledIcon size={22} />
            )}
          </motion.div>
        )}
      </div>
    </Component>
  );
};
