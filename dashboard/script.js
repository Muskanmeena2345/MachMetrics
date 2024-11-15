// Initialize variables for charts
let productionData = [5, 10, 15, 20, 18, 25, 30];
let temperatureData = [22, 23, 25, 24, 26, 27, 25];
let energyConsumptionData = [100, 120, 110, 105, 115, 130, 125];
let machineStatusData = { running: 65, idle: 25, maintenance: 10 };

// Chart initialization
const lineChart = new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{ label: "Production Rate", data: productionData, borderColor: "#FF9800", tension: 0.2 }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

const pieChart = new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Running", "Idle", "Maintenance"],
        datasets: [{ data: [65, 25, 10], backgroundColor: ["#4CAF50", "#FFC107", "#F44336"] }]
    },
    options: { responsive: true }
});

const tempChart = new Chart(document.getElementById("tempChart"), {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{ label: "Temperature (°C)", data: temperatureData, borderColor: "#03A9F4", tension: 0.2 }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: false } } }
});

const energyChart = new Chart(document.getElementById("energyChart"), {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{ label: "Energy (kWh)", data: energyConsumptionData, borderColor: "#E91E63", tension: 0.2 }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: false } } }
});

// Dynamic Data Update
function updateData(machineName) {
    const productionRate = document.getElementById("productionRate");
    const machineHealth = document.getElementById("machineHealth");
    const maintenanceAlert = document.getElementById("maintenanceAlert");

    productionRate.innerText = `${Math.floor(Math.random() * 100)} units/hr`;
    machineHealth.innerText = Math.random() > 0.5 ? "Good" : "Needs Attention";
    maintenanceAlert.innerText = Math.random() > 0.5 ? "Scheduled" : "Urgent";

    lineChart.data.datasets[0].data = productionData.map(() => Math.floor(Math.random() * 50) + 10);
    lineChart.update();
    pieChart.update();
    tempChart.update();
    energyChart.update();
}

// Filter machines and update display
function filterMachine(machine) {
    document.getElementById("machineName").innerText = machine;
    updateData(machine);
}

// Auto-update every 5 seconds
setInterval(updateData, 5000);
