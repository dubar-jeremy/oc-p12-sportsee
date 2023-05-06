import PropTypes from 'prop-types';
import fireIcon from '/src/assets/images/fire-icon.svg';
import chickenThighIcon from '/src/assets/images/chicken-thigh-icon.svg';
import appleIcon from '/src/assets/images/apple-icon.svg';
import burgerIcon from '/src/assets/images/burger-icon.svg';

import { NutritionnalCard } from './NutritionnalCard';
import { UserNutritionnalInfosTransformed } from '../../../interfaces/user-transformed.interface';


interface NutrionnalCardsProps {
    nutritionnalInfo: UserNutritionnalInfosTransformed
}

/**
 * @param {NutrionnalCardsProps} nutritionnalInfo - averageSessions
 * @returns {JSX.Element} - JSX element
 * @description - Display the average sessions of the user in a line chart
 * @example
 * <NutritionnalCards nutritionnalInfo={nutritionnalInfo} />
 */
export const NutritionnalCards = ({ nutritionnalInfo }: NutrionnalCardsProps): JSX.Element => {

    return (
        <div className="cardsContainer">
            <NutritionnalCard
                dataType="calories"
                dataValue={nutritionnalInfo.calorieCount}
                dataUnit="Kcal" icon={fireIcon}
            />
            <NutritionnalCard
                dataType="proteines"
                dataValue={nutritionnalInfo.proteinCount}
                dataUnit="g"
                icon={chickenThighIcon}
            />
            <NutritionnalCard
                dataType="glucides"
                dataValue={nutritionnalInfo.carbohydrateCount}
                dataUnit="g"
                icon={appleIcon}
            />
            <NutritionnalCard dataType="lipides" dataValue={nutritionnalInfo.lipidCount} dataUnit="g" icon={burgerIcon} />
        </div>
    )
}

NutritionnalCards.propTypes = {
    nutritionnalInfo: PropTypes.object.isRequired
}
