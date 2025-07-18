import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showlogin, setShowlogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = "http://localhost:4000"; // ✅ your Express backend URL
  const navigate = useNavigate();

  const loadCreditsData = async ()=>{
   try {
      const {data} = await axios.get(backendUrl + '/api/user/credits', {headers: {token}})

      if(data.success) {
         setCredit(data.credits);
         setUser(data.user)
      }
   } catch(error) {
      console.log(error);
      toast.error(error.message);
   }
  }

  const generateImage = async (prompt)=> {
      try {
         const {data} = await axios.post(
           backendUrl + "/api/user/image/generate-image", {prompt}, {headers: {token}}
         );

         if(data.success) {
            loadCreditsData();
            return data.resultImage;
         }
         else {
            toast.error(data.message);
            loadCreditsData();
            if(data.creditBalance === 0) {
               navigate('/buy');

            }
         }
      }catch(error) {
         toast.error(error.message)
      }
  }

  const logout = () => {
   localStorage.removeItem('token');
   setToken('');
   setUser(null)
  }

  useEffect(()=>{
      if(token) {
         loadCreditsData();
      }
  }, [token])

  const value = {
    user,
    backendUrl,
    setUser,
    showlogin,
    setShowlogin,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
export default AppContextProvider