const social_data = (url, title) => [
  {
    id: 1,
    link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: "fa-brands fa-facebook-f",
    title: "Facebook",
  },
  // {
  //   id: 1,
  //   link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  //   icon: "fa-brands fa-instagram",
  //   title: "Instagram",
  // },
  // {
  //   id: 2,
  //   link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  //   icon: "fa-brands fa-twitter",
  //   title: "Twitter",
  // },
  // {
  //   id: 3,
  //   link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  //   icon: "fa-brands fa-linkedin-in",
  //   title: "LinkedIn",
  // },
  // {
  //   id: 4,
  //   link: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  //   icon: "fa-brands fa-reddit",
  //   title: "Reddit",
  // },
];

export default social_data;
