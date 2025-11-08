import { Controller, useFormContext } from 'react-hook-form'
import styles from './index.module.css'

interface ITextFieldRHFProps {
  label?: string
  name: string
  type?: string
  placeholder?: string
  typeInput?: 'input' | 'textarea'
}

const TextFieldRHF = ({
  label,
  name,
  type,
  placeholder,
  typeInput = 'input',
  ...props
}: ITextFieldRHFProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <>
          {label && <label>{label}</label>}
          {typeInput === 'input' ? (
            <input
              className={styles.input}
              onChange={onChange}
              onBlur={onBlur}
              value={value || ''}
              ref={ref}
              placeholder={placeholder}
              type={type}
              {...props}
            />
          ) : (
            <textarea
              className={styles.input + ' ' + styles.textarea}
              onChange={onChange}
              onBlur={onBlur}
              value={value || ''}
              ref={ref}
              placeholder={placeholder}
              {...props}
            />
          )}
        </>
      )}
    />
  )
}

export default TextFieldRHF
