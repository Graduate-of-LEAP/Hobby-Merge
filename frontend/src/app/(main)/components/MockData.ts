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

export const Mockposts = [
  {
    id: 3,
    user: "Dulguun",
    time: "5 minutes ago",
    profilePic: "/1.jpg",
    content: "Hello",
    viewcount: "",
    images: ["/2.jpg"],
    bgColor: "#c8daf7",
    height: "250px",
  },
];
export const comment=[
  {
    id: 1,
    user: "Dulguun",
    profilePic: "/1.jpg",
    content: "",
    time: "",
    height: "auto",
    viewcount: "",
    reply: [],
    like: "",
  },
]
