import './Input.css'

export default function Input ({ disabled, nameOfClass, helperText, error, startIcon, endIcon, value, row }) {
    return(
        <>
            <label className={`label ${error}`}>Label</label>
            <div>
                {startIcon && <span className="material-icons startIcon">call</span>}
                {disabled ? <input className={nameOfClass} type="text" placeholder="Placeholder" disabled /> : row ? <textarea className={nameOfClass} rows="4" /> : <input className={nameOfClass} type="text" placeholder="Placeholder" value={value} />}
                {endIcon && <span class="material-icons endIcon">lock</span>}
            </div>
            {helperText && <p className={`helperText ${error}`}> {helperText} </p>}
        </>
    )
}