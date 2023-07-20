function AddPoints(){

    return(
    <>
        <form>
            <h2>How much time to manually add:</h2>
        <br />
            <input type="number" value="0" id="addPoints"></input>
        <br />
        Points
        <br />
        <br />
        <button className="button special" type="submit" id="addPointsBtn">Add Points</button>
        </form>
    </>
    )
}
export default AddPoints