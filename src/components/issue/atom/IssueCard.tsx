import React from 'react';
import Text from '@/components/common/atom/Text';
import { IssueSummary } from '@/api/issue.type';
import getTime from '@/utils/getTime';
import Tag from '@/components/common/atom/Tag';

const maxDescriptionLength = 20;

const IssueCard = ({ data }: { data: IssueSummary }) => {
  const time = getTime(data.createdAt);
  const formattedDesc =
    data.description.length > maxDescriptionLength
      ? data.description.slice(0, maxDescriptionLength) + '...'
      : data.description;

  return (
    <div className="w-[137px] h-[250px] shadow-card rounded-[4px]">
      <img src={data.thumbnailUrl} alt="image" />
      <section className="px-[4px] flex flex-col justify-between">
        <section className="flex flex-col">
          <Text
            type="title"
            bold
            className="overflow-ellipsis overflow-hidden leading-[15px] py-[3px]"
          >
            {data.title}
          </Text>
          <Text type="sub" className="leading-[16px] h-full">
            {formattedDesc}
          </Text>
        </section>

        {/*<section className="py-3 flex gap-x-1 flex-wrap gap-y-1">*/}
        {/*  {data.tags.map(tag => (*/}
        {/*    <Tag name={tag} />*/}
        {/*  ))}*/}
        {/*</section>*/}

        <Text type="sub" className="self-end">
          {time}
        </Text>
      </section>
    </div>
  );
};

export default IssueCard;
