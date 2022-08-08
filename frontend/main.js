window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 50;
    fetch(functionApi).then(response => {
        return response.json;
    }).then(response => {
        console.log("API Hit");
        document.getElementById("count").innerText = response.count;
    }).catch(error => {
        console.log(error());
    });
    return count;
}