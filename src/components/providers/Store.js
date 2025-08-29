export const reducer = (state, action) => {

    switch(action.type){
        case "save":
            return saveData(state, action);

        default:
            return state;
    }
};

const saveData=(state, action)=>{
    const {name, data} = action.payload;
    return{
        ...state,
        [name]: data,
    }
}