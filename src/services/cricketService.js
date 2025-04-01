const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchLiveMatches = async () => {
  await delay(1000);
  return [
    {
      id: 1,
      series: "IPL 2025",
      team1: { name: "MI", score: "120/3", overs: "15.2" },
      team2: { name: "CSK", score: "", overs: "" },
      status: "LIVE",
      runRate: "7.82",
      reqRate: "9.45"
    },
    {
      id: 2,
      series: "World Cup 2025",
      team1: { name: "IND", score: "287/6", overs: "50.0" },
      team2: { name: "AUS", score: "185/4", overs: "35.2" },
      status: "LIVE",
      runRate: "5.24",
      reqRate: "8.45"
    }
  ];
};

export const fetchNews = async () => {
  await delay(800);
  return [
    {
      id: 1,
      title: "IPL 2025: Mumbai Indians clinch thriller against CSK",
      summary: "In a nail-biting finish, Mumbai Indians secured a victory...",
      image: "https://via.placeholder.com/400x200",
      category: "IPL",
      date: "2h ago",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Team India announces squad for World Cup 2025",
      summary: "The BCCI has announced a strong 15-member squad...",
      image: "https://via.placeholder.com/400x200",
      category: "International",
      date: "5h ago",
      author: "Jane Smith"
    }
  ];
};

export const fetchSchedule = async () => {
  await delay(600);
  return [
    {
      id: 1,
      date: "2025-04-15",
      series: "IPL 2025",
      match: "MI vs CSK",
      venue: "Wankhede Stadium",
      time: "19:30",
      type: "T20"
    },
    // Add more matches
  ];
};