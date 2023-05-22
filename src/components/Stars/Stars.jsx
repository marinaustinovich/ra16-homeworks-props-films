import React from 'react'
import PropTypes from 'prop-types'
import Star from '../Star/Star'

function Stars(props) {
    const { count } = props;

    if (!Number.isInteger(count) || count < 1 || count > 5) return null;

    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }, (_, index) => <Star key={index} />)}
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

export default Stars
