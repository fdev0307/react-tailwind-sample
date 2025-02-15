import React from 'react';

function RadioButtonGroup(props) {

  const {options, onChange, current} = props;
  return (
    <div className="flex gap-10">
    {options.map(opt => (
      <div className="inline-flex items-center" key={opt.value}>
      <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor={`radioGroup_${opt.value}`}>
        <input name="type" type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id={`radioGroup_${opt.value}`} value={opt.value} onChange={onChange} checked={current===opt.value}  />
        <span
          className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor={`radioGroup_${opt.value}`}>
        {opt.text}
      </label>
    </div>
    ))}
    </div> 
  );
}

export default RadioButtonGroup;
