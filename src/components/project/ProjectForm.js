function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Enter the project name" />
            </div>
            <div>
                <input type="number" placeholder="Enter the total budget" />
            </div>
            <div>
                <select name="categoryId">
                    <option disabled>Select the category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create Project" />
            </div>
        </form>

    )
}
export default ProjectForm