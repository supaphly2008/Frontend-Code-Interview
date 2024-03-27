import { ReactNode } from "react";

import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";

// Component for displaying a highlighted text with amber background and border
const HighlightText = ({ text }: { text: string }) => (
  <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
    {text}
  </span>
);

// Component for displaying a list item
const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="mt-1">{children}</li>
);

// Component for displaying a strong text with or without margins
const Strong = ({
  hasMargin = false,
  children,
}: {
  hasMargin?: boolean;
  children: ReactNode;
}) => <strong className={hasMargin ? "mx-1" : ""}>{children}</strong>;

export default function Home() {
  return (
    <div className="p-4 max-w-[720px] mx-auto bg-white rounded shadow">
      <Title text="Frontend Engineer Assessment" />
      <Paragraph margin={6}>
        Welcome to our frontend engineer assessment! This test is designed to
        evaluate your frontend development skills and related knowledge.
      </Paragraph>
      <Paragraph margin={4}>
        Please read each question carefully and imagine them as typical work
        tasks. Respond in the same manner you would during your regular work.
      </Paragraph>
      <Paragraph margin={4}>
        You can create any folders, ts/tsx/css files you need at any position
        that you think is appropriate.
      </Paragraph>
      <Paragraph margin={4}>
        Here's the requirements for the assessment:
      </Paragraph>
      <ul className="list-decimal pl-6">
        <ListItem>
          <Strong>NEVER</Strong> change anything in the directories named in the
          pattern
          <HighlightText text="**/api/**" />
        </ListItem>
        <ListItem>Style with tailwindcss and css file.</ListItem>
        <ListItem>
          Use
          <HighlightText text="axios" />
          to fetch data
        </ListItem>
        <ListItem>
          Implement Responsive Web Design (RWD) with a breakpoint at 768px (md
          in tailwindcss default breakpoints)
        </ListItem>
        <ListItem>
          <Paragraph margin={0}>
            Submit the URL of your answer repository by
            <Strong hasMargin>
              23:59 on the 5th day after receiving the questions,
            </Strong>
            and cease answering (pushing commits). For example: if you receive
            the questions on Mar 1st, you should submit the answer by 23:59 on
            Mar 5th.
          </Paragraph>
        </ListItem>
      </ul>
      <Paragraph margin={4}>Good luck! Let's get started.</Paragraph>
      <Section>
        <h2 className="text-xl font-bold">Problem 1: Refactoring</h2>
        <Paragraph>
          For this task, your objective is to refactor the current page
          following your coding conventions and best practices. Look for
          opportunities to enhance code structure, eliminate redundancy, clarify
          variable names, and simplify complex logic.
        </Paragraph>
      </Section>
      <Section>
        <h2 className="text-xl font-bold">Problem 2: Maze</h2>
        <Paragraph>
          For this task, your objective is to implement a page where a mouse
          traverses a maze to find cheese.
        </Paragraph>
        <Paragraph margin={4}>
          During server-side rendering, you need to hit the
          <HighlightText text="/api/maze" />
          endpoint to fetch the maze map array and display all the maps along
          with their respective start buttons on the screen. When the user
          clicks the start button, the mouse on that map will begin to solve the
          maze using Depth-First Search (DFS), with each step taking 100 ms.
        </Paragraph>
        <Paragraph margin={4}>
          Meanwhile, the start button will disappear, replaced by a reset
          button. Clicking the reset button will stop the mouse's movement,
          reset the map to its initial state, and the reset button will be
          replaced by the start button again.
        </Paragraph>
        <Paragraph margin={4}>
          <a
            className="underline font-bold text-amber-500 cursor-pointer hover:text-amber-400 mr-1"
            href="https://youtube.com/shorts/uA744cMSNK8?si=U80OGTvH3rGV17zu"
            target="_blank"
          >
            Click
          </a>
          to watch a demonstration of the expected behavior.
        </Paragraph>
        <Paragraph margin={4}>Note that:</Paragraph>
        <ul className="list-decimal pl-6">
          <ListItem>
            Put this page at the route
            <HighlightText text="/find-the-cheese" />, and title it
            <Strong hasMargin>'Find the cheese'.</Strong>
          </ListItem>
          <ListItem>
            Add description, "Click 'Start' to see how the mouse find the cheese
            by using DFS!", below page title
          </ListItem>
          <ListItem>
            The color of the walls is
            <HighlightText text="green-800" />
          </ListItem>
          <ListItem>
            The color of the path is
            <HighlightText text="lime-50" />
          </ListItem>
          <ListItem>
            The icon of the mouse is
            <HighlightText text="LuRat" />
            with color
            <HighlightText text="neutral-500" />
          </ListItem>
          <ListItem>
            The icon of the cheese is
            <HighlightText text="FaCheese" />
            with color
            <HighlightText text="amber-400" />
          </ListItem>
          <ListItem>
            Highlight current path with color
            <HighlightText text="amber-200" />
          </ListItem>
          <ListItem>
            The button has a background color of amber-500, and a hover
            background color of amber-400.
          </ListItem>
          <ListItem>
            <HighlightText text="/api/maze" />
            simulates an endpoint on another server, so you need to use axios to
            fetch the data.
          </ListItem>
        </ul>
      </Section>
      <Section>
        <h2 className="text-xl font-bold">Problem 3: Layout</h2>
        <Paragraph>
          For this task, your objective is to create and apply a global shared
          layout. The layout should consist of:
        </Paragraph>
        <ul className="list-decimal pl-6">
          <ListItem>
            A header displaying
            <Strong hasMargin>'Jedi Software'</Strong> that collapses when
            scrolling up and reappears when scrolling stops.
          </ListItem>
          <ListItem>
            A collapsible menu offering redirection to the homepage and
            <HighlightText text="/find-the-cheese" />.
          </ListItem>
        </ul>
      </Section>
    </div>
  );
}
