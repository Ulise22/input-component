import './Input.css'

export default function Input ({ disabled, nameOfClass, helperText, error }) {
    return(
        <>
            <label className={`label ${error}`}>Label</label>
            <div>
                {disabled ? <input className={nameOfClass} type="text" placeholder="Placeholder" disabled /> : <input className={nameOfClass} type="text" placeholder="Placeholder" />}
                
            </div>
            {helperText && <p className={`helperText ${error}`}> {helperText} </p>}
        </>
    )
}