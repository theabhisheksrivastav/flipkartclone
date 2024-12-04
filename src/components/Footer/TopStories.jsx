import { useEffect, useState } from 'react';

const TopStories = () => {
    // Initialize state with default values
    const [topStoriesData, setTopStoriesData] = useState({
        brandDirectory: '',
        mostSearched: [],
        categories: {},
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchtopStoriesData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/top-stories');
                if (!response.ok) {
                    throw new Error('Failed to fetch top stories');
                }
                const data = await response.json();
                setTopStoriesData(data);
            } catch (error) {
                setError('Error fetching top stories: ' + error.message);
                console.error('Error fetching top stories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchtopStoriesData();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="hidden md:block border-l border-gray-900 p-6">
            <div className="mb-6">
                <h3 className="text-gray-700 text-lg font-semibold mb-2">
                    Top Stories: {topStoriesData.brandDirectory || 'No Data'}
                </h3>
            </div>
            <div className="mb-6">
                <h3 className="text-gray-700 text-lg font-semibold mb-2">Most Searched</h3>
                <p className="text-gray-500">
                    {topStoriesData.mostSearched.length > 0
                        ? topStoriesData.mostSearched.join(' | ')
                        : 'No data available'}
                </p>
            </div>
            {Object.keys(topStoriesData.categories).length > 0 ? (
                Object.keys(topStoriesData.categories).map((category, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-gray-700 text-lg font-semibold mb-2">{category}</h3>
                        <p className="text-gray-500">
                            {(topStoriesData.categories[category] || []).join(' | ')}
                        </p>
                    </div>
                ))
            ) : (
                <div>No categories available</div>
            )}
        </div>
    );
};

export default TopStories;
