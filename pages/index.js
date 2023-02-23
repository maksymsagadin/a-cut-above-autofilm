import { getFeaturedPosts, getMain } from '../services'
import { HeroSection, About, Services, FindUs, WorkGallery } from '../sections'
import { Header, Footer } from '../components'

export default function Home({ contactData, heroData, aboutData, servicesData, findData, workData }) {
  return (
    <div className="container mx-auto lg:mb-10">
      <Header logoURL={contactData.logo.url} />
      <HeroSection data={heroData} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <FindUs data={findData} />
      <WorkGallery data={workData} />
      <Footer contact={contactData} />
    </div>
  )
}

export async function getStaticProps() {
  const mainData = await getMain() || {}
  return {
    props: {
      contactData: mainData.data.contact,
      heroData: {
        heading: mainData.data.heroSection.heading,
        subheading: mainData.data.heroSection.subHeading,
        greeting: mainData.data.heroSection.greeting,
        contact: mainData.data.contact,
        bgMobile: mainData.data.heroSection.backgroundImageMobile.url,
        bgDesktop: mainData.data.heroSection.backgroundImageDesktop.url,
      },
      aboutData: {
        description: mainData.data.aboutSection.description,
        imageURL: mainData.data.aboutSection.bannerImage.url,
      },
      servicesData: {
        greeting: mainData.data.serviceSection.greeting,
        services: mainData.data.serviceSection.services,
      },
      findData: {
        contact: mainData.data.contact,
        greeting: mainData.data.findUsSection.greeting,
        bannerURL: mainData.data.findUsSection.bannerImage.url,
      },
      workData: {
        featuredPosts: mainData.posts,
        heading: mainData.data.featuredSection.heading,
        subheading: mainData.data.featuredSection.subHeading,
        description: mainData.data.featuredSection.description,
      }
    }
  }
}