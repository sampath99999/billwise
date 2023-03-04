const getBaseUrl = () => {
    let url;
    switch (process.env.NODE_ENV) {
        case "development":
        default:
            url = "http://localhost:5000/api/v1/";
    }

    return url;
};

export default getBaseUrl;
