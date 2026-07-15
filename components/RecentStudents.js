import React,{useEffect,useState} from "react";
import DashboardService from "../services/DashboardService";

function RecentStudents(){

const [students,setStudents]=useState([]);

useEffect(()=>{

DashboardService.getRecentStudents()

.then((response)=>{

setStudents(response.data);

})

.catch(console.error);

},[]);

return(

<div className="card shadow mt-4">

<div className="card-header bg-primary text-white">

Recent Students

</div>

<div className="card-body">

<table className="table table-hover">

<thead>

<tr>

<th>Name</th>

<th>Course</th>

<th>Email</th>

</tr>

</thead>

<tbody>

{

students.map(student=>(

<tr key={student.id}>

<td>

{student.firstName} {student.lastName}

</td>

<td>

{student.course}

</td>

<td>

{student.email}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

);

}

export default RecentStudents;