export async function getCSVAsString(filename) {
    let content = '';
    try {
        const res = await fetch(filename, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8'
            }
        });
        
        if(!res.ok) throw new Error(`Response status: ${res.status}`);

        content = await res.text();
    } catch(e) {
        console.log(e.message);
    }
    return content;
}

export function convertStringToArray(content) {
    const rows = content.split('\r\n');

    const quotecheck = new RegExp(/"/); //

    const noEmpty = rows.forEach(line=>{
        if(quotecheck.test(line)) {
            const quoteSection = new RegExp(/"(.*?)"/g);
            console.log(line.match(quoteSection));
        }
    })

    return '';
}