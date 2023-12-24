// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} banner-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
