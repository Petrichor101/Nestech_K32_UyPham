let sout = "<table border='1' width='1000px' cellspacing='0' cellpadding='3' style='margin:auto'>";

for (let i = 1; i <= 10; i++){
    sout += '<tr>'
    for (j = 2; j < 10; j++) {{
        sout += `<td> ${j} x ${i} = ${j * i}</td>`;
    }}
}

document.write(sout)