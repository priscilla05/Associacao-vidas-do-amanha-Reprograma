const CriancasModel = require('../models/criancasModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const createCrianca = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Sorry, you are not authorized to access this')
      }

      const { name, cpf, age, gender, situation } = req.body

      const newCrianca = new CriancasModel({
        name, cpf, age, gender, situation
      })

      const savedCrianca = await newCrianca.save()

      res.status(201).json(savedCrianca)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
const findAllCriancas = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Sorry, you are not authorized to access this')
      }
      const allCriancas = await CriancasModel.find()
      res.status(200).json(allCriancas)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })

  }
}

const findCriancaById = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Sorry, you are not authorized to access this')
      }
      const findCrianca = await CriancasModel.findById(req.params.id)
      res.status(200).json(findCrianca)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
const situation = async (req, res) => {

  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Sorry, you are not authorized to access this')
      }

 const findSituation = await CriancasModel.find({situation:true})
 res.status(200).json(findSituation)
})
} catch (error) {
  res.status(500).json({ message: error.message })
}
}


const updateCrianca = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Sorry, you are not authorized to access this')
      }
      const { name, cpf, age, gender,situation } = req.body
      const updatedCrianca = await CriancasModel
        .findByIdAndUpdate(req.params.id, {
          name, cpf, age, gender, situation
        })
      res.status(200).json(updatedCrianca)

    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteCriancaById = async (req, res) => {  
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Sorry, you are not authorized to access this')
      }
      const { id } = req.params
      await CriancasModel.findByIdAndDelete(id)
      const message = "O cadastro da criança com esse id foi excluído com sucesso."
      res.status(200).json({ message: message })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}


module.exports = {
  createCrianca,
  findAllCriancas,
  findCriancaById,
  updateCrianca,
  deleteCriancaById,
  situation
}
