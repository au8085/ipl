import React from 'react'
import TeamList from "../components/teams/Teams";
import { teams, bannerImages } from '../utils/mockdata';
import Image from 'next/image';
import { makeStyles,} from "@material-ui/core";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const useStyles = makeStyles((theme) => ({

  caption: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  imageContainer: {
    position: 'relative',
    height: '300px', // Set a fixed height for all images
  },
}));

interface BannerProps {
  banners: { src: string; caption: string, alt?:string }[];
}

const HomePage: React.FC<BannerProps> = ({ banners }) => {
  console.log(bannerImages[0].src);
  
  const classes = useStyles();
  return (
    <>
     <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      interval={2000} 
    >
      {bannerImages.map((image, index) => (
        <div  key={index} className={classes.imageContainer}>
          <Image src={image.src} alt={image.caption} />
        </div>
      ))}
    </Carousel>
    <div className='pad10'>
   
      <TeamList teams={teams} />
    </div>
    </>
  )
}

export default HomePage
