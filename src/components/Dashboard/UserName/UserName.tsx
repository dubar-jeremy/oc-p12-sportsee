import PropTypes from 'prop-types';
import { UserInfo } from '../../../interfaces/user.interface';

interface UserNameProps {
    userInfos: UserInfo
}

/**
 * @param {UserNameProps} userInfos - averageSessions
 * @returns {JSX.Element} - JSX element
 * @description - Display the user name and a message
 * @example
 * <UserName userInfos={userInfos} />
 */
export const UserName = ({ userInfos }: UserNameProps): JSX.Element => {
    return (
        <div className="hero">
            <div>
                <h1>Bonjour <span className="firstname">{userInfos?.firstName}</span></h1>
            </div>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

UserName.propTypes = {
    userInfos: PropTypes.object.isRequired
}

