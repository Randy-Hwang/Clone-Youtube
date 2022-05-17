// pug의 파일과 렌더하는 파일의 이름은 같아야 한다.
// 파일에 띄어쓰기는 없어야 하고, 전부 소문자여야 하고,
export const trending = (req, res) => res.render("home");

export const see = (req, res) => res.render("watch");

export const edit = (req, res) => res.send("Edit Video");

export const search = (req, res) => res.send("Search page");

export const upload = (req, res) => res.send("Upload page");

export const deleteVideo = (req, res) => res.send("delete video");
