import React from 'react'
import Button from '../../components/UI/button/Button'
import { currentButton } from '../../components/UI/button/SwittchStyle'
import NewsContainer from './NewsStyle'
import Header from '../../components/UI/button/Header/Header'
import Content from '../../components/content/Content'

function News() {
  return (
    <NewsContainer className='news'> 
      <Header />
      <Content />
    </NewsContainer>
  )
}



export default News