import React from 'react';

function TrendingCard() {
  const trends = [
    {
      title: 'Trending in Kenya',
      topic: 'KPLC',
      interactions: '15.9K views',
    },
    {
      title: 'Trending in Kenya',
      topic: 'Ronoh',
      interactions: '15.3K views',
    },
    {
      title: 'Sports · Trending',
      topic: 'Delete',
      interactions: '63K views',
    },
    {
      title: 'Entertainment · Trending',
      topic: 'Yvonne',
      interactions: '41.8K views',
    },
    {
      title: 'Trending in Kenya',
      topic: '#MasculinitySaturday',
      interactions: '27.6K views',
    },
    {
      title: 'Trending in Kenya',
      topic: 'Nikita',
      interactions: '30.3K views',
    },
    {
      title: 'Trending in Kenya',
      topic: 'Kenya Power',
      interactions: '4,071 views',
    },
    {
      title: 'Music · Trending',
      topic: 'Elsa',
      interactions: '33.3K views',
    },
    {
      title: 'Trending in Kenya',
      topic: '#Blackout',
      interactions: '1,256 views',
    },
    {
      title: 'Trending in Kenya',
      topic: 'Gachagua () riggyG',
      interactions: '3,832 views',
    },
  ];

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Trends for you</h2>
      {trends.map((trend, index) => (
        <div
          key={index}
          className="flex flex-col p-2 hover:bg-gray-100 rounded-lg"
        >
          <div className="font-bold text-sm mb-1">{trend.title}</div>
          <div className="text-sm mb-1">{trend.topic}</div>
          <div className="text-xs text-gray-500">{trend.interactions}</div>
        </div>
      ))}
    </div>
  );
}

export default TrendingCard;
