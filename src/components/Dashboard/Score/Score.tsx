import PropTypes from 'prop-types';
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { UserScoreTransformed } from '../../../interfaces/user-transformed.interface';


interface ScoreInterface {
  score: UserScoreTransformed['score'];
  fill: string;
}

interface ScoreProps {
  userScore: UserScoreTransformed
}

/**
 * @param {ScoreProps} userScore - averageSessions
 * @returns {JSX.Element} - JSX element
 * @description - Display the score of the user in a radial bar chart
 * @example
 * <Score userScore={userScore} />
 */
export const Score = ({ userScore }: ScoreProps): JSX.Element => {

  const scoreDisplayed = userScore?.score && userScore.score * 100;

  // change the color of the score depending on the value
  const color: string = scoreDisplayed && scoreDisplayed < 50 ? '#FF8042' : '#00C49F';

  const data: ScoreInterface[] = [{
    score: scoreDisplayed,
    fill: color,
  }];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="70%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
        style={{ backgroundColor: '#FBFBFB' }}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar background dataKey="score" cornerRadius={'50%'} />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className='label2'
        >
          Score
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className='value2'
        >
          {data[0].score}%
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className='helpText2'
        >
          de votre
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className='helpText2'
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

Score.propTypes = {
  userScore: PropTypes.object.isRequired
}
