
//import mongoose
const mongoose=require('mongoose')

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/ems')


//creating model
const Employee=mongoose.model('Employee',{
    id:Number,
    Name:String,
    Age:Number,
    Designation:String,
    Salary:Number
})

module.exports={
    Employee
}