const api_url = process.env.NODE_ENV === "production" 
                ? "https://kino-booker-backend.herokuapp.com/"
                : "http://localhost:9000"

export default api_url