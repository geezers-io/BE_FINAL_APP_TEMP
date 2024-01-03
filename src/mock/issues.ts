import { IssueSummary, MainIssues } from '@/api/issue.type';
import { fakerKO } from '@faker-js/faker';
import { randomInt } from '@/mock/utils';

export const createIssue = (): IssueSummary => ({
  id: fakerKO.number.int(),
  createdAt: fakerKO.date.anytime().toString(),
  title: fakerKO.lorem.sentence(5),
  thumbnailUrl: fakerKO.image.url(),
  description: fakerKO.lorem.paragraph(),
  tags: createTags(),
});

export const createIssues = (): IssueSummary[] => new Array(randomInt(30)).fill(0).map(createIssue);

export const createTags = () => {
  const number = randomInt(5);
  return new Array(number).fill(0).map(() => fakerKO.lorem.words(1));
};

export const createMockMainContents = (): MainIssues => ({
  hot: createIssues(),
  all: createIssues(),
  geo: createIssues(),
});
