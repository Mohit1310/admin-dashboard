import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProduct__title">New Product</h1>
      <form className="newProduct__form">
        <div className="newProduct__Item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newProduct__item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newProduct__item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newProduct__item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProduct__button">Create</button>
      </form>
    </div>
  );
}
