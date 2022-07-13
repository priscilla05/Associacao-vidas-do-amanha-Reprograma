const Users= require('../models/usersModel')
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const SECRET = process.env.SECRET
 
 
 
const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
 
    const user = new Users(req.body)
   
    user.save(function (err) {
      if (err) {
        res.status(500).send({message: err.message})
      }
      res.status(201).send(user)
    })
  }

  const login = (req, res) => {
    Users.findOne({email: req.body.email}, function (error, user) {
      if (error) {
        return res.status(500).send({message: "message invalid authorization"})
      }
      if (!user) {
        res.status(404).send(`There is no user with this email: ${req.body.email}`)
      }
     
      const senhaValida = bcrypt.compareSync(req.body.senha, user.senha)
 
      if (!senhaValida) {
        res.status(403).send('Invalid password')
      }
     
      const token = jwt.sign({email: req.body.email}, SECRET)
       return res.status(200).json({token})
    })
   
  }
 
  const getAll = (req, res) => {
    Users.find(function (err, users) {
      if (err) {
        res.status(500).send({message: err.message})
      }
      res.status(201).send(users)
    })
  }
 
  const deleteById = async (req, res) => {
    try {
 
      const { id } = req.params
      await Users.findByIdAndDelete(id)
     
      res.status(200).json({message: "Usuário deletado!"})
    } catch (error) {
      console.error(error)
      res.status(500).json({message: error.message})
    }
  }
 
  
   
  module.exports = {
    create,
    login,
    getAll,
    deleteById
  }
