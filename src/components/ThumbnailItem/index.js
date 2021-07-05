// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickThumbnailItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    clickThumbnailItem(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
