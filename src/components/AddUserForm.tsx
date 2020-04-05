import React, {FC, useState} from 'react';
import '../styles/AddUserForm.css'

interface AddUserFormProps {
    addUserData: Function
}


export const AddUserForm: FC<AddUserFormProps> = ({addUserData}) => {

    const [userName, setUserName] = useState('')

    const onFormSubmit = (event: any) => {
        event.preventDefault();
        if(userName.length === 0) return;
        addUserData(userName)
        setUserName('')
    }

    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <label htmlFor="user">User to be added: </label>
            <input 
                type="text" 
                name="user" 
                id="name"
                value={userName} 
                maxLength={55}
                placeholder='Enter User Name'
                onChange={(event) => setUserName(event.target.value)} />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}