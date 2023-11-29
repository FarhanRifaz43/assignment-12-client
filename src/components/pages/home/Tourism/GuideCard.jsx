import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const GuideCard = ({ guide }) => {
    return (
        <div>
            <div className="card w-64 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={guide.image} alt="Shoes" className="rounded-full h-36 w-36 object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{guide.name}</h2>
                    <Rating
                        initialRating={guide.rating}
                        emptySymbol={<FaRegStar className='text-gray-300' />}
                        fullSymbol={<FaStar className='text-yellow-600' />}
                    />
                    <div className="card-actions">
                        <Link to={`/guides/${guide._id}`}><button className="btn btn-outline btn-info">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideCard;