
//importing db.js

const { response } = require('express')
const db=require('./db')

//get employee details
const getEmployee=()=>{
    return db.Employee.find().then((response)=>{
        if(response){
            return{
                StatusCode:200,
                message:response
            }
        }else{
            return{
                statusCode:400,
                message:'not found'
            } 
        }
    })
}

//add employee
const addEmployee=(id,Name,Age,Designation,Salary)=>{
    return db.Employee.findOne({id}).then((response)=>{
       if(response){
        return{
            StatusCode:400,
            message:'Employee already present'
        }
       }else{
        const newEmp=new db.Employee(
            {
            id,Age,Name,Designation,Salary
            }
        )
        newEmp.save()

        return{
           StatusCode:200,
           message:'employee added successfully'
        }
       }
    })
}

//fetching of data of particualr id
const getParticular=(id)=>{
     return db.Employee.findOne({id}).then((response)=>{
        return{
            StatusCode:200,
            message:response
        }
     },(response)=>{
        return{
            StatusCode:400,
            message:'Data not found'
        }
     })
}

//delete employee
const deleteEmp=(id)=>{
    return db.Employee.deleteOne({id}).then((response)=>{
        return{
            StatusCode:200,
            message:'deleted'
        }
    })
}

//edit emp
const editEmp=(id,updid,Name,Age,Designation,Salary)=>{
     return db.Employee.findOne({id}).then((response)=>{

        response.id=updid
        response.Name=Name
        response.Age=Age
        response.Designation=Designation
        response.Salary=Salary

        response.save()

        return{
            StatusCode:200,
            message:'Updated Successfully'

        }
     })
}

module.exports={
    getEmployee,addEmployee,
    getParticular,deleteEmp,
    editEmp
}