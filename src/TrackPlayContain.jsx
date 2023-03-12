
function TrackPlayImg(props) {
    return (
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
    )
  }
  
  function TrackPlayAuth(props) {
    return (
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          Ты та...
        </a>
      </div>
    )
  }
  
  function TrackPlayAlbum(props) {
    return (
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      </div>
    )
  }

function TrackPlayContain(props) {
    return (
      <div className="track-play__contain">
        <TrackPlayImg />
        <TrackPlayAuth />
        <TrackPlayAlbum />
      </div>
    )
  }

  export default TrackPlayContain