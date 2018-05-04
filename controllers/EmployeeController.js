var mongoose = require("mongoose");
var Employee = mongoose.model("Employee");
var employeeController = {};

employeeController.list = function(req, res) {
	
	Employee.find({}).exec(function (err, employees) {
	if (err) {
	  console.log("Error:", err);
	}
	else {
	  res.render("../views/employees/index", {employees: employees});
	}
	});
};

employeeController.show = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/show", {employee: employee});
    }
  });
}

employeeController.create = function(req, res) {
  res.render("../views/employees/create");
}

employeeController.save = function(req, res) {
  var employee = new Employee(req.body);

  employee.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/employees/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/employees/show/"+employee._id);
    }
  });
};

employeeController.edit = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/edit", {employee: employee});
    }
  });
};