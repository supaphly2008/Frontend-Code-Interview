// Component for a maze
import { ReactNode } from "react";
import Maze from "@/model/api/maze/maze";
import { LuRat } from "react-icons/lu";
import { FaCheese } from "react-icons/fa";

const MazeWrapper = ({
  className,
  children,
}: {
  className?: String;
  children: ReactNode;
}) => (
  <div className={`flex flex-col items-center ${className}`}>{children}</div>
);

const MazeRow = ({ children }: { children: ReactNode }) => (
  <div className="flex">{children}</div>
);

const MazeCell = ({ type }: { type: String }) => {
  let cellColor = ""; // Initialize cellColor variable
  let icon = null; // Initialize icon variable

  // Set cellColor based on the type of MazeCell
  switch (type) {
    case "start":
      icon = (
        <LuRat className="w-full h-full p-1 text-neutral-500 bg-amber-200" />
      );
      break;
    case "end":
      icon = <FaCheese className="w-full h-full p-1 text-amber-400" />;
      break;
    case "wall":
      cellColor = "bg-green-800"; // Color for the wall cell (green-800)
      icon = null;
      break;
    case "path":
      cellColor = "bg-lime-50"; // Color for the path cell (lime-50)
      icon = null;
      break;
    default:
      cellColor = "transparent"; // Default color
      icon = null;
      break;
  }

  return <div className={`w-[25px] h-[25px] ${cellColor}`}>{icon}</div>;
};

export default function Maze({
  maze,
  className,
}: {
  maze: Maze;
  className?: String;
}) {
  return (
    <>
      <MazeWrapper className={className}>
        {maze.map((row, rowIndex) => (
          <MazeRow key={`row-${rowIndex}`}>
            {row.map((type, columnIndex) => (
              <MazeCell type={type} key={`cell-${rowIndex}-${columnIndex}`} />
            ))}
          </MazeRow>
        ))}
      </MazeWrapper>
      <div className="bg-amber-500 py-1 rounded-sm cursor-pointer mt-4">
        Start
      </div>
    </>
  );
}
