import File from '../models/File';

class FileController {
  async store(req, res) {
    // originalname e filename: é o nome da key do json do multer.file
    // name e path são os campos da tabela onde esses dados serão salvos.
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
