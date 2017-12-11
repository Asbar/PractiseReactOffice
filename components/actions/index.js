export const selectUser = (user) =>{
    console.log("You clicked "+user.first)
    debugger;
    return{
        type:"USER_SELECTED",
        payload:user
    }
};