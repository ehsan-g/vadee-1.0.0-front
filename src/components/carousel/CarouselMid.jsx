/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
export default class CarouselMid extends Component {
  render() {
    const settings = {
      className: 'slider variable-width',
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <>
        <div>
          <Slider {...settings}>
            {itemData.map((item) => (
              <Grid className="mid-images" key={item.title} sx={{ padding: 2 }}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=250&h=180&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <Typography
                  variant="subtitle1"
                  sx={{ padding: 0, margin: 0, lineHeight: 1, color: 'black' }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    padding: 0,
                    margin: 0,
                    lineHeight: 1,
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    padding: 0,
                    margin: 0,
                    lineHeight: 1,
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    padding: 0,
                    margin: 0,
                    lineHeight: 1,
                    fontWeight: 'bold',
                  }}
                >
                  <Link to="#">Browse Gallery</Link>
                </Typography>
              </Grid>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
