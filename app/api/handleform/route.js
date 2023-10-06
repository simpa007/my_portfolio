import { NextResponse } from "next/server";
export default async function POST(req, res) {
	const data = await req.json();
	console.log(data);

	return NextResponse.json(data);
}
