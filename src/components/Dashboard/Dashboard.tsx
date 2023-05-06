import { useContext } from "react"
import { Activity, AverageSessions, Performances, Score, NutritionnalCards, UserName } from "./index"
import { useGetNutrionnalUserInfos, useGetUserActivity, useGetUserInfo, useGetUserScore, useGetUserAverageSession, useGetUserPerfomance } from "../../hooks"
import { UserContext } from "../../context/UserContext"

const Dashboard = () => {
    const { userId, development } = useContext(UserContext)

    const { data: userActivity } = useGetUserActivity({ userId, development: development ?? false });
    const { data: userInfos } = useGetUserInfo({ userId, development: development ?? false });
    const { data: userScore } = useGetUserScore({ userId, development: development ?? false });
    const { data: userAverageSession } = useGetUserAverageSession({ userId, development: development ?? false });
    const { data: userPerformance } = useGetUserPerfomance({ userId, development: development ?? false });
    const { data: userNutritionnalInfos } = useGetNutrionnalUserInfos({ userId, development: development ?? false });


    return (
        <>
            {userInfos && <UserName userInfos={userInfos} />}

            <div className="rechart-container">
                <div className="left-side">
                    {userActivity && <Activity userActivity={userActivity} />}
                    <div className="parent-test">
                        {userAverageSession && <AverageSessions averageSessions={userAverageSession} />}
                        {userPerformance && <Performances userPerformance={userPerformance} />}
                        {userScore && <Score userScore={userScore}/>}
                    </div>
                </div>
                <div className="right-side">
                { userNutritionnalInfos && <NutritionnalCards nutritionnalInfo={userNutritionnalInfos}/>}
                </div>
            </div>
        </>
    )
}

export default Dashboard