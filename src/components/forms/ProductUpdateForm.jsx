import React from "react";

function ProductUpdateForm({
	handleSubmit,
	handleChange,
	handleCategoryChange,
	values,
	categories,
	subs,
}) {
	const {
		title,
		description,
		subCategoryId,
		price,
		category,
		quantity,
		brands,
		colors,
		brand,
		color,
	} = values;
	return (
		<form onSubmit={handleSubmit}>
			{/* {JSON.stringify(values.SubCategory.categoryId)} */}
			<div className="form-group">
				<label>Title</label>
				<input
					type="text"
					name="title"
					className="form-control"
					value={title}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label>Description</label>
				<input
					type="text"
					name="description"
					className="form-control"
					value={description}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label>Price</label>
				<input
					type="number"
					name="price"
					className="form-control"
					value={price}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label>Quantity</label>
				<input
					type="number"
					name="quantity"
					className="form-control"
					value={quantity}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label>Color</label>
				<select
					name="color"
					value={color}
					className="form-select"
					onChange={handleChange}>
					{colors.map(item => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
			<div className="form-group">
				<label>Brand</label>
				<select
					name="brand"
					value={brand}
					className="form-select"
					onChange={handleChange}>
					{brands.map(item => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>

			<div className="form-group">
				<label>Category</label>
				<select
					name="category"
					className="form-select"
					value={category}
					onChange={handleCategoryChange}>
					{categories.length > 0 &&
						categories.map(item => (
							<option key={item.id} value={item.id}>
								{item.name}
							</option>
						))}
				</select>
			</div>

			<div className="form-group">
				<label>Subcategory</label>
				<select
					name="subCategoryId"
					className="form-select"
					value={subCategoryId}
					onChange={handleChange}>
					<option value={""}>Select a subcategory</option>
					{subs &&
						subs.length > 0 &&
						subs.map(item => (
							<option key={item.id} value={item.id}>
								{item.name}
							</option>
						))}
				</select>
			</div>

			<br />
			<button className="btn btn-outline-info">Save</button>
		</form>
	);
}

export default ProductUpdateForm;
