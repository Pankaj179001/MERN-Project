import React from "react";

export default function Card(props) {
  const { food } = props;
  const { name, img, Option, description } = food;
const category=Object.keys(Option)
const handleAddToCart=(e)=>{
  
}

  return (
    <>
      <div className="card mt-3 " style={{ height: "100%",width:"85%" }}>
          <img src={img}  style={{ height: "40%",objectFit:"fill",overflow:"hidden" }} className="card-img-top img-fluid" alt="..." />

        <div className="card-body float-sm-start float-md-column" >
          <h5 className="card-title">{name}</h5>
          <div style={{height:"50%",overflow:"auto"}}>
          <p className="card-text">{description}</p>
          </div>
          <div className=" w-100">
            <select className="m-2 h-100  bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100  bg-success rounded">
              {
                
                category.map((data,i)=>{return <option key={i} value={data}>{data}</option>})
                
              }
             
            </select>

            <div className="d-inline h-100 fs-6">Total Price</div>
          </div>
          <hr />
        </div>
        <button className="btn btn-success justify-center ms-2" style={{height:"9%"}} onClick={handleAddToCart}>Add to cart</button>

      </div>
    </>
  );
}
