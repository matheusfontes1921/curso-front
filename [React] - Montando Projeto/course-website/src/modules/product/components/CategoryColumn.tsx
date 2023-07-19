import { CategoryType } from "../../../shared/types/CategoryType";
import { Tag } from "antd";

interface CategoryColumnProps {
  category?: CategoryType;
}

const colors: string[] = [
  "magenta",
  "red",
  "orange",
  "volcano",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const CategoryColumn = ({ category }: CategoryColumnProps) => {
  if (!category) {
    return null;
  }
  const currentColor = colors[category.id - 1] || colors[0];
  return <Tag color={currentColor}>{category.name}</Tag>;
};

export default CategoryColumn;
