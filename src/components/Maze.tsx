// Component for a maze
import { ReactNode, useState, useEffect, useCallback, useRef } from "react";
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

const MazeCell = ({ type, visited }: { type: String; visited: boolean }) => {
  let cellColor = ""; // Initialize cellColor variable
  let icon = null; // Initialize icon variable

  // Set cellColor based on the type of MazeCell
  switch (type) {
    case "start":
      cellColor = "bg-amber-200";
      icon = null;
      break;
    case "end":
      icon = <FaCheese className="w-full h-full p-1 text-amber-400" />;
      break;
    case "wall":
      cellColor = "bg-green-800"; // Color for the wall cell (green-800)
      icon = null;
      break;
    case "path":
      cellColor = visited ? "bg-amber-200" : "bg-lime-50"; // Color for the path cell (lime-50)
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
  const [ratPosition, setRatPosition] = useState({ x: -1, y: -1 }); // Initialize rat position
  const [visited, setVisited] = useState<boolean[][]>([]);
  const [mazeRunning, setMazeRunning] = useState(false);
  const [cheeseFound, setCheeseFound] = useState(false);
  const intervalIdRef = useRef<number | null>(null);

  const initializeMap = useCallback(() => {
    // Initialize visited state based on maze dimensions
    const initialVisited = new Array(maze.length)
      .fill(false)
      .map(() => new Array(maze[0].length).fill(false));
    setVisited(initialVisited);

    // Function to find the position of "start"
    const findStartPosition = () => {
      for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
          if (maze[y][x] === "start") {
            setRatPosition({ x, y });
            return;
          }
        }
      }
    };
    findStartPosition();
  }, [maze]);

  useEffect(() => {
    initializeMap();
  }, [initializeMap]); // Run this effect whenever maze changes

  const moveRatDFS = () => {
    const stack = [{ x: ratPosition.x, y: ratPosition.y }];

    // Clone the visited state to avoid directly modifying it
    const updatedVisited = visited.map((row) => [...row]);
    updatedVisited[ratPosition.y][ratPosition.x] = true;

    const directions = [
      { dx: 0, dy: -1 }, // Up
      { dx: 0, dy: 1 }, // Down
      { dx: -1, dy: 0 }, // Left
      { dx: 1, dy: 0 }, // Right
    ];

    // run the interval every 100ms to simulate rat movement
    const id = setInterval(() => {
      if (stack.length === 0) {
        clearInterval(id);
        return;
      }

      const current = stack.pop();

      if (!current) {
        // Check if current is undefined/null
        return;
      }

      for (const direction of directions) {
        const newX = current.x + direction.dx;
        const newY = current.y + direction.dy;

        // move the rat position along the "path" until it reaches "end"
        if (
          newX >= 0 &&
          newX < maze[0].length &&
          newY >= 0 &&
          newY < maze.length &&
          (maze[newY][newX] === "path" || maze[newY][newX] === "end") &&
          !updatedVisited[newY][newX]
        ) {
          updatedVisited[newY][newX] = true;
          stack.push({ x: newX, y: newY });
          setRatPosition({ x: newX, y: newY });

          // clear the interval when the rat finds the cheese
          if (maze[newY][newX] === "end") {
            setMazeRunning(false);
            setCheeseFound(true);
            clearInterval(id);
            return;
          }
        }
      }
    }, 100);
    // Update the visited state after each move
    setVisited(updatedVisited);
    intervalIdRef.current = id as any; // Store the interval ID in the ref
  };

  useEffect(() => {
    if (mazeRunning) {
      moveRatDFS();
    } else if (!mazeRunning && !cheeseFound) {
      clearInterval(intervalIdRef.current as number);
      initializeMap();
    }
  }, [mazeRunning, initializeMap, cheeseFound]);

  const handleStart = () => {
    if (!mazeRunning && cheeseFound) {
      setCheeseFound(false);
      setMazeRunning(false);
      initializeMap();
    } else {
      setMazeRunning((prev) => !prev);
    }
  };

  return (
    <>
      <MazeWrapper className={className}>
        <div className="relative">
          {maze.map((row, rowIndex) => (
            <MazeRow key={`row-${rowIndex}`}>
              {row.map(
                (type, columnIndex) =>
                  visited.length && (
                    <MazeCell
                      visited={visited[rowIndex][columnIndex]}
                      type={type}
                      key={`cell-${rowIndex}-${columnIndex}`}
                    />
                  )
              )}
            </MazeRow>
          ))}
          <LuRat
            className="absolute w-[25px] h-[25px] p-1 text-neutral-500 bg-amber-200"
            style={{
              top: `${ratPosition.y * 25}px`,
              left: `${ratPosition.x * 25}px`,
            }} // Adjust according to cell size
          />
        </div>
      </MazeWrapper>

      <div
        className="bg-amber-400 py-1 rounded-sm cursor-pointer mt-4"
        onClick={handleStart}
      >
        {mazeRunning || cheeseFound ? "Restart" : "Start"}
      </div>
    </>
  );
}
