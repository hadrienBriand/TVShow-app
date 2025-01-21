 import { StarFill,Star as StarEmpty,StarHalf } from "react-bootstrap-icons"
export function Rating({rating}:{rating:number}){
    const starList:JSX.Element[] = [];
    const fullStar = Math.floor(rating)
    const halfStar = rating - fullStar >= 0.5;
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0)
    for (let i = 0; i < fullStar; i++){
        starList.push(<StarFill className="mr-2" key={"star-fill" + i} />)
    }
    if(halfStar){
        starList.push(<StarHalf className="mr-2" key={"star-half"} />)
    }
    for (let i = 0; i < emptyStar; i++){
        starList.push(<StarEmpty className="mr-2" key={"star-empty" + i} />)
    }
    return <div>
        <div className="flex items-center">
           {starList}
            { rating }
        </div>
    </div>
}