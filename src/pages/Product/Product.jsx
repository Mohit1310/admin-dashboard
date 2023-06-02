import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productdata } from "../../dummytData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="product__titleContainer">
        <h1 className="product__title">Product</h1>
        <Link to="/newProduct" className="link">
          <button className="product__addButton">Create</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product__topLeft">
          <Chart data={productdata} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product__topRight">
          <div className="product__infoTop">
            <img
              src="https://flexboom.in/wp-content/uploads/2022/07/61ZRU9gnbxL._AC_SL1500_.jpg"
              alt="Airpods"
              className="product__infoImg"
            />
            <span className="product__name">Apple Airpods</span>
          </div>
          <div className="product__infoBottom">
            <div className="product__infoItem">
              <span className="product__infoKey">Id:</span>
              <span className="product__infoValue">23</span>
            </div>
            <div className="product__infoItem">
              <span className="product__infoKey">Sales:</span>
              <span className="product__infoValue">5123</span>
            </div>
            <div className="product__infoItem">
              <span className="product__infoKey">Active:</span>
              <span className="product__infoValue">Yes</span>
            </div>
            <div className="product__infoItem">
              <span className="product__infoKey">In Stock:</span>
              <span className="product__infoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form className="product__form">
          <div className="product__formLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product__formRight">
            <div className="product__upload">
              <img src="https://flexboom.in/wp-content/uploads/2022/07/61ZRU9gnbxL._AC_SL1500_.jpg" alt="Airpods" className="product__uploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>
            <button className="product__button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
