import React, { useState, useRef, useEffect } from "react";
import { BsCart4, BsHeart, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import { Carousel } from "react-responsive-carousel";

import ProductListItems from "./ProductListItems";
import Tab from "../Tab";
import placeholder from "../../images/ProductPlaceholder.jpg";
import StarRatings from "react-star-ratings";
import { getRole } from "../../services/localStorage";
import StarRating from "../StarRating";

function SingleProduct({ product, changeRating, submitRating, userRating }) {
	const {
		title,
		ProductImages: images,
		slug,
		ProductRatings: ratings,
	} = product;
	const [modal, setModal] = useState(null);

	const modalEl = useRef();
	const role = getRole();

	const handleClickRating = () => {
		const modalObject = new Modal(modalEl.current);
		setModal(modalObject);
		modalObject.show();
	};

	return (
		<>
			<div className="col-md-7">
				<Carousel showArrows={true} autoPlay infiniteLoop dynamicHeight>
					{images && images.length > 1 ? (
						images.map(item => (
							<div key={item.imageUrl}>
								<img src={item.imageUrl} alt={item.imageUrl} />
							</div>
						))
					) : (
						<img src={placeholder} alt="placeholder" />
					)}
				</Carousel>
				<Tab product={product} />
			</div>
			<div className="col-md-5">
				<h4 className="bg-warning p-4 rounded">{title}</h4>
				<StarRating ratings={ratings} />
				<div className="card">
					<div className="card-body">
						<ProductListItems product={product} />
						<hr />
						<div className=" d-flex gap-3">
							<button
								className="btn btn-outline-danger col m-auto "
								// onClick={() => handleRemove(slug)}
							>
								<BsCart4 />
								<div>Add to Cart</div>
							</button>

							<Link
								to={"/product/" + slug}
								className="btn btn-outline-warning col m-auto">
								<BsHeart />
								<div>Add to wishlist</div>
							</Link>
							{role && role === "user" && (
								<Link
									to={"/product/" + slug}
									className="btn btn-outline-info col m-auto">
									<div className="" onClick={handleClickRating}>
										<BsStar />
										<div>RATE PRODUCT</div>
									</div>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>{" "}
			<div className="modal" ref={modalEl}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title text-center">Leave Your Rating</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<StarRatings
								className="text-danger"
								changeRating={changeRating}
								name="rating"
								starRatedColor="orange"
								isSelectable={true}
								rating={userRating}
							/>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								type="button"
								className="btn btn-danger"
								onClick={() => {
									submitRating();
								}}>
								Rate
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SingleProduct;