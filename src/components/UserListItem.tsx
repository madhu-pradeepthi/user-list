import React from 'react';
import '../styles/UserListItem.css';

interface UserListItemProps {
    user: User,
    removeUser: any,
    index: number
}

export const UserListItem: React.FC<UserListItemProps> = ({user, removeUser, index}) => {
    return (
            <li key={`user'${index}`} className={user.randomUserSelected ? 'userSelected' : undefined}>
                <label>{user.name}</label>
                <button onClick={() => removeUser(index)}>Delete</button>
            </li>
    );
}