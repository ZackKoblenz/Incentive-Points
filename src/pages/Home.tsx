function Home(){
    return(
        <>
            <form>
                <h2>Tips and Bits:</h2>
                <div className="container">
                    <div className="noWrap">
                        <input type="number" name="pointsPerBits" id="pointsPerBits" defaultValue="3"></input>
                    </div>
                        <p>points per</p>
                    <div className="noWrap noWarpPlus">
                        <input type="number" name="perBits" id="perBits" defaultValue="100"></input>
                    </div>
                        <p>Bit(s)</p>
                    </div>
                <div className="container">
                    <div className="noWrap">
                        <input type="number" name="pointsPerDollar" id="pointsPerDollar" defaultValue="3"></input>
                    </div>
                        <p>points per</p>
                    <div className="noWrap noWarpPlus">
                        <input type="number" name="perDollar" id="perDollar" defaultValue="1"></input>
                    </div>
                        <p>Dollar(s)</p>
                    </div>
                <h2>Subscriptions:</h2>
                <div className="container">
                    <input type="checkbox" name="includeGifts" value="true" checked="" id="includeGifts"></input>
                    <p>include gifted subs </p>
                </div>
                <div className="container">
                    <input type="checkbox" name="includeResubs" value="true" checked="" id="includeResubs"></input>
                    <p>include resubscriptions</p>
                </div>
                <div className="container">
                    <input type="number" name="pointsPerSub" id="pointsPerSub" defaultValue="10"></input> 
                    <p>points per Tier 1 Sub</p>
                </div>
                <div className="container">
                <input type="number" name="pointsPerSubT2" id="pointsPerSubT2" defaultValue="20"></input> 
                <p>points per Tier 2 Sub</p>
                </div>
                <div className="container">
                <input type="number" name="pointsPerSubT3" id="pointsPerSubT3" defaultValue="60"></input> 
                <p>points per Tier 3 Sub</p>
                </div>
                <br></br>
                <br></br>
                <button className="button special" type="submit" id="saveSetBtn">Save Settings</button>
            </form>
            <br></br>
            
        </>
    )
}
export default Home