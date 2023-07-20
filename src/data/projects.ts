type ProjectType = {
  title: string;
  url: string;
  tags: string[];
};

const projects: ProjectType[] = [
  {
    title: "Autorent",
    url: "https://github.com/daishek/CarRental",
    tags: ["Python", "Django", "Bootstrap"],
  },
  {
    title: "Job portal",
    url: "https://github.com/slimanesedrati/job-portal",
    tags: ["Python", "Django", "NextJs", "TypeScript", "TailwindCSS"],
  },
  {
    title: "E-commerce admin dashboard",
    url: "https://github.com/daishek/next13-ecommerce-admin-dashboard",
    tags: ["NextJs", "TypeScript", "TailwindCSS", "Prisma"],
  },
];

export default projects;
