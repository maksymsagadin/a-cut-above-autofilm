import { getFeaturedPosts, getMain } from '../services'
import { HeroSection, About, Services, FindUs, WorkGallery } from '../sections'

export default function Home({ siteData }) {
  console.log(siteData,'resulting')
  return (
    <div className="container mx-auto lg:mb-10">
      <HeroSection />
      <About />
      <Services description={siteData.data.servicesDescription}/>
      <FindUs contact={siteData.contact} greeting={siteData.data.findUsGreeting} bannerURL={siteData.data.findUsBannerImage.url}/>
      <WorkGallery 
        featuredPosts={siteData.posts}
        heading={siteData.data.featuredWorkHeading}
        subheading={siteData.data.featuredWorkSubheading}
        description={siteData.data.featuredWorkDescription}
      />
    </div>
  )
}

export async function getStaticProps() {
  const siteData = await getMain() || []
  return {
    props: { siteData }
  }
}