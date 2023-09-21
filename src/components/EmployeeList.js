import React from 'react';

const EmployeeList = () => {
  return (
    <>
    <div className=" my-8 mx-auto container ">
    <div className="h-12">
            <button className="rounded bg-slate-700 text-white px-6 py-2 font-semibold ">Add Employee</button>
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
            <tbody className="bg-white">
                <tr>
                    <td className="px-6 text-gray-500 py-4 text-left "> 
                    <div className=" text-sm  "> Shashank  </div>
                    </td>
                    <td className="px-6 text-gray-500 py-4 text-left ">
                        <div className=" text-sm  "> Singhal  </div>
                    </td>
                    <td className="px-6 text-gray-500 py-4 text-left ">
                        <div className=" text-sm "> Shashank@gmail.com  </div>
                    </td>
                   
                </tr>
            </tbody>

        </table>

    </div>
    </>
  );
};

export default EmployeeList