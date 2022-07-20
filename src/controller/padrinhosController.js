const padrinhoModel = require('../models/padrinhoModel')
const jwt = require('jsonwebtoken')
const { all } = require('../router/usersRoutes')
const { login } = require('./usersController')
const SECRET = process.env.SECRET


const createPadrinho = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Sorry, you are not authorized to access this")
      }

      const { name, cpf, telephone, adress,status } = req.body

      const newPadrinho = new padrinhoModel({
        name, cpf, telephone, adress, status
      })

      const savedPadrinho = await newPadrinho.save()

      res.status(201).json(savedPadrinho)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const getAllPadrinhos = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('where is the authorization?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Sorry, you are not authorized to access this")
      }
      const allPadrinhos = await padrinhoModel.find()
      
      for (let index = 0; index < allPadrinhos.length; index++) {
        const element = allPadrinhos[index]
        if(element.status===false){
          
          allPadrinhos.splice(index)
        }
        
      }
      res.status(200).json(allPadrinhos)
      })
     
    } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

const findById = async (req, res) => {
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

      const findPadrinho = await padrinhoModel.findById(req.params.id)
      res.status(200).json(findPadrinho)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updatePadrinho = async (req, res) => {
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
      const { name, cpf, telephone, adress,status } = req.body
      const updatedPadrinho = await padrinhoModel
        .findByIdAndUpdate(req.params.id, {
          name, cpf, telephone, adress, status
        })
      res.status(200).json(updatedPadrinho)

    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteById = async (req, res) => {
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
     
        await padrinhoModel.findByIdAndUpdate(id,{
          status:false
        })

        
      const message = "O cadastro do padrinho com esse id foi inativado."
      res.status(200).json({ message:message })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}


module.exports = {
  createPadrinho,
  getAllPadrinhos,
  findById,
  updatePadrinho,
  deleteById
}