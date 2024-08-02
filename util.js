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
    const stringArray = [];
    const rows = content.split('\r\n');
    const quotecheck = new RegExp(/"/);

    const noEmpty = rows.forEach(line=>{
        let quote = "";
        if(quotecheck.test(line)) {
            const quoteSection = new RegExp(/"(.*?)"/);
            quote = quoteSection.exec(line);
            line = line.substring(0, quote.index-1);
        }
        const arr = line.split(",");
        (quote !== "") && arr.push(quote[1]);
        stringArray.push(arr);
    })

    console.log(stringArray);

    return stringArray;
}