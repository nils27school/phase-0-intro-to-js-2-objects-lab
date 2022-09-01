const employee = {
    name : 'Nils',
    streetAddress : '170 glades cir'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeObject = {...employee};
    newEmployeeObject[key] = value;
    return newEmployeeObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;
}