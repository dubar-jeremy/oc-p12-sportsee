import PropTypes from 'prop-types';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { UserPerformanceTransformed } from '../../../interfaces/user-transformed.interface';


interface PerformanceProps {
  userPerformance: UserPerformanceTransformed[]
}

/**
 * @param {PerformanceProps} userPerformance - averageSessions
 * @returns {JSX.Element} - JSX element
 * @description - Display the average sessions of the user in a line chart
 * @example
 * <Performances userPerformance={userPerformance} />
 */
export const Performances = ({ userPerformance }: PerformanceProps): JSX.Element => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="50%"
        data={userPerformance}
        style={{ backgroundColor: '#282D30' }}
      >
        <PolarGrid stroke="white" />
        <PolarAngleAxis
          stroke="white"
          dataKey="subject"
          tick={{ fontSize: '10px' }}
          tickLine={false}
        />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#e60000"
          fill="#e60000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

Performances.propTypes = {
  userPerformance: PropTypes.array.isRequired
}