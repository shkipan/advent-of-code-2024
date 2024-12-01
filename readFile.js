import fs from "fs"

export const readFile = async filePath => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8')
    return data
  }
  catch(err) {
    console.log(11, err)
  }
}
