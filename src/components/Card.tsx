import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import type { MouseEvent } from "react";

export const Card = ({
  tool,
}: {
  tool: {
    name: string;
    url: string;
    description: string;
  };
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const bounds = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - bounds.left);
    mouseY.set(clientY - bounds.top);
  };

  return (
    <li
      onMouseMove={handleMouseMove}
      className="p-2 bg-slate-900 rounded relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgb(12 74 110 / .35), transparent)`,
        }}
      />
      <div className="text-sky-100 mb-4">
        <h3 className="pl-2 py-4 text-2xl border-b border-sky-900">
          <a href={tool.url}>{tool.name}</a>
        </h3>
        <p className="p-2 prose text-sky-100">{tool.description}</p>
      </div>
    </li>
  );
};
