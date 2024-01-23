
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
        if(data.days == 1) {
            const daySepll = document.getElementById('daySpellCheck')
            daySepll.textContent = 'day'   
        }else{
            const daySepll = document.getElementById('daySpellCheck')
            daySepll.textContent = 'days'
        }
        if(data.isBirthDayToday) {
            document.getElementById('ageOutput').classList.add('not-display')
            document.querySelector('.container').classList.add('birth-alert')
            const birthDayOutput = document.getElementById('birthDayOutput')
            birthDayOutput.textContent = `Happy Birthday, ${data.years} years of age!`
            birthDayOutput.classList.add('birthday')
            birthDayOutput.classList.remove('not-display')

        }
        if(!data.isBirthDayToday){
            document.getElementById('ageOutput').classList.remove('not-display')
            document.querySelector('.container').classList.remove('birth-alert')
            birthDayOutput.classList.add('not-display')
            document.getElementById('ageYear').textContent = data.years
            document.getElementById('ageMonth').textContent = data.month;
            document.getElementById('ageDay').textContent = data.days
        }
            
        
    }).catch(err =>{
        console.log(err)
    })
})

    