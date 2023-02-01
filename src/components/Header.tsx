import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const useBoundedScroll = (bounds: number) => {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

  React.useEffect(() => {
    return scrollY.on("change", (current) => {
      const previous = scrollY.getPrevious();
      const difference = current - previous;
      const newScrollYBounded = scrollYBounded.get() + difference;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [scrollY]);

  return { scrollYBounded, scrollYBoundedProgress };
};

export const Header = () => {
  const { scrollYBoundedProgress } = useBoundedScroll(200);

  return (
    <motion.header
      style={{
        height: useTransform(scrollYBoundedProgress, [0, 1], [80, 50]),
        backgroundColor: useMotionTemplate`rgb(7 89 133 / ${useTransform(
          scrollYBoundedProgress,
          [0, 1],
          [1, 0.6]
        )}`,
        borderColor: useMotionTemplate`rgb(
          ${useTransform(scrollYBoundedProgress, [0, 1], [217, 30])} 
          ${useTransform(scrollYBoundedProgress, [0, 1], [119, 59])} 
          ${useTransform(scrollYBoundedProgress, [0, 1], [6, 59])})`,
      }}
      className="bg-sky-800 border-b-amber-600 border-b-4 font-light sm:fixed inset-x-0 h-20 flex backdrop-blur-sm"
    >
      <nav className="sm:flex flex-1 sm:justify-between items-center max-w-7xl m-auto px-6 text-slate-50">
        <motion.div
          style={{
            scale: useTransform(scrollYBoundedProgress, [0, 1], [1, 0.8]),
          }}
          className="mx-4 text-3xl text-center mb-2 sm:text-left sm:mb-0"
        >
          <a href="/">Devin Fitzsimons</a>
        </motion.div>
        <motion.ul
          style={{
            scale: useTransform(scrollYBoundedProgress, [0, 1], [1, 0.5]),
          }}
          className="flex justify-center"
        >
          <li className="mx-4 text-xl sm:text-3xl">
            <a href="/projects">Projects</a>
          </li>
          <li className="mx-4 text-xl sm:text-3xl">
            <a href="/blog">Blog</a>
          </li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};
