import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        fetch('../../../../data/categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div className="space-y-5">
            <h2>All categories</h2>
            {
                categories.map(cate => <Link
                to={`/category/${cate.id}`}
                className="ml-2 block text-xl font-semibold no-underline text-pink-800"
                 key={cate.id}>
                    {cate.name}
                </Link>)
            }

            {/* {
                categories.map(data=><Link to={`/categories/${data.id}`} className="block" key={data.id}>
                    {data.name} 
                </Link>)
            } */}
        </div>
    );
};

export default LeftSideNav;