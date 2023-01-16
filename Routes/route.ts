import { Router } from "express";
import { deletdata, getall, getone, post, update } from "../Controller/control";

const route = Router();

route.route("/getall").all(getall);
route.route("/getone/:id").get(getone);
route.route("/post/").post(post);
route.route("/update/:id").patch(update);
route.route("/delete/:id").delete(deletdata);

export default route;
