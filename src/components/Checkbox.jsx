import './Checkbox.css';

const Checkbox = () => {
  return (
    <label className="checkbox">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
      />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default Checkbox;