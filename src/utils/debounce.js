const debounce = (fn,delay)=>{
    let timer;
    return function(){
        const args = arguments;
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            return fn.apply(context,args);
        },delay)
    }
}

export default debounce;