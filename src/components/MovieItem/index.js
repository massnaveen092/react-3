// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

const MovueItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup modal trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
        {close => (
          <div>
            <button
              type="button"
              data-testid="closebutton"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovueItem
