import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageMapper from 'react-img-mapper';

const Mapper = props => {
  const MAP = {
    name: 'my-map',
    areas: props.areas ? JSON.parse(props.areas) : []
  };

  console.log('MAP', MAP.areas);

  return (
    <Fragment>
      <div className='top_container'>
        <div className='top_content'>
          <p>
            Move your mouse on the picture and click to select your desired
            product.
          </p>
        </div>
      </div>
      <ImageMapper src={props.src} map={MAP} {...props} />
    </Fragment>
  );
};

Mapper.defaultProps = {
  width: 640,
  height: 480,
  lineWidth: 1,
  active: true,
  disabled: false,
  fillColor: 'rgba(255, 255, 255, 0.5)',
  strokeColor: 'rgba(0, 0, 0, 0.5)',
  natural: false,
  imgWidth: 0,
  stayHighlighted: false,
  stayMultiHighlighted: false,
  toggleHighlighted: false,
  parentWidth: 640,
  responsive: false
};

Mapper.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  lineWidth: PropTypes.number,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  fillColor: PropTypes.string,
  imgWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  natural: PropTypes.bool,
  stayHighlighted: PropTypes.bool,
  stayMultiHighlighted: PropTypes.bool,
  toggleHighlighted: PropTypes.bool,
  parentWidth: PropTypes.number,
  responsive: PropTypes.bool
};

export default Mapper;
