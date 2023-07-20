function SetPoints(){

    return(
        <>
            <form>
                <h2>Set the Starting Points</h2>
            <input type="number" id="setPoints" value="0"> </input>
            <br />
            <p> Points </p>
            <br />
            <br />
            <button className="button special" type="submit" id="setPointsBtn">Set Points</button>
            </form>
        </>
    )
}

export default SetPoints