import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "ReTail - Build full-stack apps faster" },

    {
      name: "description",
      content:
        "A refined Remix starter template with improved defaults for building full-stack web applications.",
    },
  ];
};

export default function Index() {
  /*.accordion-container {
      border-width: var(--accordion-border-width);
      border-radius: var(--accordion-radius);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }*/
  return (
    <div className="container">
      <div
        className="border-accordion-accent border-accordion border-r-accordion
          flex flex-col overflow-hidden"
      ></div>
    </div>
  );
}
