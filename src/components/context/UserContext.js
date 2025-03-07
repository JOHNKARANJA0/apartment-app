
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();


export const UserProvider = ({children}) => {
    const nav = useNavigate();

    const [authToken, setAuthtoken] = useState(()=> localStorage.getItem('token')? localStorage.getItem('token') : null);

   const [currentUser, setCurrentUser] = useState(null);

//    console.log('====================================');
//    console.log(authToken);
//    console.log('====================================');

// Register User
    const register = (name, email, user_type, password) => {
        fetch('https://apartment-app-sever.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                user_type: user_type,
                password: password 
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        if(res.success)
            {
                nav('/login')
            alert(res.success)
        }
        else if(res.error){
            alert(res.error)
        }
        else{
            alert("Something went wrong")
        }
            
        })

    }


// Login User
    const login =  (email, password) => {
        fetch('https://apartment-app-sever.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password 
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        if(res.access_token)
            {
                setAuthtoken(res.access_token)
                localStorage.setItem('token', res.access_token)

                console.log(res);
                nav('/dashboard')
            alert("Login success")
        }
        else if(res.error){
            alert(res.error)
        }
        else{
            alert("Something went wrong")
        }
            
        })
        
    }

// Logout User
  function logout(){


        fetch('https://apartment-app-sever.onrender.com/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }}
            )
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if(res.success){
                    setAuthtoken(null)
                    localStorage.removeItem('token')
                    nav('/login')
                }
            
                else{
                    alert("Something went wrong")
                }
            })
  }


  useEffect(() => {
    if(authToken){
        fetch('https://apartment-app-sever.onrender.com/check_session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${authToken}`
            }
        
        })
        .then(res => res.json())
        .then(res => {
            setCurrentUser(res)
        })

        
    }
    else{
        setCurrentUser(null)
    }
  }, [authToken])



  const contextData ={
    currentUser,
    register,
    login,
    logout
  }


  return (
    <UserContext.Provider value={contextData}>
        {children}
    </UserContext.Provider >
  )


}
