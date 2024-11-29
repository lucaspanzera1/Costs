import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.formControl}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
            <option>Select the category</option>
        </select>
    </div>
    )
}
export default Select