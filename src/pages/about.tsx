import { useViewportWidth } from "@/hooks/useViewportWidth";

import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Avatar from "@/components/Avatar";
import Section from "@/components/Section";

export default function About() {
  const { isMobile } = useViewportWidth();

  return (
    <div className="p-4 max-w-[720px] mx-auto bg-white rounded shadow text-center">
      <Title text="More about myself" />

      <div className="flex justify-center mt-6">
        <Avatar
          size={isMobile ? 150 : 200}
          src="https://i.pravatar.cc/300"
          alt="Avatar"
        />
      </div>

      <Paragraph margin={6}>
        I am an experienced front-end developer 🤓 who is fascinated by
        JavaScript frameworks, including AngularJS, React, and Vue. These
        frameworks not only make development faster but also more enjoyable. I
        find it fulfilling to work with these tools, and they allow me to create
        dynamic and engaging web applications with ease 💯.
      </Paragraph>

      <Section>
        <h2 className="text-xl font-bold">Recent Project</h2>
        <Paragraph>
          I founded{" "}
          <a
            className="font-bold text-amber-500 cursor-pointer hover:text-amber-400"
            href="https://www.ezcut.co/"
            target="_blank"
          >
            EZ CUT
          </a>
          , a salon shop where I developed an efficient ticket dispenser system,
          available both online and onsite. This system enables hairdressers to
          effortlessly monitor the status of customers, while customers can
          conveniently check the queue status, including the number of people
          waiting. I have successfully developed a face recognition app that
          will maintain a record of customers' hairstyles. This will eliminate
          the need for customers to explain their desired hairstyle on
          subsequent visits, as the app will recognize and recall their
          preferences.
        </Paragraph>
      </Section>
    </div>
  );
}
