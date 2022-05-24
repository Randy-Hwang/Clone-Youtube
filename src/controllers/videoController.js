import Video from "../models/Video";

// pug의 파일과 렌더하는 파일의 이름은 같아야 한다.
// 파일에 띄어쓰기는 없어야 하고, 전부 소문자여야 한다.
// render는 두 가지 인자를 필요로 한다. 첫 번째는 렌더할 pug파일, 두 번째는 Pug파일에 보낼 변수들.
export const home = async (req, res) => {
  // mongoose에는 CRUD(Create, Read, Update, Delete)를 돕는 많은 함수들이 있다.
  // model. find -> 콜백함수 사용 Or promise 사용
  // 콜백함수 : 무언가가 발생하고 난 다음에 호출되는 함수
  // 자바스크립트에서 기다림을 표현하는 방법 중 하나
  // Video. find({}, (error, videos) => {})
  // 위의 코드에서 mongoose는 첫 번째 {}를 실행시킨다.
  // {}가 정상적으로 작동한다면, 그 다음에 (error, videos) => {} 함수가 실행된다.
  const videos = await Video.find({}).sort({ createdAt: "desc" });
  // await을 사용하면 콜백함수가 필요없다는 것을 인지한다.
  // 따라서 videos를 찾으면 바로 반환함. error는 try-catch로 관리한다.
  return res.render("home", { pageTitle: "Home", videos });
  // await은 database를 기다려준다
};

export const watch = async (req, res) => {
  // req.params -> url에 있는 정보를 얻을 수 있음(url에 id가 나타나도록 설정했기 때문)
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found" });
  }
  return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  // req.body -> from 안의 value에 대한 javascript representation 에 접근하는 것.
  // exrpess.urlencoded 라는 미들웨어를 server.js에 적용해놨어야 정상적으로 사용이 가능하다.
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(400).render("upload", {
      pageTitle: `Upload Video`,
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "Search", videos });
};
