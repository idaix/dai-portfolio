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
    "Passionate software engineering student and frontend developer from Algeria. Currently working with NextJS and Typescript. Curious about AI and ML. Let's create amazing web experiences together! 🚀💫",
  mail: "daichekkal@gmail.com",
  social: [
    { label: "Github", url: "https://github.com/idaix" },
    { label: "𝕏", url: "https://x.com/daixek" },
    { label: "in", url: "https://www.linkedin.com/in/daichekkal/" },
  ],
};

export default presentation;
