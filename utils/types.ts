export interface EVENT_TYPE {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  price: number;
  capacity: number;
  status: "DRAFT" | "PUBLISHED";
  additional_info: string[];
  authorId: string;
  createdAt: string;
  updatedAt: string;
  organizer: USER_TYPE;
}

export interface USER_TYPE {
  id: string;
  name: string;
  email: string;
  password: string;
  bio?: string;
  role: "USER" | "ADMIN";
  events: EVENT_TYPE[];
  createdAt: string;
  updatedAt: string;
}
