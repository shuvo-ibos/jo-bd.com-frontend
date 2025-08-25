
import Policy from '@/components/HowToOrder/Policy'
import Footer from '@/layout/footers/footer'
import HeaderTwo from '@/layout/headers/header-2'
import Wrapper from '@/layout/wrapper'
import React from 'react'

export default function page() {
  return(
    <Wrapper>
      <HeaderTwo style_2={true} />
      <Policy/>
      <Footer primary_style={true} />
    </Wrapper>
  )


}
