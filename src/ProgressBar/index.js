import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ProgressBar extends React.Component {
  state = {};

  render() {
    const { theme, progress, total } = this.props;
    return (
      <div
        className={classNames('fur-progress-bar', {
          [`fur-progress-bar-${theme}`]: theme,
        })}
      >
        <div
          className="fur-progress-bar-progress"
          style={{ width: `${(progress / total) * 100}%` }}
        />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  theme: 'success',
  progress: 0,
  total: 100,
};

ProgressBar.propTypes = {
  theme: PropTypes.string,
  progress: PropTypes.number,
  total: PropTypes.number,
};

export default ProgressBar;
