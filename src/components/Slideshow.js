import { Carousel, CarouselControlProps , UncontrolledCarousel } from "reactstrap"

const SlideShow = () => {
    
   

        return(
            <div className="slide">
            <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/300'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/300'
      
    },
    {
      
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/300'
    }
  ]}
 ></UncontrolledCarousel>
 </div>
)
}
export default SlideShow