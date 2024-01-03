'use client';

import React from 'react';
import IssueCard from '@/components/issue/atom/IssueCard';
import { IssueSummary } from '@/api/issue.type';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

interface IssueCardCarouselProps {
  list: IssueSummary[];
}

const IssueCardCarousel = ({ list }: IssueCardCarouselProps) => {
  list = list.slice(0, 3);
  return (
    <div></div>
    // <CarouselProvider
    //   naturalSlideHeight={250}
    //   naturalSlideWidth={430}
    //   totalSlides={list.length}
    //   infinite
    //   isPlaying
    // >
    //   <Slider className="!flex">
    //     {list.map((c, i) => (
    //       <Slide index={i} className="w-[137px] h-[250px]">
    //         <IssueCard data={c} />
    //       </Slide>
    //     ))}
    //   </Slider>
    // </CarouselProvider>
  );
};

export default IssueCardCarousel;
