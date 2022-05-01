// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";


type Data = {
	err?: string
	songs?: Array<string>
}

//const directory = path.resolve("./public", "songs");

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	//res.status(200).json({ name: "John Doe" });
	let data;

	try{
		//const files = fs.readdirSync(directory);
		//res.status(200).json({songs: files});
		res.status(200).json({
			songs: [
				"27YearsInSolitary_TheDaily.wav",
				"Astrothunder_TravisScott.wav",
				"BelieveWhatISay_KanyeWest.wav",
				"BlueDanube_Strauss.wav",
				"CovidMysteryInAfrica_TheDaily.wav",
				"ExplicitTurban_Yeat.wav",
				"FiveDumbSoundingBirds_NPR.wav",
				"FurElise_Beethoven.wav",
				"HowTwoFriendsBeatAmazon_TheDaily.wav",
				"IgorsTheme_TylerTheCreator.wav",
				"InTheHallOfTheMountainKing_Grieg.wav",
				"Paranoid_KanyeWest.wav",
				"TheMarriageOfFigaro_Mozart.wav",
				"TheWarForTheRainforest_TheDaily.wav",
				"WilliamTellOverture_Rossini.wav"
			  ]
		});
	}
	catch(err){
		res.status(500).json({err: "Failed To Query Songs From Databsase"});
	}

}
