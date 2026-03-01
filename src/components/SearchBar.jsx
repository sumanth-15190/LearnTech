import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchContent } from '../data/coursesData';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    // Handle search input
    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            setShowResults(false);
            setSelectedIndex(-1);
            return;
        }

        // Debounce search
        const timer = setTimeout(() => {
            const searchResults = searchContent(query);
            setResults(searchResults);
            setShowResults(true);
            setSelectedIndex(-1);
        }, 200);

        return () => clearTimeout(timer);
    }, [query]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Navigate to selected result
    const navigateToResult = (result) => {
        if (result.type === 'course') {
            navigate(`/course/${result.id}`);
        } else if (result.type === 'lesson') {
            navigate(`/course/${result.courseId}/lesson/${result.lessonId}`);
        }
        setQuery('');
        setShowResults(false);
        setSelectedIndex(-1);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (!showResults || results.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < results.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < results.length) {
                    navigateToResult(results[selectedIndex]);
                } else if (results.length > 0) {
                    navigateToResult(results[0]);
                }
                break;
            case 'Escape':
                setShowResults(false);
                setSelectedIndex(-1);
                break;
            default:
                break;
        }
    };

    // Highlight matched text
    const highlightMatch = (text, query) => {
        if (!query) return text;

        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ?
                <mark key={index} style={{ background: '#ffeb3b', padding: '0 2px' }}>{part}</mark> :
                part
        );
    };

    return (
        <div className="search-box" ref={searchRef}>
            <input
                type="text"
                placeholder="Search courses and lessons..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => query && setShowResults(true)}
            />
            <i className="search-icon">🔍</i>

            {/* Search Results Dropdown */}
            {showResults && (
                <div className="search-results-dropdown">
                    {results.length > 0 ? (
                        <>
                            {/* Courses Section */}
                            {results.filter(r => r.type === 'course').length > 0 && (
                                <div className="search-section">
                                    <div className="search-section-title">Courses</div>
                                    {results
                                        .filter(r => r.type === 'course')
                                        .map((result, index) => {
                                            const actualIndex = results.indexOf(result);
                                            return (
                                                <div
                                                    key={`course-${result.id}`}
                                                    className={`search-result-item ${selectedIndex === actualIndex ? 'selected' : ''}`}
                                                    onClick={() => navigateToResult(result)}
                                                    onMouseEnter={() => setSelectedIndex(actualIndex)}
                                                >
                                                    <div className="search-result-icon">
                                                        <img src={result.img} alt={result.name} style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                                                    </div>
                                                    <div className="search-result-content">
                                                        <div className="search-result-title">
                                                            {highlightMatch(result.name, query)}
                                                        </div>
                                                        <div className="search-result-subtitle">
                                                            {result.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            )}

                            {/* Lessons Section */}
                            {results.filter(r => r.type === 'lesson').length > 0 && (
                                <div className="search-section">
                                    <div className="search-section-title">Lessons</div>
                                    {results
                                        .filter(r => r.type === 'lesson')
                                        .map((result, index) => {
                                            const actualIndex = results.indexOf(result);
                                            return (
                                                <div
                                                    key={`lesson-${result.courseId}-${result.lessonId}`}
                                                    className={`search-result-item ${selectedIndex === actualIndex ? 'selected' : ''}`}
                                                    onClick={() => navigateToResult(result)}
                                                    onMouseEnter={() => setSelectedIndex(actualIndex)}
                                                >
                                                    <div className="search-result-icon">
                                                        {result.icon}
                                                    </div>
                                                    <div className="search-result-content">
                                                        <div className="search-result-title">
                                                            {highlightMatch(result.title, query)}
                                                        </div>
                                                        <div className="search-result-subtitle">
                                                            {result.courseName}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="search-no-results">
                            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔍</div>
                            <div>No results found for "{query}"</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
