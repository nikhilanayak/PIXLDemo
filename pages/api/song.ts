// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs, { createReadStream } from "fs";
import path from "path";
import { pipeline } from "stream";


const directory = path.resolve("../", "songs");

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {

	const codec = req.query.codec;
	const file = req.query.file;

	const audioStream = createReadStream(`${directory}/${file}/${codec}.wav`);

	pipeline(audioStream, res, (error) => {
		if(error) console.error(error);
	});

}

