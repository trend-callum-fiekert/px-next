export type NavItem = {
  href: string;
  label: string;
};

export type Notification = {
  id: number;
  title: string;
  timestamp: string;
  author: string;
  isUnread: boolean;
};
