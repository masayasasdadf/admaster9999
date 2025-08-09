import { NextResponse } from "next/server";

const trend = [
  { date: "06-01", value: 320 },
  { date: "06-02", value: 580 },
  { date: "06-03", value: 980 },
  { date: "06-04", value: 1120 },
  { date: "06-05", value: 860 },
  { date: "06-06", value: 1450 },
  { date: "06-07", value: 1210 },
];

export async function GET() {
  return NextResponse.json(trend);
}
