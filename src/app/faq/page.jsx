import HowToOrder from '@/components/HowToOrder/HowToOrder'
import Footer from '@/layout/footers/footer'
import HeaderTwo from '@/layout/headers/header-2'
import Wrapper from '@/layout/wrapper'
import React from 'react'

export default function page() {
  return(
    <Wrapper>
  <HeaderTwo style_2={true} />
  <HowToOrder/>
  <Footer primary_style={true} />
</Wrapper>
  )


}
