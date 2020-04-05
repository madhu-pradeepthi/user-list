import React from 'react';
import { UserListItem } from './UserListItem';
import '../styles/UserList.css'

interface UserListProps {
   userData : Array<User>,
   removeUser: any
}

export const UserList: React.FC<UserListProps> = ({userData, removeUser}) => {
    

    const rows = userData.map((userInstance, index) => {
        return (
            <UserListItem key={index} user={userInstance} index={index} removeUser={removeUser}></UserListItem>        
        );
    });

    return <React.Fragment><ul className='user-list' key='userList'>{rows}</ul></React.Fragment>

}
