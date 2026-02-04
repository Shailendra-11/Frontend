import { useEffect, useState } from "react"

const FetchDatas = (url) => {
     const [data, setData] = useState(null)
     const [Loading, setLoading] = useState(false)
     const [error, setError] = useState("")
 
     const fetchData = async (url) => {
          setLoading(true);
          setError(""); 
        
          try {
            const response = await fetch(url);
        
            if (!response.ok) {
              throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        
            const result = await response.json();
            setData(result);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false); 
          }
        };
        

 return { data, Loading, error, fetchData };
}
export default FetchDatas