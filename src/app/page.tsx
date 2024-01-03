import Button from '@/components/common/atom/Button';
import PostWriterButton from '@/components/common/atom/PostWriterButton';
import IssueCardCarousel from '@/components/issue/molecules/IssueCardCarousel';
import IssueService from '@/api/issueService';
import { MainIssues } from '@/api/issue.type';
import { createIssues, createMockMainContents } from '@/mock/issues';

const Home = async () => {
  // const category = await IssueService.getMainContent();
  const category = createMockMainContents();

  return (
    <div className="flex flex-col gap-y-[21px]">
      <section className="layout-title-section py-5">
        <Button theme="white">이슈맵에 대해 알아보세요</Button>
      </section>
      <section className="layout-title-section">
        <span className="text-h4 text-orange-main font-bold">지금 떠오르는 이슈</span>
      </section>
      <IssueCardCarousel list={category.hot} />
      <section className="layout-title-section">
        <div className="flex-items-center justify-between">
          <span className="text-h4 text-orange-main font-bold">내 주변</span>
          <Button theme="white">더보기</Button>
        </div>
      </section>
      <section className="layout-title-section">
        <div className="flex-items-center justify-between">
          <span className="text-h4 text-orange-main font-bold">전체</span>
          <Button theme="white">더보기</Button>
        </div>
      </section>
      <PostWriterButton />
    </div>
  );
};

export default Home;
