import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrZWVydGhpZzA4MDZAZ21haWwuY29tIiwiZXhwIjoxNzgwNjM2MDE5LCJpYXQiOjE3ODA2MzUxMTksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiZjE4MDE4Yy0zYTZlLTQyOGEtODkwZS03ZjE1ZmIzZmU1NTQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrZWVydGhpIGd1ZGRhbnRpIiwic3ViIjoiOTY4MGRlZTMtM2UxMi00ZmY4LWJhNTctMWFhZjA2OGI5NjI2In0sImVtYWlsIjoia2VlcnRoaWcwODA2QGdtYWlsLmNvbSIsIm5hbWUiOiJrZWVydGhpIGd1ZGRhbnRpIiwicm9sbE5vIjoiMjNicTFhMDU4NCIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6Ijk2ODBkZWUzLTNlMTItNGZmOC1iYTU3LTFhYWYwNjhiOTYyNiIsImNsaWVudFNlY3JldCI6InpTVGR2YmN5enZCeFpUY04ifQ.Cnm5-hcoCdtQrOLEBFloC9Q9XhQZzBuFpVYNxQfQohE";

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data.notifications;
  } catch (error) {
    console.error(error);
    return [];
  }
};