window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 50;
    fetch(functionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("API Hit");
        document.getElementById("counter").innerText = response.count;
    }).catch(error => {
        console.log(error());
    });
    return count;
}