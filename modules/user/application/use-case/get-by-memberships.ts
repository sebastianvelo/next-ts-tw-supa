import UserService from "@/modules/user/application/service";
import User from "@/modules/user/domain/model";

interface MembershipWithUserId {
    userId: string;
}

const getUsersByMemberships = async (memberships: MembershipWithUserId[]): Promise<User[]> => {
    const userIds = memberships.map(m => m.userId);
    return UserService.getByIds(userIds);
};

export default getUsersByMemberships;
