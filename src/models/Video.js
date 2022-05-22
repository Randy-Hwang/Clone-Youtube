import mongoose from "mongoose";

// 우리의 데이터가 어떻게 생겼는지 알려주기 위한 파일 필요함. (model)
// 모델을 설정하기 전에 모델의 형태를 정의해야함
// 이 형태를 스키마 (schema) 라고 함
// 데이터베이스에 들어갈 데이터가 어떤 모양이어야 하는지 정의
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
