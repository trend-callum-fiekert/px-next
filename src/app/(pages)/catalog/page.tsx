import React from "react";
import { Card, CardContent } from "@/app/components/shadcn-ui/card";
import { AspectRatio } from "@/app/components/shadcn-ui/aspect-ratio";
import Image from "next/image";

// Define the structure for an article
interface Article {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  views: number;
  imageUrl: string;
}

// Sample data for articles
const articles: Article[] = [
  {
    id: "1",
    title: "Trend Vision One Demo Environment",
    author: "Platform Demo Team",
    timestamp: "a month ago",
    views: 2600,
    imageUrl: "/api/placeholder/400/225", // Placeholder image
  },
  {
    id: "2",
    title: "Vision One ASRM Walkthrough",
    author: "Platform Demo Team",
    timestamp: "a month ago",
    views: 1100,
    imageUrl: "/api/placeholder/400/225", // Placeholder image
  },
  {
    id: "3",
    title: "Vision One ASRM Demo (Japanese ver.)",
    author: "Platform Demo Team",
    timestamp: "a month ago",
    views: 573,
    imageUrl: "/api/placeholder/400/225", // Placeholder image
  },
  {
    id: "4",
    title: "Trend Vision One Endpoint Security Challenge",
    author: "Platform Demo Team",
    timestamp: "a month ago",
    views: 177,
    imageUrl: "/api/placeholder/400/225", // Placeholder image
  },
  {
    id: "2",
    title: "Vision One ASRM Walkthrough",
    author: "Platform Demo Team",
    timestamp: "a month ago",
    views: 1100,
    imageUrl: "/api/placeholder/400/225", // Placeholder image
  },
  {
    id: "3",
    title: "Vision One ASRM Demo (Japanese ver.)",
    author: "Platform Demo Team",
    timestamp: "a month ago",
    views: 573,
    imageUrl: "/api/placeholder/400/225", // Placeholder image
  },
  {
    id: "4",
    title: "Trend Vision One Endpoint Security Challenge",
    author: "Platform Demo Team",
    timestamp: "a month ago",
    views: 177,
    imageUrl: "/api/placeholder/400/225", // Placeholder image
  },
];

// ArticleCard component
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <Card className="h-full flex flex-col overflow-hidden">
    <AspectRatio ratio={16 / 9} className="bg-primary bg-gradient-to-r">
      {/* <Image
          src={article.imageUrl}
          width={400}
          height={225}
          alt={article.title}
          className="object-cover w-full h-full rounded-t-lg"
        /> */}
    </AspectRatio>
    <CardContent className="flex-grow p-4 bg-card">
      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>{article.author}</p>
        <p>
          {article.timestamp} • {article.views} views
        </p>
      </div>
    </CardContent>
  </Card>
);

// Catalog component
export default function Catalog() {
  return (
    <div className="catalog-page">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Official Catalog</h1>
        <p className="text-base text-[#adadad] mb-6">
          Explore our official collection of experiences and start learning
          about Vision One.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Community Catalog</h1>
        <p className="text-base text-[#adadad] mb-6">
          Discover our community-driven collection of experiences and start
          exploring Vision One.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
