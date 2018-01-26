// templete strings or templete literals

const name = 'John';
const age = '30';
const job = 'Web developer';
const city = 'Denver';

function hello() {
    return 'Hello there!'
}
let html;

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html

