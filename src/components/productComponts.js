import cardDatas from "../CardDatas";
import { useState } from "react";
import { Button } from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';


// here item and setItema propsa parametera thanthuden

export default function CardDesign (props) {
    const [card, setCard] = useState(cardDatas);
    // const [item, setItems] = useState(0)

    return(
        <div className="product">
             <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {card.map((data, idx)=>( 
             <CardDetails
            
             key = {idx}    
             badge  = {data.badge}    
             src    = {data.src}      
             itemName = {data.itemName}     
             stars    = {data.stars}    
             Rate     = {data.Rate} 
             actualRate  = {data.actualRate}  
             discountRate = {data.discountRate}
             idx = {idx}
             setCard = {setCard}
            //  setItems = {setItems}
             
            //Card designkullathan ipo propsa vangiruken. so card detailslathan yenoda button iruku. so CardDetails card designkulla iruku. 
            // so card designla iruka propsa again card deatailsku send pananum. so again card details kulla here another variable name thanthu propsa pass panren


            count1 = {props.count}
            setCount1 = {props.setCount}
              
             />   
            ))}

        

        </div>

        </div>
      
     </section>
     </div>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//rendering each card seperately:

// here carddeatils (parameter) parameterkulla count1 and setcount1 nu pass paniyachu bcz props valueva card designla vangi count1, setCount1 intha namelathan save pani vechuruken

 function  CardDetails ({setCard, id, badge, src, itemName,stars, Rate,  actualRate,  discountRate, idx, count1, setCount1 }) {

    // let count = 0
  
    const [showBtn, setShowBtn] = useState(true);

    const displayAddCart = (countInc, setCountInc) => {
     setShowBtn(!showBtn)
     setCountInc(countInc + 1)
    }
   
    const displayRemoveCart = (countInc, setCountInc) => {
     setShowBtn(!showBtn)
     setCountInc(countInc - 1)
    }

    return(
     
           
              <div className="col mb-5" >
               <div className="card h-100"  >
                {/* <!-- Sale badge--> */}
                {badge === "true" ? <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" ,right: "0.5rem"}}>Sale</div> : false}

                {/* <!-- Product image--> */}
                <img className="card-img-top" src = {src} alt="..." />

                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">

                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{itemName}</h5>

                        
                        {/* <!-- Star icons for ratings--> */}
                        
                        {stars === "true" ? <div > <span>
                        <StarIcon className="star"  />
                        <StarIcon className="star"  />
                        <StarIcon className="star"  />
                        <StarIcon className="star"  />
                        <StarIcon className="star"  /> </span> </div> : false }
                        
                        {/* <StarIcon style={{color:"yellow"}}/> */}
                        
                       
                       

                        { /* <!-- Product price--> */ }
                       
                        {/* <div className ="text-muted text-decoration-line-through" >${actualRate} <span> - ${discountRate}</span>   </div> */}
                    
                    { Rate === "stripped" ? <div> <span className ="text-muted text-decoration-line-through" > ${actualRate} </span> 
                                  <span> ${discountRate} </span> </div> : <div> ${actualRate} </div>}  

          

                       </div>
                </div>


                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                {showBtn ? <div className="text-center"><Button onClick={() => displayAddCart(count1, setCount1)} className="btn btn-outline-dark mt-auto" >Add to cart</Button></div> :
                  
                  <div className="text-center"><Button onClick={() => displayRemoveCart(count1, setCount1)} className="btn btn-outline-dark mt-auto" >Remove cart</Button></div> }

                </div>

                
              </div>
             </div>
         

   
      

     
    )
}