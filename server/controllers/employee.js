const Employee = require("../models/Employee");
module.exports = {
    getEmployeeRecords: async function(req, res){
        var perPage = 25
            , page = Math.max(0, req.params.page)

        Employee.find()
            .select('name department manager salary dob age')
            .limit(perPage)
            .skip(perPage * page)
            .sort({
                name: 'asc'
            })
            .exec(function(err, employees) {
                if(err){
                    res.status(500).send({
                        success:false,
                        status:500,
                        msg: "Something went wrong"
                    })
                }
                Employee.count().exec(function(err, count) {
                    if(err){
                        res.status(500).send({
                            success:false,
                            status:500,
                            msg: "Something went wrong"
                        })
                    }
                    res.status(200).send({
                        success: true,
                        employees: employees,
                        page: page,
                        pages: Math.ceil(count / perPage)
                    })
                })
            })
    },
    saveEmployeeRecords: async function(req,res){
        try{
            const email = req.email;
            const {
                employeesList
            } = req.body;
            let employeesData = [];
            console.log(typeof employeesList);
            if(employeesList && employeesList.length > 0){
                console.log(employeesList);
                for(const employee of employeesList){
                    const employeeObj = {
                        email,...employee
                    };
                    employeesData.push(employeeObj);
                }
                const response = await Employee.insertMany(employeesData);
    
                console.error(response);
            }
            res.status(200).send({
                success:true,
                status:200,
                msg: "Employees Records Saved"
            })
            
        }catch(err){
            console.log(err);
            res.status(500).send({
                success:false,
                status:500,
                msg: "Something went wrong"
            })
        }
    },
    deleteAllEmployeeRecords:async function(req,res,next){
        try{
            const userEmail = req.email;
            const response = await Employee.deleteMany({email:userEmail});
            res.status(200).send({
                success:false,
                status:200,
                data:response,
                msg: "All records deleted"
            })

        }catch(err){
            res.status(500).send({
                success:false,
                status:500,
                msg: "Something went wrong"
            })
        }
    }   
}