import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TabCard = ({ pack }) => {
    return (
        <div>
            <div className="rounded-xl w-80 max-h-96 bg-base-100 shadow-xl">
                <figure><img src={pack.image} alt="Shoes" className="rounded-t-xl h-52 w-full" /></figure>
                <div className="mt-4 px-4">
                    <h2 className="card-title">
                        {pack.title}
                    </h2>
                    <p className="card-title text-base mt-2 font-normal">{pack.type}</p>
                </div>
                <div className="flex justify-between items-center px-4 pb-5 mt-8">
                    <div className="text-xl">${pack.price}</div>
                    <div className='flex items-center gap-2'>
                        <Link to={`/packages/${pack._id}`}><div className="btn btn-sm btn-info btn-outline">View Package</div></Link>
                        <div className="rounded-full p-1 border-2 border-red-500"><FaHeart className='text-red-500'></FaHeart></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard;