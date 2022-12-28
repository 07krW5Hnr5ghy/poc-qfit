import { useState } from "react";
import "./newProduct.css";

const NewProduct = () => {
  const [inputs,setInputs] = useState({});
  const [file,setFile] = useState(null);
  const [cat,setCat] = useState([]);
  const handleChange = (e) => {
    setInputs(prev =>{
      return {...prev,[e.target.name]:e.target.value}
    });
  }
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  }
  console.log(cat);
  return (
    <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
            <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" onChange={e=>setFile(e.target.files)[0]}/>
            </div>
            <div className="addProductItem">
            <label>Title</label>
            <input name="title" type="text" placeholder="Apple Airpods" onChange={handleChange}/>
            </div>
            <div className="addProductItem">
            <label>Description</label>
            <input name="desc" type="text" placeholder="description..." onChange={handleChange}/>
            </div>
            <div className="addProductItem">
            <label>Price</label>
            <input name="price" type="number" placeholder="100" onChange={handleChange}/>
            </div>
            <div className="addProductItem" onChange={handleCat}>
            <label>Categories</label>
            <input type="text" placeholder="jeans,skirts" />
            </div>
            <div className="addProductItem">
            <label>Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>
            <div className="addProductItem">
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            <button className="addProductButton">Create</button>
        </form>
    </div>
  )
}

export default NewProduct