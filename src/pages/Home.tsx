function Home(){
    return(
        <>
            <form>
                <h2>Tips and Bits:</h2>
                <input type="number" name="pointsPerBits" id="pointsPerBits" value="3"></input>
                <p>points per</p>
                <input type="number" name="perBits" id="perBits" value="100"></input>
                <p>Bit(s)</p>
                <input type="number" name="pointsPerDollar" id="pointsPerDollar" value="3"></input>
                <p>points per</p>
                <input type="number" name="perDollar" id="perDollar" value="1"></input>
                <p>Dollar(s)</p>
                <br></br>
                <br></br>
                <h2>Subscriptions:</h2>
                <input type="checkbox" name="includeGifts" value="true" checked="" id="includeGifts"></input>
                <p>include gifted subs </p>
                <input type="checkbox" name="includeResubs" value="true" checked="" id="includeResubs"></input>
                <p>include resubscriptions</p>
                <input type="number" name="pointsPerSub" id="pointsPerSub" value="10"></input> 
                <p>points per Tier 1 Sub</p>
                <br></br>
                <br></br>
                <input type="number" name="pointsPerSubT2" id="pointsPerSubT2" value="20"></input> 
                <p>points per Tier 2 Sub</p>
                <br></br>
                <br></br>
                <input type="number" name="pointsPerSubT3" id="pointsPerSubT3" value="60"></input> 
                <p>points per Tier 3 Sub</p>
                <br></br>
                <br></br>
                <button class="button special" type="submit" id="saveSetBtn">Save Settings</button>
            </form>
        </>
    )
}
export default Home