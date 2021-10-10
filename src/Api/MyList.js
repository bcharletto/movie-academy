export const getMyListMovie = () => (
    fetch(`http://localhost:5001/my_list`)
        .then((response) => {
            return response.json();
        })
    );

    