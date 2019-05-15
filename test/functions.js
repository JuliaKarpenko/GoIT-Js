const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkFalsy: (x) => x,
    createUser: () => {
        const user = {
            firstName: "Tanos",
            lastName: "Torovech"
        };
        return user;
    },
    fetchUser: () => {
        fetch('https://api.themoviedb.org/3/movie/${id}?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru')
        .then(response => response.json())
        .then(data => data)
        .catch(error => 'error')
    },
}

module.exports = functions;