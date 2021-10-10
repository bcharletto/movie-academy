export const getRecentlyAddedMovie = () => (
    fetch(`http://localhost:5001/recently_added`)
        .then((response) => {
            return response.json();
        })
    );

