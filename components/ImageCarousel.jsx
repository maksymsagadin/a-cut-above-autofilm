import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import FeaturedImage from './FeaturedImage'

const responsive = {
    extremeLargeDesktop: {
        breakpoint: { max: 4015, min: 2515 },
        items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 2515, min: 1915 },
      items: 4,
    },
    largeDesktop: {
        breakpoint: { max: 1915, min: 1315 },
        items: 3,
    },
    desktop: {
      breakpoint: { max: 1315, min: 1023 },
      items: 2,
    },
    largeTablet: {
        breakpoint: { max: 1023, min: 815 },
        items: 4,
    },
    tablet: {
      breakpoint: { max: 815, min: 530 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 530, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  }

const ImageCarousel = ({ posts }) => {
    return (
        <>
            <Carousel infinite={true} autoPlay={true} autoPlaySpeed={3000} partialVisbile={true} pauseOnHover={true} customTransition={'transform 1000ms ease-in-out'} transitionDuration={2000} arrows={true} responsive={responsive} >
                {posts && posts.map((post, index) => (
                    <FeaturedImage key={index} post={post} />
                ))}
            </Carousel>
        </>
    )
}

export default ImageCarousel