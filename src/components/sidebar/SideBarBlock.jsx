import React, { useEffect, useState } from 'react'
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'

import * as Styled from './sidebar_block__style'
import * as Skeleton from '../skeleton/skeleton__style'

const SidebarListItem = ({ href, src, alt, isLoading }) => {
  return (
    <Styled.SidebarItem>
      <Styled.SidebarLink href={href}>
        {isLoading ? (
          <Skeleton.Skeleton />
        ) : (
          <Styled.SidebarImg src={src} alt={alt} />
        )}
        {/* <img
          className={
            isLoading === true
              ? 'sidebar__img sidebar__img_load'
              : 'sidebar__img'
          }
          src={src}
          alt={alt}
        /> */}
      </Styled.SidebarLink>
    </Styled.SidebarItem>
  )
}

// const SidebarListItem = ({ href, src, alt, isLoading }) => {
//   return (
//     <div
//       className={
//         isLoading === true
//           ? 'sidebar__item sidebar__item_load'
//           : 'sidebar__item'
//       }
//     >
//       <a className="sidebar__link" href={href}>
//         <img
//           className={
//             isLoading === true
//               ? 'sidebar__img sidebar__img_load'
//               : 'sidebar__img'
//           }
//           src={src}
//           alt={alt}
//         />
//       </a>
//     </div>
//   )
// }

function SideBarBlock(props) {
  const [status, setStatus] = useState(true)

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false)
    }, 5000)
    return () => {
      clearTimeout(loadTimer)
    }
  })

  return (
    <Styled.SidebarBlock>
      <Styled.SidebarList>
        <SidebarListItem
          href="#"
          src={playlist01}
          alt="day's playlist"
          isLoading={status}
        />
        <SidebarListItem
          href="#"
          src={playlist02}
          alt="100th hits"
          isLoading={status}
        />
        <SidebarListItem
          href="#"
          src={playlist03}
          alt="Indi charge"
          isLoading={status}
        />
      </Styled.SidebarList>
    </Styled.SidebarBlock>
  )
}

export default SideBarBlock