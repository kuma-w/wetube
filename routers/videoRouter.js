import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controller/videoController";

const videRouter = express.Router();

videRouter.get(routes.videos, videos);
videRouter.get(routes.upload, upload);
videRouter.get(routes.videoDetail, videoDetail);
videRouter.get(routes.editVideo, editVideo);
videRouter.get(routes.deleteVideo, deleteVideo);

export default videRouter;