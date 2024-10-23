export const items: Item[] = [
  { id: 1, text: "News Feed" },
  { id: 2, text: "Wait list" },
  { id: 3, text: "Profile" },
  { id: 4, text: "Settings" },
];
export type Item = {
  id: number;
  text: string;
};
export const infos: Item[] = [
  { id: 1, text: "All Post" },
  { id: 2, text: "Your Post " },
  { id: 3, text: "Notifications" },
];

export const posts = [
  {
    id: 1,
    user: "Gerel",
    time: "5 minutes ago",
    profilePic: "/zurag.jpg",
    content:
      "Hi everyone, today I was on the most beatifull mountain in the world, I also want to say hi to Dulguun and Turuu",
    images: ["/uul.jpeg", "", ""],
    bgColor: "#e6f2fb",
    height: "320px",
  },
  {
    id: 2,
    user: "Dulguun",
    time: "5 minutes ago",
    profilePic: "/1.jpg",
    content:
      "Hi everyone, today I was on the most beatifull mountain in the world, I also want to say hi to Dulguun and Turuu",
    images: ["/2.jpg", "/2.jpg", ""],
    bgColor: "#DFEBFF",
    height: "400px",
  },
  {
    id: 3,
    user: "Dulguun",
    time: "5 minutes ago",
    profilePic: "/1.jpg",
    content:
      "Hi everyone, today I was on the most beatifull mountain in the world, I also want to say hi to Dulguun and Turuu",
    images: [],
    bgColor: "#c8daf7",
    height: "250px",
  },
];
