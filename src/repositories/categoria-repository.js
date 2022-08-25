const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');

// recuperando todas as categorias
exports.getCategoria = async () => {
  const res = await Categoria.find({}, 'name active _id');
  return res;
}

// inserindo uma nova categoria
exports.create = async (data) => {
  let categoria = Categoria(data)
  await categoria.save();
}

// alterando uma categoria, recebe id e json (data)
exports.put = async (id, data) => {
  // encontra pelo id e atualiza o objeto
  await Categoria.findByIdAndUpdate(id, {
    // set vai atualizar o objeto, settando novos valores
    $set: {
      name: data.name,
      active: data.active
    }
  })
}

// Recuperando uma categoria pelo identificador
exports.getById = async (id) => {
  const res = await Categoria.findOne({ _id: id }, "_id name active")
  return res;
}


// Deletando uma categoria pelo identificador
exports.delete = async (id) => {
  await Categoria.findByIdAndUpdate(id, {
    $set: {
      "active": false
    }
  })
}