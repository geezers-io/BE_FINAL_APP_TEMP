export interface IssueSummary {
  id: number;
  title: string;
  thumbnailUrl: string;
  description: string;
  tags: string[];
  createdAt: string;
}

export interface MainIssues {
  hot: IssueSummary[];
  geo: IssueSummary[];
  all: IssueSummary[];
}
