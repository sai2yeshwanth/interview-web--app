import User from "./models/users";
import { Op} from 'sequelize'

// script for creating admin automatically if admin is not your database
export async function createAdminUser(){
    const username :string = "admin"
    const primaryProfile: number = 1
    const password :string = "admin@1234"
    const status : number = 1
    //check if admin exist or not if admin exist it exist funcation else create admin record
    const existingAdminCredentialCount = await User.count({
        where:{ 
            [Op.or]: [
                {user_name: username}]}})
    
    if(existingAdminCredentialCount > 0){
        return;
    }
    // create object for admin record
    const adminCredential = {
        user_name : username,
        password : password,
        primary_profile: primaryProfile,
        status : status
    }
    //creating admin record query
    await User.create(adminCredential)

}