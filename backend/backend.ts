import {spawn, spawnSync} from "child_process";
import { readFileSync, unlinkSync, writeFileSync } from "fs";
const dir = "/media/nikhil/0EC4AFA1C4AF8993/Users/Nikhi/Desktop/Programming/AudioEncoder";

const inf = "__in.wav";
const outf = "__out.wav";

function processSong(audioBytes: Uint8Array){
	writeFileSync(`${dir}/${inf}`, audioBytes, "binary");

	const process = spawnSync("python3", [`${dir}/model_api.py`],
		{
			stdio: "inherit"
		});
	
	const readData = readFileSync(`${dir}/${outf}`);
	unlinkSync(`${dir}/${outf}`);

	return readData;
}



export default processSong;