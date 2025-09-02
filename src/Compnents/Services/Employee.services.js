import { db } from "../../../Config/Config"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"


//Get the Collection Reference from DB
const employeeCollectionRef = collection(db, "Employee")


//get all the employee
const getEmployess = () => {
    const employeeList = getDocs(employeeCollectionRef)
    return employeeList
}


//this method use for single employee
const getEmployee = (id) => {
    const employeeDoc = doc(db, "Employee", id)
    return employeeDoc
}

//add employee
const addEmployee = (newEmp) => {
    return addDoc(employeeCollectionRef, newEmp)
}

//update an employee

const updateEmployee = async (id, employeeUpdate) => {
    try {
        const employeeDoc = doc(db, "Employee", id)
        await updateDoc(employeeDoc, employeeUpdate)
        console.log("Employee Updated successfully");


    } catch (error) {
        console.log("Error upating employee", error);
    }
}

//delete an employee
const deleteEmployee = (id) => {
    const employeeDoc = doc(db, "Employee", id)
    return deleteDoc(employeeDoc)
}

const CURD_OP = {
    getEmployess,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}

export default CURD_OP