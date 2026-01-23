export interface BlogPost {
  id: string | number;
  title: string;
  content: string;
  thumbnail?: string | null;
  status?: string;
  tags?: string[];
  published?: string;
  views: number;
  _count?: {
    comments: number;
  };
  isFeatured?: boolean;
}
