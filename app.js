function convertDate() {  
    const inputDate = document.getElementById('changing-date').value.trim();   
    let convertedDate = '';  

    if (inputDate.match(/^\d{4}\/\d{2}\/\d{2}$/)) {  
        const [year, month, day] = inputDate.split('/').map(Number);  
        convertedDate = moment.jalaali(`${year}-${month}-${day}`, 'jYYYY-jMM-jDD').format('YYYY/MM/DD');  
        convertedDate = `تاریخ معادل میلادی: ${convertedDate}`;  
    } else if (inputDate.match(/^\d{4}-\d{2}-\d{2}$/)) {  
        const [year, month, day] = inputDate.split('-').map(Number);  
        convertedDate = moment(`${year}-${month}-${day}`).format('jYYYY/jMM/jDD');  
        convertedDate = `تاریخ معادل شمسی: ${convertedDate}`;  
    } else {  
        convertedDate = 'فرمت تاریخ نادرست است. لطفا تاریخ را به درستی وارد کنید.';  
    }  

    document.getElementById('convertedDate').innerText = convertedDate;  
}  