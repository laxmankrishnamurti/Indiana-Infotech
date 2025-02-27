import NotFoundImg from '../../assets/not/3737258.jpg'
import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-img-container">
        <img src={NotFoundImg} alt="not-found-img" />
      </div>
    </div>
  )
}

export default NotFound