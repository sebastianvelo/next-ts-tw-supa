import InstitutionRole from "@/lib/institution-membership/model/enum/institution-role";
import User from "@/lib/user/model";

interface UserWithRole extends User {
    institutionRole?: InstitutionRole;
}

export default UserWithRole;