import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';
import Employee from './Employee';

const EmployeeList = () => {

    const navigate= useNavigate();

    const [loading,setLoading]=useState(true);
    const [employees,setEmployees]=useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
            
                const response = await EmployeeServices.getEmployee();
                setEmployees(response.data);

            }
            catch (error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);


    const deleteEmployee = (e, id) =>{
        e.preventDefault();
        EmployeeServices.deleteEmployee(id).then((res) => {
            if(employees){
                setEmployees((prevElement) => {
                    return prevElement.filter((employee)=> employee.id !== id);
                });
            }
        });

     };




  return (
    <>
    <div className=" my-8 mx-auto container ">
    <div className="h-12">
        <button onClick={()=> navigate("/addEmployee")} className="rounded bg-slate-700 text-white px-6 py-2 font-semibold ">Add Employee</button>
    </div>
    </div>
    <div className="flex shadow border-b">
        <table className="min-w-full">
            <thead className="bg-gray-50">
                <tr>
                <th className="text-gray-500 text-left font-medium px-6 py-3 uppercase tracking-wider ">First Name</th>
                <th className="text-gray-500 text-left font-medium px-6 py-3 uppercase tracking-wider ">Last Name</th>
                <th className="text-gray-500 text-left font-medium px-6 py-3 uppercase tracking-wider ">Email Id </th>
                <th className="text-gray-500 text-right font-medium px-6 py-3 uppercase tracking-wider ">Actions</th>
                </tr>
            </thead>
            { !loading && (
            <tbody className="bg-white">
                {employees.map((employee) => (
                    <Employee deleteEmployee={ deleteEmployee}   employee={employee} key={employee.id}></Employee>
                ))}

            </tbody>
            )}

        </table>
        
    </div>
    </>
  );
};

export default EmployeeList