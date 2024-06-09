import { type RecipeVariantProps, cva } from "@/css";
import IconsSvgPaths from "~/styles/icons.json";

const icon = cva({
  base: {
    display: "inline-block",
    width: "100%",
    height: "100%",
    verticalAlign: "middle",
  },
  defaultVariants: { size: "sm", stroke: "secondary" },
  variants: {
    size: {
      sm: { width: "24px", height: "24px" },
      md: { width: "42px", height: "42px" },
    },
    stroke: {
      primary: { color: "primary" },
      secondary: { color: "fgSecondary" },
    },
  },
});

type IconVariants = RecipeVariantProps<typeof icon>;

type IconProps = IconVariants & {
  name: keyof typeof IconsSvgPaths;
};

export const Icon = ({ size, stroke, name }: IconProps) => {
  return (
    <span className={icon({ size, stroke })}>
      <svg
        viewBox="0 0 24 24"
        stroke="blue"
        dangerouslySetInnerHTML={{ __html: IconsSvgPaths[name] }}
      ></svg>
    </span>
  );
};
