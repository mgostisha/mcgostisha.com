import fs from "fs/promises";
import path from "path";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async () => {
    const dir = await fs.readdir(path.join(__dirname));
    const contents = dir.map(filename => filename);
    return json({
        cwd: process.cwd(),
        cwd_contents: contents,
        up_dir: path.join(__dirname, ".."),
    })
}