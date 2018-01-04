// templete strings or templete literals

const name = 'John';
const age = '30';
const job = 'Web developer';
const city = 'Denver';
let html;

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>
`;

document.body.innerHTML = html