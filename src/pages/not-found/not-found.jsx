import React from 'react'
import NotFound from '../../components/not-found/not-found'
import * as Styled from './not-found.style'

const NotFoundPage = () => {
  return (
    <Styled.WrapperNotFound>
      <Styled.NotFoundPage>
        <NotFound />
      </Styled.NotFoundPage>
    </Styled.WrapperNotFound>
  )
}

export default NotFoundPage
