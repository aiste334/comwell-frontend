import { useEffect, useState, useRef } from "react"

const Input = ({ label, children, value, className, type, form, ...otherProps }) => {

  const [focus, setFocus] = useState()
  const inputRef = useRef(null)
  const selectRef = useRef(null)

  useEffect(() => {
    if(focus) {
      inputRef?.current?.focus()
      selectRef?.current?.focus()
    }
  }, [focus])

  const contentExists = type === 'date' || type === 'select' || focus || value
  const cursorType = type === 'select' ? '' : 'cursor-text'

  const name = form && form.name
  const errors = form && form.errors && form.errors[name]
  const register = form && form.register || (() => {})
  const validation = form && form.validation

  return (
    <div onClick={() => setFocus(true)} 
      className={`${errors ? 'border-red-400 text-red-400' : 'border-cw-gray-300'} relative flex flex-col min-w-[100px] ${cursorType} w-full rounded-md border-[1px] ${focus ? 'border-black' : 'hover:border-gray-400'} px-3 py-2 ${className}`}>
        <label className={`text-active-gray ${cursorType} transition-all absolute ${!contentExists ? 'text-base top-0 bottom-0 my-auto leading-none flex items-center font-semibold' : 'text-xs' }`}>{label}</label>
        <div className={`text-xs invisible ${cursorType}`}>a</div>
        { type !== 'select' ?
          <input
            {...register(name, validation)}
            ref={inputRef} 
            onFocus={() => setFocus(true)} 
            onBlur={() => setFocus()} 
            value={value} 
            type={type} 
            className={`autofill:bg-white text-base cursor-text font-semibold border-none outline-none`}
            {...otherProps}
          />
          :
          <select 
            ref={selectRef} 
            onFocus={() => setFocus(true)} 
            onBlur={() => setFocus()} 
            value={value} 
            className={`text-base font-semibold border-none outline-none -mx-1`}
            {...otherProps}
          >
            {children}
          </select>
        }
    </div>
  )
}

export default Input