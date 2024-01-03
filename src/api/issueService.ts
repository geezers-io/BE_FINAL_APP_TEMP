import client from '@/api/client';
import { MainIssues } from '@/api/issue.type';

interface IssueService {
  getMainContent: () => Promise<MainIssues>;
}

const issueService: IssueService = {
  getMainContent: async () => {
    return client.get('/issues/main');
  },
};

export default issueService;
