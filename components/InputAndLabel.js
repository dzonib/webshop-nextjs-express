export default function InputAndLabel({ name, type, setValue, errors }) {
  return (
    <>
      <label htmlFor={name}>{name === 'password2' ? 'Repeat your password' : name}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={e => setValue(e.target.value)}
        autoComplete='off'
      />
      { errors && <h4 style={{color: 'red', margin: 0}}>{ errors }</h4> }
    </>
  )
}
