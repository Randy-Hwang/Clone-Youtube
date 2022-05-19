// pug의 파일과 렌더하는 파일의 이름은 같아야 한다.
// 파일에 띄어쓰기는 없어야 하고, 전부 소문자여야 한다.
// render는 두 가지 인자를 필요로 한다. 첫 번째는 렌더할 pug파일, 두 번째는 Pug파일에 보낼 변수들.
export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req, res) => res.render("watch");

export const edit = (req, res) => res.render("edit");

export const search = (req, res) => res.send("Search page");

export const upload = (req, res) => res.send("Upload page");

export const deleteVideo = (req, res) => res.send("delete video");
