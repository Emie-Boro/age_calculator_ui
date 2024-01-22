
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
        if(data.isBirthDayToday) {
            const ageOutput = document.getElementById('ageOutput')
            const ageContainer = document.getElementById('age-container')
            const birthDayWish = document.createElement('h1')
            birthDayWish.textContent = `Happy Birthday, you are ${data.years} years`
            birthDayWish.classList.add('birthday')
            console.log(birthDayWish) 
            ageOutput.classList.add('not-display')
            ageContainer.appendChild(birthDayWish)

        } else{
            document.getElementById('ageYear').textContent = data.years
            document.getElementById('ageMonth').textContent = data.month;
            document.getElementById('ageDay').textContent = data.days
        }
    }).catch(err =>{
        console.log(err)
    })
})

    