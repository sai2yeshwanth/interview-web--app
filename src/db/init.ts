import { createAdminUser } from "./script";
import User from "./models/users";

const isDev = true
const dbInit = async() => {
    await User.sync({alter:isDev});
     //this function is used for creating admin automatically note this call only for creating table
     await createAdminUser()

}

export default dbInit