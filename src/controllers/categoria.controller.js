const mongoose = require('mongoose');
const repository = require('../repositories/categoria-repository');

// recuperando todos os registros de categoria
exports.get = async (req, res, next) => {
  const data = await repository.getCategoria();
  res.status(200).send(data)
}

// inserindo uma categoria 
exports.post = async (req, res, next) => {
  await repository.create(req.body);
  res.status(201).send({ message: "nova categoria criada com sucesso." })
  res.status(400).send({ message: "problema ao cadastrar a nova categoria" });
}

// alterando uma categoria
exports.put = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  await repository.put(id, body);
  res.status(200).send({ message: "categoria atualizada com sucesso" });
}

// recuperando uma categoria
exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const data = await repository.getById(id);
  if (data == null) {
    res.status(404).send({ message: "problema ao encontrar a categoria informada" });
  }
  res.status(200).send(data)
}

// deletando uma categoria
exports.delete = async (req, res, next) => {
  const id = req.params.id;
  await repository.delete(id);
  res.status(200).send({ message: "categoria removida com sucesso" })
}
