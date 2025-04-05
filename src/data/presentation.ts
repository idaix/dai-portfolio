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
  "Passionate software engineer and full-stack web developer from Algeria, with a solid background in building scalable and intuitive web applications. Currently working with Next.js, TypeScript, Django, and NestJS, crafting seamless digital experiences and optimizing business processes.\n\nI’m especially curious about AI and machine learning, and love applying tech to solve real-world problems—from automating internal workflows to developing startup solutions.\n\nLet’s build innovative and impactful web experiences together! 🚀💫",
  mail: "daichekkal@gmail.com",
  social: [
    { label: "Github", url: "https://github.com/idaix" },
    { label: "𝕏", url: "https://x.com/daixek" },
    { label: "in", url: "https://www.linkedin.com/in/daichekkal/" },
  ],
};

export default presentation;
