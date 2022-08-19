import fs from "fs/promises";
import path from "path";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async () => {
    const dir = await fs.readdir(__dirname);
    const dir_contents = dir.map(filename => filename);
    const up_dir = await fs.readdir(path.join(__dirname, ".."));
    const up_dir_contents = up_dir.map(filename => filename);
    const up_up_dir = await fs.readdir(path.join(__dirname, "..", ".."));
    const up_up_dir_contents = up_up_dir.map(filename => filename);

    return json({
        dir,
        dir_contents,
        up_dir,
        up_dir_contents,
        up_up_dir,
        up_up_dir_contents
    })
}