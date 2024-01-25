import { fetchUserTokensById, generateUserTokensForId } from "@/utils/actions"
import { UserButton, currentUser, auth } from "@clerk/nextjs"

const MemberProfile = async () => {
    const user = await currentUser()
    const {userId} = auth()

    let tokens
    tokens = await fetchUserTokensById(userId)
    if(!tokens){
        tokens = await generateUserTokensForId(userId)
    }

    return (
        <div className="px-4 flex items-center gap-2">
            <UserButton afterSignOutUrl="/"/>
            <p>{user.emailAddresses[0].emailAddress}</p>
        </div>
    )
}

export default MemberProfile