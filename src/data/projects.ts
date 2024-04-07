type ProjectType = {
  title: string;
  url: string;
  tags: string[];
};

const projects: ProjectType[] = [
  {
    title: "Caroussa - Car Rental Sass",
    url: "https://caroussa.vercel.app/",
    tags: ["NextJs", "TypeScript", "TailwindCSS", "Shadcn UI"],
  },
  {
    title: "VTC Paris / Private driver",
    url: "https://vtc-app.vercel.app/",
    tags: ["NextJs", "TypeScript", "TailwindCSS", "Prisma"],
  },
  {
    title: "Infinite CV",
    url: "https://8cv.vercel.app/",
    tags: [
      "NextJs 13",
      "TypeScript",
      "TailwindCSS",
      "Prisma ORM",
      "Mongo DB",
      "Shadcn UI",
    ],
  },
];

export default projects;
