import "../models/video";

// pug의 파일과 렌더하는 파일의 이름은 같아야 한다.
// 파일에 띄어쓰기는 없어야 하고, 전부 소문자여야 한다.
// render는 두 가지 인자를 필요로 한다. 첫 번째는 렌더할 pug파일, 두 번째는 Pug파일에 보낼 변수들.
export const home = async (req, res) => {
  // mongoose에는 CRUD(Create, Read, Update, Delete)를 돕는 많은 함수들이 있다.
  // model.find -> 콜백함수 사용 Or promise 사용
  // 콜백함수 : 무언가가 발생하고 난 다음에 호출되는 함수
  // 자바스크립트에서 기다림을 표현하는 방법 중 하나
  // Video. find({}, (error, videos) => {})
  // 위의 코드에서 mongoose는 첫 번째 {}를 실행시킨다.
  // {}가 정상적으로 작동한다면, 그 다음에 (error, videos) => {} 함수가 실행된다.
  const videos = await Video.find({});
  // await을 사용하면 콜백함수가 필요없다는 것을 인지한다.
  // 따라서 videos를 찾으면 바로 반환함. error는 try-catch로 관리한다.
  return res.render("home", { pageTitle: "Home", videos });
  // await은 database를 기다려준다
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // req.body -> from 안의 value에 대한 javascript representation 에 접근하는 것.
  // exrpess.urlencoded 라는 미들웨어를 server.js에 적용해놨어야 정상적으로 사용이 가능하다.
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = (req, res) => {
  const { title, description, hashtags } = req.body;
  return res.redirect("/");
};
