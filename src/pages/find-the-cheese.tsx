import axios from "axios";
import MazeType from "@/model/api/maze/maze";

import Maze from "@/components/Maze";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Section from "@/components/Section";

export default function FindTheCheese({ mazeData }: { mazeData: MazeType[] }) {
  return (
    <main className="bg-amber-50 p-4 min-h-screen">
      <div className="p-4 max-w-[720px] mx-auto bg-white rounded shadow text-center">
        <Title text="Find the cheese" />
        <Paragraph margin={6}>
          Click 'Start' to see how the mouse find the cheese by using DFS!
        </Paragraph>

        {/* maze */}
        {mazeData.map((maze, index) => (
          <div key={index}>
            {index !== 0 && (
              <Section>
                <Maze maze={maze} />
              </Section>
            )}
            {index === 0 && <Maze className="mt-6" maze={maze} />}
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }: any) {
  // Extract the port from the request headers
  const currentPort = req.headers.host.split(":")[1];

  try {
    // Fetch maze data from the API endpoint during server-side rendering
    const response = await axios.get(
      `http://localhost:${currentPort}/api/maze`
    );
    const mazeData = response.data;

    // Pass maze data to the component props
    return {
      props: {
        mazeData,
      },
    };
  } catch (error) {
    console.error("Error fetching maze data:", error);

    // If an error occurs, you can handle it accordingly
    return {
      props: {
        mazeData: [],
      },
    };
  }
}
