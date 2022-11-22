import { Btn } from './btn.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => {
    return (
      <Btn key={option} name={option} onClick={onLeaveFeedback}>
        {option}
      </Btn>
    );
  });
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
