export const getRecentlyAddedMovie = () => (
    fetch(`https://localhost:5001/recently_added`)
        .then((response) => {
            return response.json();
        })
    );

