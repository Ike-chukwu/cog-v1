import { benefits } from "@/data/benefit"

export default function handler(req, res) {
  res.status(200).json(benefits)
}
