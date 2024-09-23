let cattleCount = 1;

function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

function addCattle(event) {
  event.preventDefault();

  const idNumber = `BPM-${cattleCount}`;
  const sex = document.getElementById('sex').value;
  const type = document.getElementById('type').value;
  const color = document.getElementById('color').value;
  const origin = document.getElementById('origin').value;
  const predecessor = document.getElementById('predecessor').value;

  const cattleTable = document.querySelector('#cattleTable tbody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${idNumber}</td>
    <td>${sex}</td>
    <td>${type}</td>
    <td>${color}</td>
    <td>${origin}</td>
    <td>${predecessor}</td>
  `;
  cattleTable.appendChild(row);

  // Increment cattle count for the next cattle ID
  cattleCount++;

  // Reset form
  document.getElementById('cattleForm').reset();
  document.getElementById('idNumber').value = `BPM-${cattleCount}`;
}
