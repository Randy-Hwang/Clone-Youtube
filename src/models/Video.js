import mongoose from "mongoose";

// 우리의 데이터가 어떻게 생겼는지 알려주기 위한 파일 필요함. (model)
// 모델을 설정하기 전에 모델의 형태를 정의해야함
// 이 형태를 스키마 (schema) 라고 함
// 데이터베이스에 들어갈 데이터가 어떤 모양이어야 하는지 정의
const videoSchema = new mongoose.Schema({
  // maxlength, minlength를 작성할 때 html에도 동일하게 설정을 해주어야 오류가 발생하지 않는다
  title: { type: String, required: true, trim: true, maxlength: 80 },
  description: { type: String, required: true, trim: true, minlength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
