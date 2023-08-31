import { managers } from "@/data/manage"

export default function handler(req, res) {
  res.status(200).json(managers)
}
