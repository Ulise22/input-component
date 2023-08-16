import './Input.css'

export default function Input ({ disabled, nameOfClass, helperText }) {
    return(
        <>
            <label className='label'>Label</label>
            <div>
                {disabled ? <input className={nameOfClass} type="text" placeholder="Placeholder" disabled /> : <input className={nameOfClass} type="text" placeholder="Placeholder" />}
                
            </div>
            {helperText && <p> {helperText} </p>}
        </>
    )
}