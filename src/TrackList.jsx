function PlayListItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.track}{' '}
              <span className="track__title-span">{props.trackRemix}</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="./img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

function PlayListContent(props) {
  return (
    <div className="content__playlist playlist">
      <PlayListItem
        track="Guilt"
        author="Nero"
        album="Welcome Reality"
        time="4:44"
      />
      <PlayListItem
        track="Elektro"
        author="Dynoro, Outwork, Mr. Gee"
        album="Elektro"
        time="2:22"
      />
      <PlayListItem
        track="I’m Fire"
        author="Ali Bakgor"
        album="I’m Fire"
        time="2:22"
      />
      <PlayListItem
        track="Non Stop{' '}"
        trackRemix="(Remix)"
        author="Стоункат, Psychopath"
        album="Non Stop"
        time="4:12"
      />
      <PlayListItem
        track="Run Run{' '}"
        trackRemix="(feat. AR/CO)"
        author="Jaded, Will Clarke, AR/CO"
        album="Run Run"
        time="2:54"
      />
      <PlayListItem
        track="Eyes on Fire{' '}"
        trackRemix="(Zeds Dead Remix)"
        author="Blue Foundation, Zeds Dead"
        album="Eyes on Fire"
        time="5:20"
      />
      <PlayListItem
        track="Mucho Bien{' '}"
        trackRemix="(Hi Profile Remix)"
        author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        album="Mucho Bien"
        time="3:41"
      />
      <PlayListItem
        track="Knives n Cherries{' '}"
        author="minthaze"
        album="Captivating"
        time="1:48"
      />
      <PlayListItem
        track="How Deep Is Your Love{' '}"
        author="Calvin Harris, Disciples"
        album="How Deep Is Your Love"
        time="3:32"
      />
      <PlayListItem
        track="Morena"
        author="Tom Boxer"
        album="Soundz Made in Romania"
        time="3:36"
      />
      <PlayListItem track="" author="" album="" time="" />
    </div>
  )
}

export default PlayListContent
