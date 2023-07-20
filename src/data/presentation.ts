type SocialType = {
  label: string;
  url: string;
};

type PresentationType = {
  title: string;
  description: string;
  mail: string;
  social: SocialType[];
};

const presentation: PresentationType = {
  title: "Hi, I'am Dai",
  description:
    "Enthusiastic software engineering student and frontend developer from Algeria. Currently working with NextJS and Typescript. Fascinated by AI and ML. Let's create amazing web experiences together! 🚀💫",
  mail: "daichekkal@gmail.com",
  social: [
    { label: "Github", url: "https://github.com/daishek" },
    { label: "Twitter", url: "https://twitter.com/daixek" },
  ],
};

export default presentation;
