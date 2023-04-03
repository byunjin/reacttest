import React from "react";

const User = ({userData}) =>{
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () =>{
    const users = [
        {email: 'user1@gmail.com', name: '마동석'},
        {email: 'tea@gmail.com', name: '오태식'},
        {email: 'jong@gmail.com', name: '마종두'},
        {email: 'kim@gmail.com', name: '김갑수'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    );
}

export default UserList;