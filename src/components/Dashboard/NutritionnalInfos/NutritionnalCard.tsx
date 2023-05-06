import PropTypes from 'prop-types';

interface NutritionnalCardProps {
    dataType: string;
    dataUnit: string;
    dataValue: number;
    icon: string;
}

/**
 * @param {NutritionnalCardProps} - averageSessions
 * @returns {JSX.Element} - JSX element
 * @description - Display the average sessions of the user in a line chart
 * @example
 * <NutritionnalCard dataType="calories" dataValue={nutritionnalInfo.calorieCount} dataUnit="Kcal" icon={fireIcon} />
 */
export const NutritionnalCard = ({ dataType, dataValue, dataUnit, icon }: NutritionnalCardProps): JSX.Element => {
    return (
        <div className="card">
            {icon && <img src={icon} alt=""/>}
            <div className="card-content">
                <div className="card-value">{dataValue}{dataUnit}</div>
                <div className="card-title">{dataType}</div>
            </div>
        </div>
    );
}


NutritionnalCard.propTypes = {
    dataType: PropTypes.string.isRequired,
    dataUnit: PropTypes.string.isRequired,
    dataValue: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
}