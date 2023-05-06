import swimmingIcon from '/src/assets/images/swimming-icon.svg';
import meditationIcon from '/src/assets/images/meditation-icon.svg';
import bicycleIcon from '/src/assets/images/bicycle-icon.svg';
import weightsIcon from '/src/assets/images/weights-icon.svg';

/**
 * @returns {JSX.Element} - JSX element
 * @description - Aside of the app
 * @example
 * <Aside />
*/
export const Aside = (): JSX.Element => {
    return (
        <aside className='aside-navigation-bar'>
            <div className="aside-icons-list">
                <div className='icon-container'>
                    <img className="aside-icon" src={swimmingIcon} alt="" />
                    <img className="aside-icon" src={meditationIcon} alt="" />
                    <img className="aside-icon" src={bicycleIcon} alt="" />
                    <img className="aside-icon" src={weightsIcon} alt="" />
                </div>
            </div>
            <small className="aside-text">Copiryght, SportSee 2020</small>
        </aside>
    )
}