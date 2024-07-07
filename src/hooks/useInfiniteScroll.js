import { useEffect } from "react";

const useInfiniteScroll = (fetchFunction,elementRef,data) => {
  const observerCallback = (entries,observer)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        fetchFunction();
        observer.disconnect();
      }
    })
  }
    useEffect(()=>{
        if(!data ||!Object.values(data).length){
          fetchFunction();
          return;
        }
        const elementObserver = new IntersectionObserver(observerCallback,{threshold:0.1});
        
        if(elementRef.current){
            elementObserver.observe(elementRef.current);
        }
        return ()=>{
            elementObserver.disconnect();
        }
      },[data,elementRef,fetchFunction]);
}

export default useInfiniteScroll;