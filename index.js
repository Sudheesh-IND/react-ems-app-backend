//import express
const express=require('express')

//import cors
const cors=require('cors')

//import logic
const logic=require('./services/logic')

//creaating server
const server=express()

//using cors
server.use(cors({
    origin:'http://localhost:3000'
}))

//json format communication
server.use(express.json())

//starting server
const PORT=5000
server.listen(PORT,()=>{
    console.log('server connected to port 5000');
})

//get employee api call
server.get('/getemployee',(req,res)=>{
    logic.getEmployee().then((response)=>{
        res.status(response.StatusCode).json(response)
    })
})

//add emp;loyee api call
server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.StatusCode).json(response)

    })
})

//fetching particular
server.get('/getemployee/:id',(req,res)=>{
    logic.getParticular(req.params.id).then((response)=>{
        res.status(response.StatusCode).json(response)

    })
})

//deleting employee
server.delete('/deleteemployee/:id',(req,res)=>{
    logic.deleteEmp(req.params.id).then((response)=>{
        res.status(response.StatusCode).json(response)

    })
})

//editing
server.post('/update/:id',(req,res)=>{
    logic.editEmp(req.params.id,req.body.empId,req.body.empName,req.body.empAge,
        req.body.empDesignation,req.body.empSalary).then((response)=>{
        res.status(response.StatusCode).json(response)
    })
})