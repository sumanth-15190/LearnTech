const body = {
    language: 'java',
    version: '15.0.2',
    files: [{
        content: 'public class Main { public static void main(String[] args) { System.out.println("Hello World"); } }'
    }]
};
fetch('https://emkc.org/api/v2/piston/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
})
    .then(r => r.json())
    .then(d => console.log(JSON.stringify(d, null, 2)))
    .catch(e => console.error(e));
