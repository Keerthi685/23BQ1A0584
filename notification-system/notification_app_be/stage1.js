const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrZWVydGhpZzA4MDZAZ21haWwuY29tIiwiZXhwIjoxNzgwNjM2MDE5LCJpYXQiOjE3ODA2MzUxMTksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiZjE4MDE4Yy0zYTZlLTQyOGEtODkwZS03ZjE1ZmIzZmU1NTQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrZWVydGhpIGd1ZGRhbnRpIiwic3ViIjoiOTY4MGRlZTMtM2UxMi00ZmY4LWJhNTctMWFhZjA2OGI5NjI2In0sImVtYWlsIjoia2VlcnRoaWcwODA2QGdtYWlsLmNvbSIsIm5hbWUiOiJrZWVydGhpIGd1ZGRhbnRpIiwicm9sbE5vIjoiMjNicTFhMDU4NCIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6Ijk2ODBkZWUzLTNlMTItNGZmOC1iYTU3LTFhYWYwNjhiOTYyNiIsImNsaWVudFNlY3JldCI6InpTVGR2YmN5enZCeFpUY04ifQ.Cnm5-hcoCdtQrOLEBFloC9Q9XhQZzBuFpVYNxQfQohE";

async function getTop10Notifications() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const notifications = response.data.notifications;

    const priorityMap = {
      Placement: 3,
      Result: 2,
      Event: 1,
    };

    const top10 = notifications
      .sort(
        (a, b) =>
          priorityMap[b.Type] - priorityMap[a.Type]
      )
      .slice(0, 10);

    console.log("Top 10 Priority Notifications:\n");

    top10.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.Type} | ${item.Message} | ${item.Timestamp}`
      );
    });

    return top10;
  } catch (error) {
    console.error("Error fetching notifications:", error.message);
  }
}

getTop10Notifications();