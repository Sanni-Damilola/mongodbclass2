import datas from "../Model/model";
import { Request, Response } from "express";
import { request } from "http";

const getone = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getalldata = await datas.findById(req.params.id);
    return res.status(201).json({
      message: "Successfully gotten id " + req.params.id,
      data: getalldata,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const post = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, cardNo, phonedetails } = req.body;
    const space = name.split(" ")[0];
    const postdata = await datas.create(
      {
        name,
        cardNo,
        phonedetails,
        tagNo: `${space}${Math.floor(Math.random() * 1000)}`,
      },
      { timestamps: true }
    );

    return res.status(201).json({
      message: "Successfully posted",
      data: postdata,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const getall = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getalldata = await datas.find();
    return res.status(201).json({
      message: "Successfully gotten all data",
      data: getalldata,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, cardNo, phonedetails } = req.body;
    const space = name.split(" ")[0];
    const updatedata = await datas.findByIdAndUpdate(
      req.params.id,
      {
        name,
        cardNo,
        phonedetails,
        tagNo: `${space}${Math.floor(Math.random() * 1000)}`,
      },
      { new: true },
    );
    return res.status(201).json({
      message: "Successfully updated",
      data: updatedata,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
const deletdata = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletone = await datas.findByIdAndRemove(req.params.id);
    return res.status(201).json({
      message: "Successfully deleted id " + req.params.id,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export { getone, getall, post, update, deletdata };
