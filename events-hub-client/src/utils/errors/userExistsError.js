export default class UserExistsError extends Error{
    constructor(username, useremail, ...params){
        super(...params);
        this.username = username;
        this.useremail = useremail;
    }
}