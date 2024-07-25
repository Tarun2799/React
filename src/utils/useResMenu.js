import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import axios from 'axios';


const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
  
    useEffect(() => {
      fetchMenu();
    }, [resId]); // Add resId to the dependency array to refetch when it changes
  
    const fetchMenu = async () => {
      try { 
        const response = await axios.get('https://api.allorigins.win/get', {
          params: {
            url: `${MENU_API}${resId}`, // Replace with your actual URL
          },
        });
  
        const fetchedData = JSON.parse(response.data.contents); // Parse the JSON data
  
        setResInfo(fetchedData.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };
  
    return resInfo;
  };

export default useResMenu;


