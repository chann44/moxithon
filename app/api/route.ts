import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const GET: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(200).json({ message: "Hello from the API!" });
};
