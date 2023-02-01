const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

mongoose
  .connect('mongodb://localhost:27017/knowledge_stats', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
  })
