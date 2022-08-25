// camada que interage com a base de dados
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.getProduct = async () => {
    const result = await Product.find({}, 'title price description _id active');
    return result;
}

exports.create = async (data) => {
    //console.log(data)
    let produto = Product(data)
    await produto.save();
}

// alteração do produto, recebe id e json (data)
exports.put = async (id,data) => {
    // encontra pelo id e atualiza o objeto
    await Product.findByIdAndUpdate(id, {
        // o que quer altera com um set
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active
        }
    })
}

exports.getById = async (id) =>{
    const result = await Product.findOne({_id : id},"_id title description price active")
    return result;
}


exports.delete = async (id) => {
    await Product.findByIdAndDelete(id)
}