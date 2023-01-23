const fs = require("fs");
const path = require("path");

const IGNORE_NAME = ".DS_Store";

const cur_dir = path.resolve(__dirname);
const items = fs.readdirSync(cur_dir);

const folders = items.filter((res) =>
  fs.lstatSync(path.resolve(cur_dir, res)).isDirectory()
);

for (let folder of folders) {
  if (folder == IGNORE_NAME) {
    continue;
  }
  let sub_dir = path.resolve(cur_dir, folder);
  const sub_items = fs.readdirSync(sub_dir);
  const sub_folders = sub_items.filter((res) =>
    fs.lstatSync(path.resolve(sub_dir, res)).isDirectory()
  );
  for (let subf of sub_folders) {
    if (subf == IGNORE_NAME) {
      continue;
    }
    // For removing the indexes (back to front)
    /* fs.rename(path.resolve(sub_dir, subf), path.resolve(sub_dir, subf.slice(0, -3)), (err) => {
      if (err) {
        console.log(err)
      }
    }) */
    let art_dir = path.resolve(sub_dir, subf);
    let art_files = fs.readdirSync(art_dir);
    for (let art_file of art_files) {
      if (art_file == IGNORE_NAME) {
        continue;
      }
      let [name, ext] = art_file.split(".")
      let final_name = name + "#1." + ext
      fs.rename(path.resolve(art_dir, art_file), path.resolve(art_dir, final_name), (err) => {
        
      })
    }
  }
}
