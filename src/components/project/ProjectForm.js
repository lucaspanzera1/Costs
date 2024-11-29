import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ btnText }){
    return (
        <form>
            <Input 
                type="text" 
                text="Project Name"
                name="name"
                placeholder="Enter the project name"
            />
                        <Input 
                type="number" 
                text="Project Buget"
                name="budget"
                placeholder="Enter the total budget"
            />
            <Select 
                name="categoryId" 
                text="Select the category" 
            />
            <SubmitButton text={btnText} />
        </form>

    )
}
export default ProjectForm