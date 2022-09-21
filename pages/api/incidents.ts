// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getIncidentDataset, Incident } from "../../services/sheet.service";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Incident[]>
) {
  const incidentDataset = await getIncidentDataset();
  res.status(200).json(incidentDataset);
}
