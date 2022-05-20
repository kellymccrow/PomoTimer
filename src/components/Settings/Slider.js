import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderModule = (props) => {
  return (
    <Slider
      value={props.value}
      max={props.max}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      trackStyle={{
        border: '2px #feedd6 solid',
        backgroundColor: '#f27059',
        borderRadius: '20px',
        height: 35,
      }}
      railStyle={{
        border: '2px #feedd6 solid',
        backgroundColor: '#f27059',
        borderRadius: '20px',
        height: 35,
      }}
      handleStyle={{
        backgroundColor: '#feedd6',
        borderColor: '#feedd6',
        height: 35,
        width: 35,
        outline: 'none',
        marginTop: '0',
        opacity: 1,
      }}
    />
  );
};

export default SliderModule;
