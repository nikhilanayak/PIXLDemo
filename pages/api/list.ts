// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";


type Data = {
	err?: string
	songs?: Array<string>
}

const directory = path.resolve("./public", "songs");

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	//res.status(200).json({ name: "John Doe" });
	let data;

	try{
		const files = fs.readdirSync(directory);
		res.status(200).json({songs: files});
	}
	catch(err){
		res.status(500).json({err: "Failed To Query Songs From Databsase"});
	}

}
