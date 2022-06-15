const counterReducer = (state,action) =>{
    if(action === 'inc'){
        return state+1;
    }
    else if(action === 'dec'){
        return state-1;
    }
}

export {counterReducer}