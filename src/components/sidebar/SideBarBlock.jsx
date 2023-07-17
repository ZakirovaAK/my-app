import React, { useEffect, useState } from 'react'
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'

import * as Styled from './sidebar_block__style'
import * as Skeleton from '../skeleton/skeleton__style'
import { Link } from 'react-router-dom'
// import SkeletonImage from '../../skeletons/skeleton-img'

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

function SideBarBlock(props) {
  const [status, setStatus] = useState(true)

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false)
    }, 2000)
    return () => {
      clearTimeout(loadTimer)
    }
  })

  return (
    <Styled.SidebarBlock>
      <Styled.SidebarList>
        {status ? (
          <>
            {Array.from({ length: 3 }).map((i, index) => (
              <Skeleton.SceletonSidebarItem key={index} />
            ))}
          </>
        ) : (
          <>
            <Link to="/playlist/1">
              <SidebarListItem
                // href="/playlist/1"
                src={playlist01}
                alt="day's playlist"
              />
            </Link>

            <Link to="/playlist/2">
              <SidebarListItem
                // href="/playlist/2"
                src={playlist02}
                alt="100th hits"
              />
            </Link>

            <Link to="/playlist/3">
              <SidebarListItem
                // href="/playlist/3"
                src={playlist03}
                alt="Indi charge"
              />
            </Link>
          </>
        )}
      </Styled.SidebarList>
    </Styled.SidebarBlock>
  )
}

export default SideBarBlock
