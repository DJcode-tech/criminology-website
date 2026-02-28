// Crime type chart
const typeCanvas = document.getElementById("crimeTypeChart");

if(typeCanvas){
new Chart(typeCanvas, {
type: "bar",
data: {
labels: ["Theft", "Fraud", "Assault", "Drug Crime", "Cybercrime"],
datasets: [{
label: "Reported Cases (example)",
data: [40, 30, 20, 15, 25],
backgroundColor: "#1f6feb"
}]
}
});
}


// Reported vs real chart
const gapCanvas = document.getElementById("reportedVsActualChart");

if(gapCanvas){
new Chart(gapCanvas, {
type: "line",
data: {
labels: ["2019","2020","2021","2022","2023"],
datasets: [
{
label: "Reported",
data: [60,58,63,68,70],
borderColor: "#1f6feb"
},
{
label: "Estimated real",
data: [120,130,138,145,155],
borderColor: "#ef4444"
}
]
}
});
}
