
import '../Asserts/style/Catagori.css'
// import Footer from "../Components/Footer"

function Catagori(){
    return(
        <div className='Cate'>
            <div className = "ha1"  >
           <h1>Shop by Category</h1>
           </div>
        <div className="catImg ">
            
          <div className="cat1 col-md-4 col-sm-12">
              <div style={{textAlign:'center', marginLeft: 200, marginTop: 80}}>
                <p style={{fontSize: 25, fontWeight: 'bold', fontFamily: 'auto', marginBottom:5}}>Owmen'S</p>
                <p style={{ border: '1px solid yellow', borderRadius: 20, width: 140, marginLeft:50, fontWeight: 700, marginBottom: 0, backgroundColor: 'yellow'}}>Best New Deals</p>
                <p style={{fontFamily: 'cursive', color: 'blue', fontWeight: 'bold', fontSize: 17}}>New Collection</p>
              </div>  
          </div>

           <div className="cat2 col-md-4 col-sm-12">
              <div style={{textAlign:'center', marginLeft: 200, marginTop: 80}}>
                 <p style={{fontFamily: 'cursive', color: 'blue', fontWeight: 'bold', fontSize: 17, marginBottom: 'auto'}}>Discount!</p>
                 <p style={{fontSize: 25, fontWeight: 'bold', fontFamily: 'auto', marginBottom: 'auto'}}>Winter Cloth</p>
                 <p >New Collection</p>
              </div>
           </div>

           <div className="cat3 col-md-4 col-sm-12">
                <div style={{textAlign:'center', marginLeft: 200, marginTop: 80}}>
                  <p style={{fontSize: 25, fontWeight: 'bold', fontFamily: 'auto', marginBottom:5}}>Man'S Cloth</p>
                  <p style={{ border: '1px solid yellow', borderRadius: 20, width: 140, marginLeft:50, fontWeight: 700, marginBottom: 0, backgroundColor: 'yellow'}}>Best New Deals</p>
                  <p style={{fontFamily: 'cursive', color: 'blue', fontWeight: 'bold', fontSize: 17}}>New Collection</p>
                </div>
           </div>
           
           </div>
           {/* <Footer/> */}
        </div>
    )
}

export default Catagori;
