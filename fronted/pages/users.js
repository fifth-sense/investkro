import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {getUserList} from './../hooks/getUseList'
const User = () => {
    const [userList, setUserLists ] = useState([]);
    const URL="http://localhost:3001/users";
    const fetchUserList =async () => {
       let res = await getUserList()
       console.log(res)
       setUserLists(res)
    }

    useEffect(()=>{
        fetchUserList();
    }, []);
    console.log("user0ss", userList)
    return(
       <div >
        <h3>Hi ruby</h3>
        <table>
            <th>1</th>
        </table>
        {userList.map((ele,i)=>(
            <div >
                <table>
                   
                <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Website</th>
                   
                    
                    <tbody>
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.Name}</td>
                            
                            <th>{ele.email}</th>
                            <td>{ele.phone}</td>
                            <td>{ele.username}</td>
                            <td>{ele.website}</td>
                         
                        </tr>
                    </tbody>
                </table>
            </div>
        ))}

       </div>
    )
}
export default User;