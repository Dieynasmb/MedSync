const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET"
};

const req = http.request(options, res => {
  if (res.statusCode === 200) {
    console.log("Backend test OK ✔");
    process.exit(0);
  } else {
    console.error("Backend test FAILED ❌");
    process.exit(1);
  }
});

req.on("error", () => {
  console.error("Backend unreachable ❌");
  process.exit(1);
});

req.end();
