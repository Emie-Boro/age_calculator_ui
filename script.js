
document.getElementById('submit').addEventListener('click', ()=>{
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;

    fetch(`https://3mtt-age-calculator.cyclic.app/date/${year}/${month}/${day}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
        })
    .then(data =>{
        console.log(data)
        document.getElementById('ageYear').textContent = data.years
        document.getElementById('ageMonth').textContent = data.month;
        document.getElementById('ageDay').textContent = data.days
    }).catch(err =>{
        console.log(err)
    })
})

    