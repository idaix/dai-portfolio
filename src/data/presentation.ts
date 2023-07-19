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
    "I'm an Algerian software engineering student and a frontend developer. I am currently working with NextJS and Typescript.",
  mail: "daichekkal@gmail.com",
  social: [
    { label: "Github", url: "https://github.com/daishek" },
    { label: "Twitter", url: "https://twitter.com/daixek" },
  ],
};

export default presentation;
