const fs = require("fs");
const yaml = require("js-yaml");

const content = yaml.load(fs.readFileSync("content.yml", "utf8"));

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>${content.name} | ${content.title}</title>
<style>
body{font-family:Arial;max-width:800px;margin:40px auto;padding:20px}
.card{border:1px solid #ddd;border-radius:10px;padding:15px;margin:15px 0}
button{padding:8px 12px;border-radius:8px;border:1px solid #000;background:#000;color:#fff}
</style>
</head>
<body>

<h1>${content.name}</h1>
<p><strong>${content.title}</strong></p>
<p>${content.tagline}</p>

<div class="card">
<h2>Services</h2>
<ul>
${content.services.map(s => `<li>${s}</li>`).join("")}
</ul>
</div>

<div class="card">
<h2>Proof</h2>
<ul>
${content.proof.map(p => `<li>${p}</li>`).join("")}
</ul>
</div>

<div class="card">
<h2>Contact</h2>
<a href="mailto:${content.contact.email}">Email Me</a>
<br><br>
<a href="${content.contact.booking_url}" target="_blank">
<button>Book a Call</button>
</a>
</div>

</body>
</html>
`;

fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/index.html", html);

console.log("Site built successfully.");
