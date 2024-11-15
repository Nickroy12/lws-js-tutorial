const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");

href.innerHTML = "Window href: " + location.href;
hostname.innerHTML = "Window hostname: " + location.hostname;
pathname.innerHTML = "Window pathname: " + location.pathname;
protocol.innerHTML = "Window protocol: " + location.protocol;
port.innerHTML = "Window port: " + location.port;

function loadw3s() {
    window.location.assign("https://www.w3schools.com");
}
