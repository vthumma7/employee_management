import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Employee = ( {employee , deleteEmployee } ) => {

    const navigate= useNavigate();

    const editEmployee=(e,id)=>{
       
        e.preventDefault();
        navigate(`/editEmployee/${id}`);

    }

    return (
   <>
        <tr>
                    <td className="px-6 text-gray-500 py-4 text-left ">
                    <div className=" text-sm  "> {employee.firstName}  </div>
                    </td>
                    <td className="px-6 text-gray-500 py-4 text-left ">
                        <div className=" text-sm  "> {employee.lastName}  </div>
                    </td>
                    <td className="px-6 text-gray-500 py-4 text-left ">
                        <div className=" text-sm "> {employee.emailId }</div>
                    </td>
                    <td className="px-6 text-gray-500 py-4 text-right ">
                        <a
                        onClick={(e,id)=> editEmployee(e, employee.id)}
                        className=" text-indigo-500 hover:text-indigo-800 hover:cursor-pointer ">Edit/</a>
                        <a onClick={(e, id) => deleteEmployee(e , employee.id)}
                        className=" text-red-500 hover:text-red-800 hover:cursor-pointer  ">Delete</a>
                    </td>
        </tr>
        </>
  );
};

export default Employee;
