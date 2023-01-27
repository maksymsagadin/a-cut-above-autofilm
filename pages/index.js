import { getFeaturedPosts, getMain } from '../services'
import { HeroSection, About, Services, FindUs, WorkGallery } from '../sections'
import { Header, Footer } from '../components'

export default function Home({ contact, heroData, aboutData, servicesData, findData, workData }) {
  return (
    <div className="container mx-auto lg:mb-10">
      <Header logoURL={contact.logo.url} />
      <HeroSection data={heroData} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <FindUs data={findData} />
      <WorkGallery data={workData} />
      <Footer contact={contact} />
    </div>
  )
}

export async function getStaticProps() {
  const mainData = await getMain() || {}
  return {
    props: {
      contact: mainData.contact,
      heroData: {
        heading: mainData.data.heroHeading,
        subheading: mainData.data.heroSubheading,
        greeting: mainData.data.heroGreeting,
        contact: mainData.contact,
      },
      aboutData: {
        description: mainData.data.aboutInfo,
        imageURL: mainData.data.aboutPhoto.url,
      },
      servicesData: {
        greeting: mainData.data.servicesGreeting,
      },
      findData: {
        contact: mainData.contact,
        greeting: mainData.data.findUsGreeting,
        bannerURL: mainData.data.findUsBannerImage.url,
      },
      workData: {
        featuredPosts: mainData.posts,
        heading: mainData.data.featuredWorkHeading,
        subheading: mainData.data.featuredWorkSubheading,
        description: mainData.data.featuredWorkDescription,
      }
    }
  }
}