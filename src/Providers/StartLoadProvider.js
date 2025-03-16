'use client'

import Loading from "@/app/loading";

const { useEffect, useState } = require("react")


function StartLoadProvider({children}) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time before showing the homepage
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed (in ms)

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
 
       {isLoading &&  <Loading/> }
     
    
    </>
  )
}

export default StartLoadProvider
