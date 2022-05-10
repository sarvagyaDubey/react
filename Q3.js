
function DashBoard(props) {
    
    return (
        
        <>
            <div class="card" >
                <h5  >Image Name : {props.ProdName}</h5>
                <img class="card-img-top" src={props.imageLink} alt=" " width="200px" height="200px"></img>
                <p >Some quick example text to build on the card title<br></br> and make up the bulk of the card's content.</p>

            </div>

        </>
    )
}
export default DashBoard
