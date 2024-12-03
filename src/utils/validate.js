export const checkValidaData =(email, password, name)=>{
    const EmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const PasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const NameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!EmailValid) return "Email is not valid";
    if(!PasswordValid) return "Password is not valid";
    // if(!NameValid) return "Name is not valid";
    return null;
}