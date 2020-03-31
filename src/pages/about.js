import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.PostHeader>
      <S.PostTitle>Sobre Mim</S.PostTitle>
    </S.PostHeader>

    <S.MainContent>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        distinctio consequatur ea labore placeat. Odio fugit iure doloribus
        laborum suscipit obcaecati beatae. Aliquam modi sed doloribus
        consequuntur labore tenetur sequi.
      </p>
    </S.MainContent>
  </Layout>
)

export default AboutPage
