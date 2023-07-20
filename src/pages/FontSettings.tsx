function FontSettings(){

    return(
    <>
    <br></br>
    <br></br>
        <form>
        <div>
            <input type="number" defaultValue="72" id="fontSize"></input>
            <p>Size</p>
        </div>
        <div>
            <select name="weight" id="fontWeight">
                <option defaultValue="200">Light</option>
                <option defaultValue="400">Normal</option>
                <option defaultValue="700">Bold</option>
            </select>
            <p>Weight</p>
        </div>
        <div>
            <input type="color" id="fontColor"></input>
            <p>Color</p>
        </div>
        <button class="button special" type="submit" id="saveSetBtn">Save Settings</button>
        </form>
    </>
    )
}
export default FontSettings