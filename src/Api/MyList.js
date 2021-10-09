export const getMyListMovie = () => (
    fetch(`https://localhost:5001/my_list`)
        .then((response) => {
            return response.json();
        })
    );

    