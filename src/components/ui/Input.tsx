import React, {LegacyRef} from 'react'
import { InputProps } from '@/utils/types';

const Input = ({label, placeholder, value, type}: InputProps, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label"><span className="label-text text-neutral">{label}</span></label>
      <input ref={ref} defaultValue={value} type={type} placeholder={placeholder} className="input input-bordered w-full max-w-xs outline-none border-white" readOnly={value ? true:false}/>
    </div>
  )
};

export default React.forwardRef(Input);