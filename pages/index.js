import { getMain } from '../services'
import { HeroSection, About, Services, FindUs, WorkGallery } from '../sections'
import { Header, Footer } from '../components'

export default function Home({ contactData, heroData, aboutData, servicesData, findData, workData }) {
  return (
    <>
      <Header logoURL={contactData.logo.url} />
      <HeroSection data={heroData} />
      <Services data={servicesData} />
      <FindUs data={findData} />
      <WorkGallery data={workData} />
      <About data={aboutData} />
      <Footer contact={contactData} />
    </>
  )
}

export async function getStaticProps() {
  const result = await getMain() || {}
  // Cache the data for 1 hour (3600 seconds)
  return {
    props: {
      contactData: result.data.contact,
      heroData: {
        heading: result.data.heroSection.heading,
        subheading: result.data.heroSection.subHeading,
        greeting: result.data.heroSection.greeting,
        contact: result.data.contact,
        bgMobile: result.data.heroSection.backgroundImageMobile.url,
        bgDesktop: result.data.heroSection.backgroundImageDesktop.url,
      },
      aboutData: {
        description: result.data.aboutSection.description,
        bannerImage: result.data.aboutSection.bannerImage.url,
      },
      servicesData: {
        greeting: result.data.serviceSection.greeting,
        services: result.data.serviceSection.services,
      },
      findData: {
        contact: result.data.contact,
        greeting: result.data.findUsSection.greeting,
        bannerImage: result.data.findUsSection.bannerImage.url,
      },
      workData: {
        featuredPosts: result.posts,
        heading: result.data.featuredSection.heading,
        subheading: result.data.featuredSection.subHeading,
        description: result.data.featuredSection.description,
      }
    },
    revalidate: 3600 // Regenerate the page every hour
  }
}